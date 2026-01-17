import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { BlogsManager } from '@/components/admin/BlogsManager';
import { LeadsManager } from '@/components/admin/LeadsManager';
import { Analytics } from '@/components/admin/Analytics';
import { Loader2, LogOut, FileText, Users, BarChart } from 'lucide-react';

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
      <div className="min-h-screen bg-gradient-hero flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-white" />
      </div>
    );
  }

  if (!user || !isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Admin Panel</h1>
            <p className="text-white/80">Welcome back, {user.email}</p>
          </div>
          <Button 
            onClick={handleSignOut}
            variant="outline" 
            className="border-border text-foreground hover:bg-card"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </Button>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6">
          <Tabs defaultValue="blogs" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-white mb-6">
              <TabsTrigger 
                value="blogs" 
                className="text-[#1f1f1f] data-[state=active]:bg-white/20 data-[state=active]:text-white data-[state=active]:bg-[#1f1f1f]"
              >
                <FileText className="w-4 h-4 mr-2" />
                Blogs
              </TabsTrigger>
              <TabsTrigger 
                value="leads" 
                className="text-[#1f1f1f] data-[state=active]:bg-white/20 data-[state=active]:text-white data-[state=active]:bg-[#1f1f1f]"
              >
                <Users className="w-4 h-4 mr-2" />
                Leads
              </TabsTrigger>
              <TabsTrigger 
                value="analytics" 
                className="text-[#1f1f1f] data-[state=active]:bg-white/20 data-[state=active]:text-white data-[state=active]:bg-[#1f1f1f]"
              >
                <BarChart className="w-4 h-4 mr-2" />
                Analytics
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="blogs" className="space-y-4">
              <BlogsManager />
            </TabsContent>
            
            <TabsContent value="leads" className="space-y-4">
              <LeadsManager />
            </TabsContent>
            
            <TabsContent value="analytics" className="space-y-4">
              <Analytics />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Admin;