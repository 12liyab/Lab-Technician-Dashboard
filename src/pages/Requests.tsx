import { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { RequestCard } from '@/components/dashboard/RequestCard';
import { CreateSampleModal } from '@/components/samples/CreateSampleModal';
import { mockRequests } from '@/data/mockData';
import { toast } from '@/hooks/use-toast';

export default function Requests() {
  const [showCreateSample, setShowCreateSample] = useState(false);

  const handleAccept = (id: string) => {
    toast({
      title: "Request Accepted",
      description: `Request ${id} has been accepted successfully.`,
    });
  };

  const handleDecline = (id: string) => {
    toast({
      title: "Request Declined",
      description: `Request ${id} has been declined.`,
      variant: "destructive",
    });
  };

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Requests</h1>
      </div>

      <div className="space-y-4 max-w-3xl">
        {mockRequests.map((request) => (
          <RequestCard 
            key={request.id} 
            request={request}
            onCreateSample={() => setShowCreateSample(true)}
            onAccept={() => handleAccept(request.requestId)}
            onDecline={() => handleDecline(request.requestId)}
          />
        ))}
      </div>

      <CreateSampleModal 
        open={showCreateSample} 
        onClose={() => setShowCreateSample(false)}
        onSubmit={(data) => {
          console.log('Sample created:', data);
          toast({
            title: "Sample Created",
            description: "A new sample has been created successfully.",
          });
        }}
      />
    </DashboardLayout>
  );
}
