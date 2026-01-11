import { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { SampleTable } from '@/components/samples/SampleTable';
import { CreateSampleModal } from '@/components/samples/CreateSampleModal';
import { Button } from '@/components/ui/button';
import { mockSamples } from '@/data/mockData';
import { Sample } from '@/types/lab';
import { toast } from '@/hooks/use-toast';

export default function Samples() {
  const [showCreateSample, setShowCreateSample] = useState(false);
  const [samples, setSamples] = useState(mockSamples);

  const handleStatusChange = (sampleId: string, status: Sample['status']) => {
    setSamples(prev => 
      prev.map(sample => 
        sample.id === sampleId ? { ...sample, status } : sample
      )
    );
    toast({
      title: "Status Updated",
      description: `Sample ${sampleId} status changed to ${status}.`,
    });
  };

  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-foreground">Sample Management</h1>
        <Button 
          className="bg-secondary hover:bg-secondary/90"
          onClick={() => setShowCreateSample(true)}
        >
          Create New Sample
        </Button>
      </div>

      <SampleTable 
        samples={samples} 
        onStatusChange={handleStatusChange}
      />

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
