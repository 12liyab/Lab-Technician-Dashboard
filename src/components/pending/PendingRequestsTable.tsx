import { PendingRequest } from '@/types/lab';
import { Button } from '@/components/ui/button';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { cn } from '@/lib/utils';

interface PendingRequestsTableProps {
  requests: PendingRequest[];
  onProcess?: (requestId: string) => void;
}

export function PendingRequestsTable({ requests, onProcess }: PendingRequestsTableProps) {
  return (
    <div className="bg-card rounded-lg border border-border overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>PATIENT</TableHead>
            <TableHead>TEST TYPE</TableHead>
            <TableHead>SAMPLE ID</TableHead>
            <TableHead>STATUS</TableHead>
            <TableHead>PRIORITY</TableHead>
            <TableHead>ACTION</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {requests.map((request) => (
            <TableRow key={request.id}>
              <TableCell>
                <div>
                  <p className="font-medium">{request.patientName}</p>
                  <p className="text-xs text-muted-foreground">{request.patientId}</p>
                </div>
              </TableCell>
              <TableCell>{request.testType}</TableCell>
              <TableCell>{request.sampleId}</TableCell>
              <TableCell>
                <span className="status-badge status-pending">Pending</span>
              </TableCell>
              <TableCell>
                <span 
                  className={cn(
                    'status-badge',
                    request.priority === 'urgent' ? 'status-urgent' : 'status-normal'
                  )}
                >
                  {request.priority.charAt(0).toUpperCase() + request.priority.slice(1)}
                </span>
              </TableCell>
              <TableCell>
                <Button 
                  size="sm" 
                  className="bg-secondary hover:bg-secondary/90"
                  onClick={() => onProcess?.(request.id)}
                >
                  Process
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
