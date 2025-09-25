import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Search, Calendar, Mail, Phone, Building, MessageSquare, Eye, Edit, Archive } from 'lucide-react';
import { format } from 'date-fns';

interface Lead {
  id: string;
  name: string;
  email: string;
  company: string | null;
  phone: string | null;
  subject: string | null;
  message: string;
  source: string;
  status: string;
  created_at: string;
  updated_at: string;
  notes: string | null;
}

export const LeadsManager = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [isDetailDialogOpen, setIsDetailDialogOpen] = useState(false);
  const [notes, setNotes] = useState('');
  const { toast } = useToast();

  const fetchLeads = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('contact_leads')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setLeads(data || []);
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to fetch leads: " + error.message,
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const updateLeadStatus = async (leadId: string, newStatus: string) => {
    try {
      const { error } = await supabase
        .from('contact_leads')
        .update({ status: newStatus })
        .eq('id', leadId);

      if (error) throw error;
      
      toast({
        title: "Success",
        description: "Lead status updated successfully!"
      });
      fetchLeads();
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to update lead: " + error.message,
        variant: "destructive"
      });
    }
  };

  const updateLeadNotes = async (leadId: string, newNotes: string) => {
    try {
      const { error } = await supabase
        .from('contact_leads')
        .update({ notes: newNotes })
        .eq('id', leadId);

      if (error) throw error;
      
      toast({
        title: "Success",
        description: "Notes updated successfully!"
      });
      fetchLeads();
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to update notes: " + error.message,
        variant: "destructive"
      });
    }
  };

  const handleViewDetails = (lead: Lead) => {
    setSelectedLead(lead);
    setNotes(lead.notes || '');
    setIsDetailDialogOpen(true);
  };

  const handleSaveNotes = async () => {
    if (selectedLead) {
      await updateLeadNotes(selectedLead.id, notes);
      setIsDetailDialogOpen(false);
    }
  };

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case 'new': return 'default';
      case 'contacted': return 'secondary';
      case 'qualified': return 'default';
      case 'closed': return 'secondary';
      default: return 'outline';
    }
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-500';
      case 'contacted': return 'bg-yellow-500';
      case 'qualified': return 'bg-green-500';
      case 'closed': return 'bg-gray-500';
      default: return '';
    }
  };

  const filteredLeads = leads.filter(lead => {
    const matchesSearch = 
      lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (lead.company && lead.company.toLowerCase().includes(searchQuery.toLowerCase())) ||
      lead.message.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || lead.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const statusOptions = [
    { value: 'new', label: 'New' },
    { value: 'contacted', label: 'Contacted' },
    { value: 'qualified', label: 'Qualified' },
    { value: 'closed', label: 'Closed' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row gap-4 justify-between">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
            <Input
              placeholder="Search leads..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/50"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[180px] bg-white/10 border-white/20 text-white">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              {statusOptions.map(option => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="text-white/80">
          Total Leads: {filteredLeads.length}
        </div>
      </div>

      {isLoading ? (
        <div className="text-center py-8">
          <div className="text-white/80">Loading leads...</div>
        </div>
      ) : (
        <div className="grid gap-4">
          {filteredLeads.length === 0 ? (
            <div className="text-center py-8">
              <div className="text-white/80">No leads found</div>
            </div>
          ) : (
            filteredLeads.map((lead) => (
              <Card key={lead.id} className="bg-white/5 border-white/20">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-white text-lg flex items-center gap-2">
                        {lead.name}
                        <Badge 
                          variant={getStatusBadgeVariant(lead.status)}
                          className={getStatusBadgeColor(lead.status)}
                        >
                          {lead.status}
                        </Badge>
                      </CardTitle>
                      <CardDescription className="text-white/70 mt-1">
                        {lead.subject || 'No subject provided'}
                      </CardDescription>
                    </div>
                    <div className="text-right text-sm text-white/60">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {format(new Date(lead.created_at), 'MMM d, yyyy')}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-white/70">
                      <div className="flex items-center gap-1">
                        <Mail className="w-4 h-4" />
                        {lead.email}
                      </div>
                      {lead.phone && (
                        <div className="flex items-center gap-1">
                          <Phone className="w-4 h-4" />
                          {lead.phone}
                        </div>
                      )}
                      {lead.company && (
                        <div className="flex items-center gap-1">
                          <Building className="w-4 h-4" />
                          {lead.company}
                        </div>
                      )}
                    </div>
                    
                    <div className="text-white/80">
                      <div className="flex items-start gap-1">
                        <MessageSquare className="w-4 h-4 mt-1 flex-shrink-0" />
                        <p className="line-clamp-2">{lead.message}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-2">
                      <div className="text-xs text-white/50">
                        Source: {lead.source}
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleViewDetails(lead)}
                          className="border-white/20 text-white hover:bg-white/10"
                        >
                          <Eye className="w-4 h-4 mr-1" />
                          View
                        </Button>
                        <Select 
                          value={lead.status} 
                          onValueChange={(newStatus) => updateLeadStatus(lead.id, newStatus)}
                        >
                          <SelectTrigger className="w-32 h-8 bg-white/10 border-white/20 text-white text-xs">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {statusOptions.map(option => (
                              <SelectItem key={option.value} value={option.value}>
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      )}

      <Dialog open={isDetailDialogOpen} onOpenChange={setIsDetailDialogOpen}>
        <DialogContent className="max-w-2xl bg-white">
          {selectedLead && (
            <>
              <DialogHeader>
                <DialogTitle>Lead Details - {selectedLead.name}</DialogTitle>
                <DialogDescription>
                  Submitted on {format(new Date(selectedLead.created_at), 'MMMM d, yyyy \'at\' h:mm a')}
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm font-medium">Email</Label>
                    <p className="text-sm text-gray-600">{selectedLead.email}</p>
                  </div>
                  {selectedLead.phone && (
                    <div>
                      <Label className="text-sm font-medium">Phone</Label>
                      <p className="text-sm text-gray-600">{selectedLead.phone}</p>
                    </div>
                  )}
                  {selectedLead.company && (
                    <div>
                      <Label className="text-sm font-medium">Company</Label>
                      <p className="text-sm text-gray-600">{selectedLead.company}</p>
                    </div>
                  )}
                  <div>
                    <Label className="text-sm font-medium">Source</Label>
                    <p className="text-sm text-gray-600">{selectedLead.source}</p>
                  </div>
                </div>
                
                {selectedLead.subject && (
                  <div>
                    <Label className="text-sm font-medium">Subject</Label>
                    <p className="text-sm text-gray-600">{selectedLead.subject}</p>
                  </div>
                )}
                
                <div>
                  <Label className="text-sm font-medium">Message</Label>
                  <p className="text-sm text-gray-600 whitespace-pre-wrap">{selectedLead.message}</p>
                </div>
                
                <div>
                  <Label htmlFor="notes" className="text-sm font-medium">Notes</Label>
                  <Textarea
                    id="notes"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Add internal notes about this lead..."
                    rows={4}
                  />
                </div>
                
                <div className="flex gap-2 pt-4">
                  <Button onClick={handleSaveNotes} className="bg-accent hover:bg-accent/90">
                    Save Notes
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => setIsDetailDialogOpen(false)}
                  >
                    Close
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};