import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { supabase } from '@/integrations/supabase/client';
import { 
  BarChart, Users, FileText, TrendingUp, Calendar, Eye, MessageSquare, 
  Download, ArrowUpRight, ArrowDownRight, Target, Zap, DollarSign 
} from 'lucide-react';
import { format, subDays, startOfDay, endOfDay, eachDayOfInterval } from 'date-fns';
import { 
  LineChart, Line, BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Area, AreaChart 
} from 'recharts';

interface AnalyticsData {
  totalBlogs: number;
  publishedBlogs: number;
  totalLeads: number;
  newLeads: number;
  totalViews: number;
  conversionRate: number;
  avgResponseTime: number;
  topPerformingBlogs: Array<{
    title: string;
    views: number;
    slug: string;
  }>;
  recentActivity: Array<{
    type: 'blog' | 'lead';
    title: string;
    date: string;
  }>;
  leadsByStatus: Record<string, number>;
  blogsByStatus: Record<string, number>;
  leadsOverTime: Array<{
    date: string;
    count: number;
    cumulative: number;
  }>;
  viewsOverTime: Array<{
    date: string;
    views: number;
  }>;
  leadSources: Array<{
    source: string;
    count: number;
    percentage: number;
  }>;
}

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300', '#8dd1e1', '#d084d0'];

export const Analytics = () => {
  const [data, setData] = useState<AnalyticsData>({
    totalBlogs: 0,
    publishedBlogs: 0,
    totalLeads: 0,
    newLeads: 0,
    totalViews: 0,
    conversionRate: 0,
    avgResponseTime: 0,
    topPerformingBlogs: [],
    recentActivity: [],
    leadsByStatus: {},
    blogsByStatus: {},
    leadsOverTime: [],
    viewsOverTime: [],
    leadSources: []
  });
  const [isLoading, setIsLoading] = useState(true);
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '3m' | '1y'>('30d');
  const [exportingData, setExportingData] = useState(false);

  const getDateRange = (range: string) => {
    const now = new Date();
    switch (range) {
      case '7d':
        return { start: subDays(now, 7), end: now };
      case '30d':
        return { start: subDays(now, 30), end: now };
      case '3m':
        return { start: subDays(now, 90), end: now };
      case '1y':
        return { start: subDays(now, 365), end: now };
      default:
        return { start: subDays(now, 30), end: now };
    }
  };

  const fetchAnalyticsData = async () => {
    setIsLoading(true);
    try {
      const { start, end } = getDateRange(timeRange);
      
      // Fetch blogs data
      const { data: blogsData, error: blogsError } = await supabase
        .from('blogs')
        .select('id, title, slug, status, views, created_at, published_at')
        .gte('created_at', start.toISOString())
        .lte('created_at', end.toISOString());

      if (blogsError) throw blogsError;

      // Fetch all blogs for total count and top performers
      const { data: allBlogsData, error: allBlogsError } = await supabase
        .from('blogs')
        .select('id, title, slug, status, views, published_at')
        .order('views', { ascending: false });

      if (allBlogsError) throw allBlogsError;

      // Fetch leads data
      const { data: leadsData, error: leadsError } = await supabase
        .from('contact_leads')
        .select('id, name, status, source, created_at, updated_at')
        .gte('created_at', start.toISOString())
        .lte('created_at', end.toISOString());

      if (leadsError) throw leadsError;

      // Fetch all leads for total count
      const { data: allLeadsData, error: allLeadsError } = await supabase
        .from('contact_leads')
        .select('id, status, source, created_at, updated_at');

      if (allLeadsError) throw allLeadsError;

      // Calculate analytics
      const totalBlogs = allBlogsData?.length || 0;
      const publishedBlogs = allBlogsData?.filter(b => b.status === 'published').length || 0;
      const totalLeads = allLeadsData?.length || 0;
      const newLeads = allLeadsData?.filter(l => l.status === 'new').length || 0;
      const totalViews = allBlogsData?.reduce((sum, blog) => sum + (blog.views || 0), 0) || 0;
      
      // Calculate conversion rate (contacted leads / total leads)
      const contactedLeads = allLeadsData?.filter(l => l.status === 'contacted' || l.status === 'qualified').length || 0;
      const conversionRate = totalLeads > 0 ? (contactedLeads / totalLeads) * 100 : 0;

      // Calculate average response time (mock data for now)
      const avgResponseTime = 2.5; // hours

      // Top performing blogs
      const topPerformingBlogs = (allBlogsData || [])
        .filter(blog => blog.status === 'published' && blog.views > 0)
        .slice(0, 5)
        .map(blog => ({
          title: blog.title,
          views: blog.views || 0,
          slug: blog.slug
        }));

      // Recent activity
      const recentActivity = [
        ...(blogsData || []).map(blog => ({
          type: 'blog' as const,
          title: `New blog: ${blog.title}`,
          date: blog.created_at
        })),
        ...(leadsData || []).map(lead => ({
          type: 'lead' as const,
          title: `New lead: ${lead.name}`,
          date: lead.created_at
        }))
      ]
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 10);

      // Leads by status
      const leadsByStatus = (allLeadsData || []).reduce((acc, lead) => {
        acc[lead.status || 'unknown'] = (acc[lead.status || 'unknown'] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);

      // Blogs by status
      const blogsByStatus = (allBlogsData || []).reduce((acc, blog) => {
        acc[blog.status || 'unknown'] = (acc[blog.status || 'unknown'] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);

      // Generate leads over time data
      const dateRange = eachDayOfInterval({ start, end });
      let cumulativeCount = 0;
      const leadsOverTime = dateRange.map(date => {
        const dayStart = startOfDay(date);
        const dayEnd = endOfDay(date);
        const dayLeads = (leadsData || []).filter(lead => {
          const leadDate = new Date(lead.created_at);
          return leadDate >= dayStart && leadDate <= dayEnd;
        }).length;
        cumulativeCount += dayLeads;
        return {
          date: format(date, 'MMM dd'),
          count: dayLeads,
          cumulative: cumulativeCount
        };
      });

      // Generate views over time data
      const viewsOverTime = dateRange.map(date => {
        const dayViews = (blogsData || []).reduce((sum, blog) => {
          const blogDate = new Date(blog.published_at || blog.created_at);
          if (format(blogDate, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd')) {
            return sum + (blog.views || 0);
          }
          return sum;
        }, 0);
        return {
          date: format(date, 'MMM dd'),
          views: dayViews
        };
      });

      // Lead sources analysis
      const sourceData = (allLeadsData || []).reduce((acc, lead) => {
        const source = lead.source || 'Direct';
        acc[source] = (acc[source] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);

      const totalSourceLeads = Object.values(sourceData).reduce((sum, count) => sum + count, 0);
      const leadSources = Object.entries(sourceData).map(([source, count]) => ({
        source,
        count,
        percentage: totalSourceLeads > 0 ? (count / totalSourceLeads) * 100 : 0
      }));

      setData({
        totalBlogs,
        publishedBlogs,
        totalLeads,
        newLeads,
        totalViews,
        conversionRate,
        avgResponseTime,
        topPerformingBlogs,
        recentActivity,
        leadsByStatus,
        blogsByStatus,
        leadsOverTime,
        viewsOverTime,
        leadSources
      });

    } catch (error: any) {
      console.error('Analytics fetch error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAnalyticsData();
  }, [timeRange]);

  const exportToCSV = async () => {
    setExportingData(true);
    try {
      // Fetch all data for export
      const { data: allBlogs } = await supabase.from('blogs').select('*');
      const { data: allLeads } = await supabase.from('contact_leads').select('*');

      // Create CSV content
      const blogsCSV = [
        ['Title', 'Status', 'Views', 'Created At', 'Published At', 'Tags'].join(','),
        ...(allBlogs || []).map(blog => [
          `"${blog.title}"`,
          blog.status,
          blog.views || 0,
          blog.created_at,
          blog.published_at || '',
          `"${(blog.tags || []).join(', ')}"` 
        ].join(','))
      ].join('\n');

      const leadsCSV = [
        ['Name', 'Email', 'Company', 'Status', 'Source', 'Created At'].join(','),
        ...(allLeads || []).map(lead => [
          `"${lead.name}"`,
          lead.email,
          `"${lead.company || ''}"`,
          lead.status,
          lead.source || 'Direct',
          lead.created_at
        ].join(','))
      ].join('\n');

      // Download blogs CSV
      const blogsBlob = new Blob([blogsCSV], { type: 'text/csv' });
      const blogsUrl = URL.createObjectURL(blogsBlob);
      const blogsLink = document.createElement('a');
      blogsLink.href = blogsUrl;
      blogsLink.download = `blogs-export-${format(new Date(), 'yyyy-MM-dd')}.csv`;
      blogsLink.click();

      // Download leads CSV
      setTimeout(() => {
        const leadsBlob = new Blob([leadsCSV], { type: 'text/csv' });
        const leadsUrl = URL.createObjectURL(leadsBlob);
        const leadsLink = document.createElement('a');
        leadsLink.href = leadsUrl;
        leadsLink.download = `leads-export-${format(new Date(), 'yyyy-MM-dd')}.csv`;
        leadsLink.click();
      }, 500);

    } catch (error) {
      console.error('Export error:', error);
    } finally {
      setExportingData(false);
    }
  };

  const statCards = [
    {
      title: "Total Blogs",
      value: data.totalBlogs,
      change: `${data.publishedBlogs} published`,
      icon: FileText,
      color: "text-blue-400"
    },
    {
      title: "Total Leads",
      value: data.totalLeads,
      change: `${data.newLeads} new this period`,
      icon: Users,
      color: "text-green-400"
    },
    {
      title: "Total Views",
      value: data.totalViews.toLocaleString(),
      change: "Across all content",
      icon: Eye,
      color: "text-purple-400"
    },
    {
      title: "Conversion Rate",
      value: `${data.conversionRate.toFixed(1)}%`,
      change: `${data.avgResponseTime}h avg response`,
      icon: Target,
      color: "text-orange-400"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header with Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Analytics Dashboard</h2>
          <p className="text-white/60">Comprehensive insights into your business performance</p>
        </div>
        <div className="flex gap-3">
          <Select value={timeRange} onValueChange={(value: any) => setTimeRange(value)}>
            <SelectTrigger className="w-32 bg-white/10 border-white/20 text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="3m">Last 3 months</SelectItem>
              <SelectItem value="1y">Last year</SelectItem>
            </SelectContent>
          </Select>
          <Button 
            onClick={exportToCSV}
            disabled={exportingData}
            className="bg-card/60 border-border text-foreground hover:bg-card"
            data-testid="button-export-data"
          >
            <Download className="w-4 h-4 mr-2" />
            {exportingData ? 'Exporting...' : 'Export Data'}
          </Button>
        </div>
      </div>

      {isLoading ? (
        <div className="text-center py-8">
          <div className="text-white/80">Loading analytics...</div>
        </div>
      ) : (
        <>
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {statCards.map((stat, index) => (
              <Card key={index} className="bg-white/5 border-white/20">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-white/80">
                    {stat.title}
                  </CardTitle>
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <p className="text-xs text-white">{stat.change}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Leads Over Time */}
            <Card className="bg-white/5 border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Leads Over Time
                </CardTitle>
                <CardDescription className="text-white/60">
                  Daily lead acquisition and cumulative growth
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={data.leadsOverTime}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="date" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1F2937', 
                        border: '1px solid #374151',
                        borderRadius: '8px'
                      }} 
                    />
                    <Area 
                      type="monotone" 
                      dataKey="count" 
                      stroke="#8884d8" 
                      fill="#8884d8" 
                      fillOpacity={0.6}
                      name="Daily Leads"
                    />
                    <Area 
                      type="monotone" 
                      dataKey="cumulative" 
                      stroke="#82ca9d" 
                      fill="#82ca9d" 
                      fillOpacity={0.4}
                      name="Cumulative"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Lead Sources Pie Chart */}
            <Card className="bg-white/5 border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Lead Sources
                </CardTitle>
                <CardDescription className="text-white/60">
                  Distribution of lead acquisition channels
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={data.leadSources}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="count"
                      label={({ source, percentage }) => `${source} (${percentage.toFixed(1)}%)`}
                    >
                      {data.leadSources.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Blog Views Over Time */}
            <Card className="bg-white/5 border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Eye className="w-5 h-5" />
                  Content Performance
                </CardTitle>
                <CardDescription className="text-white/60">
                  Blog views and engagement metrics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={data.viewsOverTime}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="date" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1F2937', 
                        border: '1px solid #374151',
                        borderRadius: '8px'
                      }} 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="views" 
                      stroke="#ffc658" 
                      strokeWidth={2}
                      dot={{ fill: '#ffc658' }}
                      name="Views"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Status Distribution */}
            <Card className="bg-white/5 border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <BarChart className="w-5 h-5" />
                  Status Distribution
                </CardTitle>
                <CardDescription className="text-white/60">
                  Leads and blogs by current status
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-white font-medium mb-3">Leads by Status</h4>
                    <div className="space-y-2">
                      {Object.entries(data.leadsByStatus).map(([status, count]) => (
                        <div key={status} className="flex justify-between items-center">
                          <span className="text-white capitalize">{status}</span>
                          <span className="text-white font-semibold">{count}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-3">Blogs by Status</h4>
                    <div className="space-y-2">
                      {Object.entries(data.blogsByStatus).map(([status, count]) => (
                        <div key={status} className="flex justify-between items-center">
                          <span className="text-white capitalize">{status}</span>
                          <span className="text-white font-semibold">{count}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Top Performing Blogs */}
            <Card className="bg-white/5 border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Top Performing Content
                </CardTitle>
                <CardDescription className="text-white/60">
                  Most viewed blog posts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {data.topPerformingBlogs.length > 0 ? (
                    data.topPerformingBlogs.map((blog, index) => (
                      <div key={blog.slug} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-xs font-bold">
                            {index + 1}
                          </div>
                          <div>
                            <p className="text-white font-medium line-clamp-1">{blog.title}</p>
                            <p className="text-white text-sm">{blog.views} views</p>
                          </div>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-green-400" />
                      </div>
                    ))
                  ) : (
                    <div className="text-white text-center py-4">No published blogs yet</div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="bg-white/5 border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Recent Activity
                </CardTitle>
                <CardDescription className="text-white/60">
                  Latest blogs and leads
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {data.recentActivity.length > 0 ? (
                    data.recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-center gap-3 p-2">
                        <div className={`w-2 h-2 rounded-full ${
                          activity.type === 'blog' ? 'bg-blue-400' : 'bg-green-400'
                        }`} />
                        <div className="flex-1">
                          <p className="text-white text-sm">{activity.title}</p>
                          <p className="text-white text-xs">
                            {format(new Date(activity.date), 'MMM d, h:mm a')}
                          </p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-white text-center py-4">No recent activity</div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </>
      )}
    </div>
  );
};