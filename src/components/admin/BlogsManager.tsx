import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Plus, Edit, Trash2, Eye, Search, Calendar } from 'lucide-react';
import { format } from 'date-fns';

interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured_image_url: string | null;
  status: 'draft' | 'published' | 'archived';
  published_at: string | null;
  created_at: string;
  updated_at: string;
  views: number;
  tags: string[] | null;
}

export const BlogsManager = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'draft' | 'published' | 'archived'>('all');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    featured_image_url: '',
    status: 'draft' as 'draft' | 'published' | 'archived',
    tags: ''
  });

  const fetchBlogs = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setBlogs(data || []);
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to fetch blogs: " + error.message,
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const slug = formData.slug || generateSlug(formData.title);
    const tags = formData.tags ? formData.tags.split(',').map(tag => tag.trim()) : null;
    
    try {
      const blogData = {
        title: formData.title,
        slug,
        excerpt: formData.excerpt,
        content: formData.content,
        featured_image_url: formData.featured_image_url || null,
        status: formData.status,
        tags,
        published_at: formData.status === 'published' ? new Date().toISOString() : null
      };

      if (editingBlog) {
        const { error } = await supabase
          .from('blogs')
          .update(blogData)
          .eq('id', editingBlog.id);

        if (error) throw error;
        
        toast({
          title: "Success",
          description: "Blog updated successfully!"
        });
      } else {
        const { error } = await supabase
          .from('blogs')
          .insert([blogData]);

        if (error) throw error;
        
        toast({
          title: "Success", 
          description: "Blog created successfully!"
        });
      }

      setIsDialogOpen(false);
      setEditingBlog(null);
      setFormData({
        title: '',
        slug: '',
        excerpt: '',
        content: '',
        featured_image_url: '',
        status: 'draft',
        tags: ''
      });
      fetchBlogs();
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to save blog: " + error.message,
        variant: "destructive"
      });
    }
  };

  const handleEdit = (blog: Blog) => {
    setEditingBlog(blog);
      setFormData({
        title: blog.title,
        slug: blog.slug,
        excerpt: blog.excerpt,
        content: blog.content,
        featured_image_url: blog.featured_image_url || '',
        status: blog.status as 'draft' | 'published' | 'archived',
        tags: blog.tags ? blog.tags.join(', ') : ''
      });
    setIsDialogOpen(true);
  };

  const handleDelete = async (blogId: string) => {
    if (!confirm('Are you sure you want to delete this blog?')) return;
    
    try {
      const { error } = await supabase
        .from('blogs')
        .delete()
        .eq('id', blogId);

      if (error) throw error;
      
      toast({
        title: "Success",
        description: "Blog deleted successfully!"
      });
      fetchBlogs();
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to delete blog: " + error.message,
        variant: "destructive"
      });
    }
  };

  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         blog.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || blog.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row gap-4 justify-between">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
            <Input
              placeholder="Search blogs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/50"
            />
          </div>
          <Select value={statusFilter} onValueChange={(value: any) => setStatusFilter(value)}>
            <SelectTrigger className="w-[180px] bg-white/10 border-white/20 text-white">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="draft">Draft</SelectItem>
              <SelectItem value="published">Published</SelectItem>
              <SelectItem value="archived">Archived</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-accent hover:bg-accent/90">
              <Plus className="w-4 h-4 mr-2" />
              New Blog
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-white">
            <DialogHeader>
              <DialogTitle>{editingBlog ? 'Edit Blog' : 'Create New Blog'}</DialogTitle>
              <DialogDescription>
                {editingBlog ? 'Update the blog details below.' : 'Fill in the details to create a new blog post.'}
              </DialogDescription>
            </DialogHeader>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label className='text-[#1f1f1f]' htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label  className='text-[#1f1f1f]' htmlFor="slug">Slug</Label>
                <Input
                  id="slug"
                  value={formData.slug}
                  onChange={(e) => setFormData({...formData, slug: e.target.value})}
                  placeholder="Leave empty to auto-generate"
                />
              </div>
              
              <div className="space-y-2">
                <Label className='text-[#1f1f1f]' htmlFor="excerpt">Excerpt</Label>
                <Textarea
                  id="excerpt"
                  value={formData.excerpt}
                  onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
                  rows={2}
                />
              </div>
              
              <div className="space-y-2">
                <Label className='text-[#1f1f1f]' htmlFor="content">Content *</Label>
                <Textarea
                  id="content"
                  value={formData.content}
                  onChange={(e) => setFormData({...formData, content: e.target.value})}
                  rows={8}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label className='text-[#1f1f1f]' htmlFor="featured_image">Featured Image URL</Label>
                <Input
                  id="featured_image"
                  value={formData.featured_image_url}
                  onChange={(e) => setFormData({...formData, featured_image_url: e.target.value})}
                  placeholder="https://example.com/image.jpg"
                />
              </div>
              
              <div className="space-y-2">
                <Label className='text-[#1f1f1f]' htmlFor="tags">Tags (comma-separated)</Label>
                <Input
                  id="tags"
                  value={formData.tags}
                  onChange={(e) => setFormData({...formData, tags: e.target.value})}
                  placeholder="technology, web development, AI"
                />
              </div>
              
              <div className="space-y-2">
                <Label className='text-[#1f1f1f]' htmlFor="status">Status</Label>
                <Select value={formData.status} onValueChange={(value: 'draft' | 'published' | 'archived') => setFormData({...formData, status: value})}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="published">Published</SelectItem>
                    <SelectItem value="archived">Archived</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex gap-2 pt-4">
                <Button type="submit" className="bg-accent hover:bg-[#1f1f1f] hover:text-white">
                  {editingBlog ? 'Update Blog' : 'Create Blog'}
                </Button>
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => {
                    setIsDialogOpen(false);
                    setEditingBlog(null);
                    setFormData({
                      title: '',
                      slug: '',
                      excerpt: '',
                      content: '',
                      featured_image_url: '',
                      status: 'draft' as 'draft' | 'published' | 'archived',
                      tags: ''
                    });
                  }}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {isLoading ? (
        <div className="text-center py-8">
          <div className="text-white/80">Loading blogs...</div>
        </div>
      ) : (
        <div className="grid gap-4">
          {filteredBlogs.length === 0 ? (
            <div className="text-center py-8">
              <div className="text-white/80">No blogs found</div>
            </div>
          ) : (
            filteredBlogs.map((blog) => (
              <Card key={blog.id} className="bg-white/5 border-white/20">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-white text-lg">{blog.title}</CardTitle>
                      <CardDescription className="text-white/70 mt-1">
                        {blog.excerpt || 'No excerpt provided'}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge 
                        variant={blog.status === 'published' ? 'default' : 'secondary'}
                        className={blog.status === 'published' ? 'bg-green-500' : ''}
                      >
                        {blog.status}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-white">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {format(new Date(blog.created_at), 'MMM d, yyyy')}
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {blog.views} views
                      </div>
                      {blog.tags && blog.tags.length > 0 && (
                        <div className="flex gap-1">
                          {blog.tags.slice(0, 2).map((tag, index) => (
                            <Badge key={index} variant="outline" className="text-xs border-white/20 text-white/70">
                              {tag}
                            </Badge>
                          ))}
                          {blog.tags.length > 2 && (
                            <Badge variant="outline" className="text-xs border-white/20 text-white/70">
                              +{blog.tags.length - 2}
                            </Badge>
                          )}
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleEdit(blog)}
                        className="border-white/20 text-white hover:bg-white"
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDelete(blog.id)}
                        className="border-red-400/20 text-red hover:bg-red "
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      )}
    </div>
  );
};