import { Sample } from '@/types/lab';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';

interface SampleTableProps {
  samples: Sample[];
  onStatusChange?: (sampleId: string, status: Sample['status']) => void;
}

const statusClasses = {
  collected: 'status-collected',
  processing: 'status-processing',
  received: 'status-received',
};

export function SampleTable({ samples, onStatusChange }: SampleTableProps) {
  return (
    <div className="bg-card rounded-lg border border-border overflow-hidden">
      <div className="p-4 border-b border-border">
        <h3 className="font-semibold text-foreground">Sample Tracking</h3>
      </div>
      <div className="overflow-x-auto">
        <Table>
        <TableHeader>
          <TableRow>
            <TableHead>SAMPLE ID</TableHead>
            <TableHead>BARCODE</TableHead>
            <TableHead>PATIENT</TableHead>
            <TableHead>COLLECTED</TableHead>
            <TableHead>STATUS</TableHead>
            <TableHead>ACTIONS</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {samples.map((sample) => (
            <TableRow key={sample.id}>
              <TableCell className="font-medium">{sample.id}</TableCell>
              <TableCell>{sample.barcode}</TableCell>
              <TableCell>
                <div>
                  <p className="font-medium">{sample.patientName}</p>
                  <p className="text-xs text-muted-foreground">{sample.patientId}</p>
                </div>
              </TableCell>
              <TableCell>{sample.collectedAt}</TableCell>
              <TableCell>
                <span className={cn('status-badge', statusClasses[sample.status])}>
                  {sample.status.charAt(0).toUpperCase() + sample.status.slice(1)}
                </span>
              </TableCell>
              <TableCell>
                <Select 
                  defaultValue={sample.status}
                  onValueChange={(value) => onStatusChange?.(sample.id, value as Sample['status'])}
                >
                  <SelectTrigger className="w-32 h-8">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="collected">Collected</SelectItem>
                    <SelectItem value="processing">Processing</SelectItem>
                    <SelectItem value="received">Received</SelectItem>
                  </SelectContent>
                </Select>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        </Table>
      </div>
    </div>
  );
}
