import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { ImageUpload } from '@/components/admin/ImageUpload';
import { generateSlug } from '@/lib/cms';
import type { Product, PublishStatus } from '@/types/cms';
import { Plus, Edit, Trash2, Search } from 'lucide-react';

const emptyForm = {
  name: '',
  slug: '',
  tagline: '',
  description: '',
  logo_url: '',
  hero_visual_url: '',
  accent_color: '',
  external_url: '',
  cta_text: '',
  cta_url: '',
  is_featured: false,
  sort_order: 0,
  status: 'draft' as PublishStatus,
  seo_title: '',
  seo_description: '',
};

export const ProductsManager = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editing, setEditing] = useState<Product | null>(null);
  const [formData, setFormData] = useState(emptyForm);
  const { toast } = useToast();

  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('sort_order', { ascending: true });
      if (error) throw error;
      setProducts((data as Product[]) || []);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Failed to fetch products';
      toast({ title: 'Error', description: message, variant: 'destructive' });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => { fetchProducts(); }, []);

  const openCreate = () => {
    setEditing(null);
    setFormData(emptyForm);
    setIsDialogOpen(true);
  };

  const openEdit = (product: Product) => {
    setEditing(product);
    setFormData({
      name: product.name,
      slug: product.slug,
      tagline: product.tagline || '',
      description: product.description || '',
      logo_url: product.logo_url || '',
      hero_visual_url: product.hero_visual_url || '',
      accent_color: product.accent_color || '',
      external_url: product.external_url || '',
      cta_text: product.cta_text || '',
      cta_url: product.cta_url || '',
      is_featured: product.is_featured,
      sort_order: product.sort_order,
      status: product.status,
      seo_title: product.seo_title || '',
      seo_description: product.seo_description || '',
    });
    setIsDialogOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const slug = formData.slug || generateSlug(formData.name);
    const payload = { ...formData, slug };

    try {
      if (editing) {
        const { error } = await supabase.from('products').update(payload).eq('id', editing.id);
        if (error) throw error;
        toast({ title: 'Updated', description: 'Product updated successfully.' });
      } else {
        const { error } = await supabase.from('products').insert([payload]);
        if (error) throw error;
        toast({ title: 'Created', description: 'Product created successfully.' });
      }
      setIsDialogOpen(false);
      fetchProducts();
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Save failed';
      toast({ title: 'Error', description: message, variant: 'destructive' });
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this product?')) return;
    try {
      const { error } = await supabase.from('products').delete().eq('id', id);
      if (error) throw error;
      toast({ title: 'Deleted', description: 'Product deleted.' });
      fetchProducts();
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Delete failed';
      toast({ title: 'Error', description: message, variant: 'destructive' });
    }
  };

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.slug.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={openCreate}><Plus className="w-4 h-4 mr-2" />Add Product</Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editing ? 'Edit Product' : 'New Product'}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Name</Label>
                  <Input value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                </div>
                <div className="space-y-2">
                  <Label>Slug</Label>
                  <Input value={formData.slug} onChange={(e) => setFormData({ ...formData, slug: e.target.value })} placeholder="auto-generated" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Tagline</Label>
                <Input value={formData.tagline} onChange={(e) => setFormData({ ...formData, tagline: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label>Description</Label>
                <Textarea value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} rows={4} />
              </div>
              <ImageUpload label="Logo" folder="products/logos" value={formData.logo_url} onChange={(url) => setFormData({ ...formData, logo_url: url })} />
              <ImageUpload label="Hero Visual" folder="products/heroes" value={formData.hero_visual_url} onChange={(url) => setFormData({ ...formData, hero_visual_url: url })} />
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Accent Color</Label>
                  <Input value={formData.accent_color} onChange={(e) => setFormData({ ...formData, accent_color: e.target.value })} placeholder="#00FF88" />
                </div>
                <div className="space-y-2">
                  <Label>Sort Order</Label>
                  <Input type="number" value={formData.sort_order} onChange={(e) => setFormData({ ...formData, sort_order: parseInt(e.target.value) || 0 })} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
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
                <div className="flex items-center gap-2 pt-6">
                  <Switch checked={formData.is_featured} onCheckedChange={(v) => setFormData({ ...formData, is_featured: v })} />
                  <Label>Featured</Label>
                </div>
              </div>
              <Button type="submit" className="w-full">{editing ? 'Update Product' : 'Create Product'}</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {isLoading ? (
        <p className="text-muted-foreground">Loading products...</p>
      ) : (
        <div className="grid gap-4">
          {filtered.map((product) => (
            <Card key={product.id}>
              <CardHeader className="flex flex-row items-center justify-between py-4">
                <div>
                  <CardTitle className="text-lg flex items-center gap-2">
                    {product.name}
                    {product.is_featured && <Badge variant="secondary">Featured</Badge>}
                    <Badge variant={product.status === 'published' ? 'default' : 'outline'}>{product.status}</Badge>
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">{product.tagline}</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" onClick={() => openEdit(product)}><Edit className="w-4 h-4" /></Button>
                  <Button variant="ghost" size="icon" onClick={() => handleDelete(product.id)}><Trash2 className="w-4 h-4" /></Button>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};
