import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { BlogsManager } from '@/components/admin/BlogsManager';
import { LeadsManager } from '@/components/admin/LeadsManager';
import { Analytics } from '@/components/admin/Analytics';
import { ProductsManager } from '@/components/admin/ProductsManager';
import { CaseStudiesManager } from '@/components/admin/CaseStudiesManager';
import { Loader2, LogOut, FileText, Users, BarChart, Package, Briefcase } from 'lucide-react';

const Admin = () => {
  const { user, isAdmin, isLoading, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && (!user || !isAdmin)) {
      navigate('/auth');
    }
  }, [user, isAdmin, isLoading, navigate]);

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-inowix-bg flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user || !isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-inowix-bg">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Admin Panel</h1>
            <p className="text-muted-foreground">Welcome back, {user.email}</p>
          </div>
          <Button onClick={handleSignOut} variant="outline">
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </Button>
        </div>

        <div className="bg-inowix-surface/50 backdrop-blur-md rounded-2xl border border-border/40 p-6">
          <Tabs defaultValue="products" className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-6">
              <TabsTrigger value="products"><Package className="w-4 h-4 mr-2 hidden sm:inline" />Products</TabsTrigger>
              <TabsTrigger value="case-studies"><Briefcase className="w-4 h-4 mr-2 hidden sm:inline" />Case Studies</TabsTrigger>
              <TabsTrigger value="blogs"><FileText className="w-4 h-4 mr-2 hidden sm:inline" />Blogs</TabsTrigger>
              <TabsTrigger value="leads"><Users className="w-4 h-4 mr-2 hidden sm:inline" />Leads</TabsTrigger>
              <TabsTrigger value="analytics"><BarChart className="w-4 h-4 mr-2 hidden sm:inline" />Analytics</TabsTrigger>
            </TabsList>

            <TabsContent value="products"><ProductsManager /></TabsContent>
            <TabsContent value="case-studies"><CaseStudiesManager /></TabsContent>
            <TabsContent value="blogs"><BlogsManager /></TabsContent>
            <TabsContent value="leads"><LeadsManager /></TabsContent>
            <TabsContent value="analytics"><Analytics /></TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Admin;
