import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { ImageUpload } from '@/components/admin/ImageUpload';
import { generateSlug } from '@/lib/cms';
import type { CaseStudy, PublishStatus } from '@/types/cms';
import { Plus, Edit, Trash2, Search } from 'lucide-react';

const emptyForm = {
  title: '',
  slug: '',
  subtitle: '',
  description: '',
  short_description: '',
  hero_image_url: '',
  category: '',
  status: 'draft' as PublishStatus,
  is_featured: false,
  sort_order: 0,
  seo_title: '',
  seo_description: '',
};

export const CaseStudiesManager = () => {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editing, setEditing] = useState<CaseStudy | null>(null);
  const [formData, setFormData] = useState(emptyForm);
  const { toast } = useToast();

  const fetchAll = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('case_studies')
        .select('*')
        .order('sort_order', { ascending: true });
      if (error) throw error;
      setCaseStudies((data as CaseStudy[]) || []);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Failed to fetch case studies';
      toast({ title: 'Error', description: message, variant: 'destructive' });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => { fetchAll(); }, []);

  const openCreate = () => {
    setEditing(null);
    setFormData(emptyForm);
    setIsDialogOpen(true);
  };

  const openEdit = (cs: CaseStudy) => {
    setEditing(cs);
    setFormData({
      title: cs.title,
      slug: cs.slug,
      subtitle: cs.subtitle || '',
      description: cs.description || '',
      short_description: cs.short_description || '',
      hero_image_url: cs.hero_image_url || '',
      category: cs.category || '',
      status: cs.status,
      is_featured: cs.is_featured,
      sort_order: cs.sort_order,
      seo_title: cs.seo_title || '',
      seo_description: cs.seo_description || '',
    });
    setIsDialogOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const slug = formData.slug || generateSlug(formData.title);
    const payload = { ...formData, slug };

    try {
      if (editing) {
        const { error } = await supabase.from('case_studies').update(payload).eq('id', editing.id);
        if (error) throw error;
        toast({ title: 'Updated', description: 'Case study updated.' });
      } else {
        const { error } = await supabase.from('case_studies').insert([payload]);
        if (error) throw error;
        toast({ title: 'Created', description: 'Case study created.' });
      }
      setIsDialogOpen(false);
      fetchAll();
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Save failed';
      toast({ title: 'Error', description: message, variant: 'destructive' });
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this case study?')) return;
    try {
      const { error } = await supabase.from('case_studies').delete().eq('id', id);
      if (error) throw error;
      toast({ title: 'Deleted', description: 'Case study deleted.' });
      fetchAll();
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Delete failed';
      toast({ title: 'Error', description: message, variant: 'destructive' });
    }
  };

  const filtered = caseStudies.filter(cs =>
    cs.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Search case studies..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="pl-9" />
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={openCreate}><Plus className="w-4 h-4 mr-2" />Add Case Study</Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editing ? 'Edit Case Study' : 'New Case Study'}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Title</Label>
                  <Input value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} required />
                </div>
                <div className="space-y-2">
                  <Label>Slug</Label>
                  <Input value={formData.slug} onChange={(e) => setFormData({ ...formData, slug: e.target.value })} />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Subtitle</Label>
                <Input value={formData.subtitle} onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label>Short Description</Label>
                <Textarea value={formData.short_description} onChange={(e) => setFormData({ ...formData, short_description: e.target.value })} rows={2} />
              </div>
              <div className="space-y-2">
                <Label>Description</Label>
                <Textarea value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} rows={4} />
              </div>
              <ImageUpload label="Hero Image" folder="case-studies" value={formData.hero_image_url} onChange={(url) => setFormData({ ...formData, hero_image_url: url })} />
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Category</Label>
                  <Input value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} />
                </div>
                <div className="space-y-2">
                  <Label>Status</Label>
                  <Select value={formData.status} onValueChange={(v) => setFormData({ ...formData, status: v as PublishStatus })}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="published">Published</SelectItem>
                      <SelectItem value="archived">Archived</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Switch checked={formData.is_featured} onCheckedChange={(v) => setFormData({ ...formData, is_featured: v })} />
                <Label>Featured</Label>
              </div>
              <Button type="submit" className="w-full">{editing ? 'Update' : 'Create'}</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {isLoading ? (
        <p className="text-muted-foreground">Loading case studies...</p>
      ) : (
        <div className="grid gap-4">
          {filtered.map((cs) => (
            <Card key={cs.id}>
              <CardHeader className="flex flex-row items-center justify-between py-4">
                <div>
                  <CardTitle className="text-lg flex items-center gap-2">
                    {cs.title}
                    {cs.is_featured && <Badge variant="secondary">Featured</Badge>}
                    <Badge variant={cs.status === 'published' ? 'default' : 'outline'}>{cs.status}</Badge>
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">{cs.subtitle}</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" onClick={() => openEdit(cs)}><Edit className="w-4 h-4" /></Button>
                  <Button variant="ghost" size="icon" onClick={() => handleDelete(cs.id)}><Trash2 className="w-4 h-4" /></Button>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};
