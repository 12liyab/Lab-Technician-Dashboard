import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Request } from '@/types/lab';

interface RequestCardProps {
  request: Request;
  onAccept?: () => void;
  onDecline?: () => void;
  onCreateSample?: () => void;
}

const statusClasses = {
  urgent: 'status-urgent',
  pending: 'status-pending',
  confirmed: 'status-confirmed',
};

export function RequestCard({ request, onAccept, onDecline, onCreateSample }: RequestCardProps) {
  return (
    <div className="request-card animate-fade-in">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-foreground">{request.patientName}</h3>
          {request.status === 'urgent' && (
            <span className="status-badge status-urgent">Urgent</span>
          )}
          <span className={cn('status-badge', statusClasses[request.status])}>
            {request.status === 'pending' ? 'Pending' : request.status === 'confirmed' ? 'Confirmed' : ''}
          </span>
        </div>
      </div>

      <p className="text-sm text-muted-foreground mb-2">
        Patient ID: {request.patientId} | Request ID: {request.requestId}
      </p>

      <p className="text-sm text-muted-foreground mb-3">
        Requested by: {request.requestedBy} &nbsp;&nbsp; {request.timestamp}
      </p>

      <span className="test-badge">{request.testType}</span>

      <div className="mt-4">
        <p className="text-sm font-medium text-foreground mb-1">Additional Notes</p>
        <p className="text-sm text-muted-foreground">{request.notes}</p>
      </div>

      <div className="flex justify-end gap-2 mt-4">
        {request.hasCreateSample ? (
          <Button 
            size="sm" 
            className="bg-secondary hover:bg-secondary/90"
            onClick={onCreateSample}
          >
            Create Sample
          </Button>
        ) : (
          <>
            <Button 
              size="sm" 
              className="bg-primary hover:bg-primary/90"
              onClick={onAccept}
            >
              Accept
            </Button>
            <Button 
              size="sm" 
              variant="destructive"
              onClick={onDecline}
            >
              Decline
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
