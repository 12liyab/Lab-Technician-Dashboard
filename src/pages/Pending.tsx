import { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { PendingRequestsTable } from '@/components/pending/PendingRequestsTable';
import { ProcessLabTestModal } from '@/components/pending/ProcessLabTestModal';
import { mockPendingRequests } from '@/data/mockData';
import { toast } from '@/hooks/use-toast';

export default function Pending() {
  const [showProcessModal, setShowProcessModal] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState<string | null>(null);

  const handleProcess = (requestId: string) => {
    setSelectedRequest(requestId);
    setShowProcessModal(true);
  };

  const handleSubmit = (data: any) => {
    console.log('Processing:', data);
    toast({
      title: "Test Completed",
      description: "The lab test has been marked as completed.",
    });
  };

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Pending Lab Requests</h1>
      </div>

      <PendingRequestsTable 
        requests={mockPendingRequests}
        onProcess={handleProcess}
      />

      <ProcessLabTestModal 
        open={showProcessModal} 
        onClose={() => setShowProcessModal(false)}
        onSubmit={handleSubmit}
        patient={{
          name: 'John Doe',
          id: 'PT-2025-2026',
          testType: 'Completed Blood Count',
          sampleId: 'S001',
          priority: 'Normal',
        }}
      />
    </DashboardLayout>
  );
}
