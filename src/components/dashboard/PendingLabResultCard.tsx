import { cn } from '@/lib/utils';
import { PendingLabResult } from '@/types/lab';

interface PendingLabResultCardProps {
  result: PendingLabResult;
}

export function PendingLabResultCard({ result }: PendingLabResultCardProps) {
  return (
    <div className="bg-card rounded-lg border border-border p-4 flex items-center justify-between animate-fade-in">
      <div>
        <h3 className="font-medium text-foreground">
          {result.patientName} - {result.testType}
        </h3>
        <p className="text-sm text-muted-foreground">
          Sample: {result.sampleId} | {result.path}
        </p>
      </div>
      <span 
        className={cn(
          'status-badge',
          result.status === 'in-progress' ? 'status-in-progress' : 'status-pending'
        )}
      >
        {result.status === 'in-progress' ? 'In-progress' : 'Pending'}
      </span>
    </div>
  );
}
