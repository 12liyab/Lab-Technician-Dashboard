import { InventoryItem } from '@/types/lab';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { cn } from '@/lib/utils';

interface InventoryTableProps {
  items: InventoryItem[];
  onRequestRestock?: (itemId: string) => void;
}

const statusClasses = {
  critical: 'status-critical',
  adequate: 'status-adequate',
  low: 'status-low',
};

export function InventoryTable({ items, onRequestRestock }: InventoryTableProps) {
  return (
    <div className="bg-card rounded-lg border border-border overflow-hidden">
      <div className="p-4 border-b border-border">
        <h3 className="font-semibold text-foreground">Reagent & Supply Stock Levels</h3>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ITEM</TableHead>
            <TableHead>QUANTITY</TableHead>
            <TableHead>UNIT</TableHead>
            <TableHead>MIN LEVEL</TableHead>
            <TableHead>STATUS</TableHead>
            <TableHead>ACTION</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.name}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>{item.unit}</TableCell>
              <TableCell>{item.minLevel}</TableCell>
              <TableCell>
                <span className={cn('status-badge', statusClasses[item.status])}>
                  {item.status}
                </span>
              </TableCell>
              <TableCell>
                {(item.status === 'critical' || item.status === 'low') && (
                  <button 
                    className="text-primary text-sm font-medium hover:underline"
                    onClick={() => onRequestRestock?.(item.id)}
                  >
                    Request Restock
                  </button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
