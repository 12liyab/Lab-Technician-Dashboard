import { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { MetricCard } from '@/components/dashboard/MetricCard';
import { RequestCard } from '@/components/dashboard/RequestCard';
import { PendingLabResultCard } from '@/components/dashboard/PendingLabResultCard';
import { CreateSampleModal } from '@/components/samples/CreateSampleModal';
import { metrics, mockRequests, mockPendingLabResults } from '@/data/mockData';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();
  const [showCreateSample, setShowCreateSample] = useState(false);

  return (
    <DashboardLayout>
      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Requests Section */}
        <div>
          <div className="section-header">
            <h2 className="section-title">Requests</h2>
            <button 
              className="view-all-link"
              onClick={() => navigate('/requests')}
            >
              View All
            </button>
          </div>
          <div className="space-y-4">
            {mockRequests.slice(0, 2).map((request) => (
              <RequestCard 
                key={request.id} 
                request={request}
                onCreateSample={() => setShowCreateSample(true)}
                onAccept={() => console.log('Accepted', request.id)}
                onDecline={() => console.log('Declined', request.id)}
              />
            ))}
          </div>
        </div>

        {/* Pending Lab Results Section */}
        <div>
          <div className="section-header">
            <h2 className="section-title">Pending Lab Results</h2>
            <button 
              className="view-all-link"
              onClick={() => navigate('/pending')}
            >
              View All
            </button>
          </div>
          <div className="space-y-3">
            {mockPendingLabResults.map((result) => (
              <PendingLabResultCard key={result.id} result={result} />
            ))}
          </div>
        </div>
      </div>

      <CreateSampleModal 
        open={showCreateSample} 
        onClose={() => setShowCreateSample(false)}
        onSubmit={(data) => console.log('Sample created:', data)}
      />
    </DashboardLayout>
  );
}
