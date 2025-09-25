import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { supabase } from '@/integrations/supabase/client';
import { BarChart, Users, FileText, TrendingUp, Calendar, Eye, MessageSquare } from 'lucide-react';
import { format, subDays, startOfMonth, endOfMonth, startOfYear, endOfYear } from 'date-fns';

interface AnalyticsData {
  totalBlogs: number;
  publishedBlogs: number;
  totalLeads: number;
  newLeads: number;
  totalViews: number;
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
  }>;
}

export const Analytics = () => {
  const [data, setData] = useState<AnalyticsData>({
    totalBlogs: 0,
    publishedBlogs: 0,
    totalLeads: 0,
    newLeads: 0,
    totalViews: 0,
    recentActivity: [],
    leadsByStatus: {},
    blogsByStatus: {},
    leadsOverTime: []
  });
  const [isLoading, setIsLoading] = useState(true);
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '3m' | '1y'>('30d');

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
        .select('id, title, status, views, created_at')
        .gte('created_at', start.toISOString())
        .lte('created_at', end.toISOString());

      if (blogsError) throw blogsError;

      // Fetch all blogs for total count
      const { data: allBlogsData, error: allBlogsError } = await supabase
        .from('blogs')
        .select('id, status, views');

      if (allBlogsError) throw allBlogsError;

      // Fetch leads data
      const { data: leadsData, error: leadsError } = await supabase
        .from('contact_leads')
        .select('id, name, status, created_at')
        .gte('created_at', start.toISOString())
        .lte('created_at', end.toISOString());

      if (leadsError) throw leadsError;

      // Fetch all leads for total count
      const { data: allLeadsData, error: allLeadsError } = await supabase
        .from('contact_leads')
        .select('id, status, created_at');

      if (allLeadsError) throw allLeadsError;

      // Calculate analytics
      const totalBlogs = allBlogsData?.length || 0;
      const publishedBlogs = allBlogsData?.filter(b => b.status === 'published').length || 0;
      const totalLeads = allLeadsData?.length || 0;
      const newLeads = allLeadsData?.filter(l => l.status === 'new').length || 0;
      const totalViews = allBlogsData?.reduce((sum, blog) => sum + (blog.views || 0), 0) || 0;

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
        acc[lead.status] = (acc[lead.status] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);

      // Blogs by status
      const blogsByStatus = (allBlogsData || []).reduce((acc, blog) => {
        acc[blog.status] = (acc[blog.status] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);

      // Leads over time (daily for selected period)
      const leadsOverTime: Array<{ date: string; count: number }> = [];
      const daysDiff = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
      
      for (let i = 0; i < daysDiff; i++) {
        const date = new Date(start);
        date.setDate(date.getDate() + i);
        const dateStr = format(date, 'yyyy-MM-dd');
        
        const count = (leadsData || []).filter(lead => 
          format(new Date(lead.created_at), 'yyyy-MM-dd') === dateStr
        ).length;
        
        leadsOverTime.push({ date: dateStr, count });
      }

      setData({
        totalBlogs,
        publishedBlogs,
        totalLeads,
        newLeads,
        totalViews,
        recentActivity,
        leadsByStatus,
        blogsByStatus,
        leadsOverTime
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

  const statCards = [
    {
      title: 'Total Blogs',
      value: data.totalBlogs.toString(),
      description: `${data.publishedBlogs} published`,
      icon: FileText,
      color: 'text-blue-400'
    },
    {
      title: 'Total Leads',
      value: data.totalLeads.toString(), 
      description: `${data.newLeads} new leads`,
      icon: Users,
      color: 'text-green-400'
    },
    {
      title: 'Blog Views',
      value: data.totalViews.toString(),
      description: 'Total page views',
      icon: Eye,
      color: 'text-purple-400'
    },
    {
      title: 'Conversion Rate',
      value: data.totalLeads > 0 ? `${Math.round((data.newLeads / data.totalLeads) * 100)}%` : '0%',
      description: 'New lead ratio',
      icon: TrendingUp,
      color: 'text-orange-400'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Analytics Dashboard</h2>
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
                  <stat.icon className={`h-4 w-4 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <p className="text-xs text-white/60">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Charts and Data */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Leads by Status */}
            <Card className="bg-white/5 border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Leads by Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {Object.entries(data.leadsByStatus).map(([status, count]) => (
                    <div key={status} className="flex justify-between items-center">
                      <span className="text-white/80 capitalize">{status}</span>
                      <span className="text-white font-semibold">{count}</span>
                    </div>
                  ))}
                  {Object.keys(data.leadsByStatus).length === 0 && (
                    <div className="text-white/60 text-center py-4">No data available</div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Blogs by Status */}
            <Card className="bg-white/5 border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Blogs by Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {Object.entries(data.blogsByStatus).map(([status, count]) => (
                    <div key={status} className="flex justify-between items-center">
                      <span className="text-white/80 capitalize">{status}</span>
                      <span className="text-white font-semibold">{count}</span>
                    </div>
                  ))}
                  {Object.keys(data.blogsByStatus).length === 0 && (
                    <div className="text-white/60 text-center py-4">No data available</div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="bg-white/5 border-white/20 lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Recent Activity
                </CardTitle>
                <CardDescription className="text-white/60">
                  Latest blogs and leads from the selected time period
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 max-h-60 overflow-y-auto">
                  {data.recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center justify-between border-b border-white/10 pb-2">
                      <div className="flex items-center gap-2">
                        {activity.type === 'blog' ? (
                          <FileText className="w-4 h-4 text-blue-400" />
                        ) : (
                          <MessageSquare className="w-4 h-4 text-green-400" />
                        )}
                        <span className="text-white/80">{activity.title}</span>
                      </div>
                      <span className="text-white/60 text-sm">
                        {format(new Date(activity.date), 'MMM d, HH:mm')}
                      </span>
                    </div>
                  ))}
                  {data.recentActivity.length === 0 && (
                    <div className="text-white/60 text-center py-4">No recent activity</div>
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