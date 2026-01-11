import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface RestockRequestModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit?: (data: any) => void;
  item?: {
    name: string;
    currentStock: number;
    minLevel: number;
    status: string;
  };
}

export function RestockRequestModal({ open, onClose, onSubmit, item }: RestockRequestModalProps) {
  const [formData, setFormData] = useState({
    quantity: '',
    urgencyLevel: 'normal',
    reason: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Restock Request</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Item Details */}
          <div className="info-box-blue p-4 rounded-lg">
            <h4 className="text-sm font-medium text-secondary mb-2">Item Details</h4>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Name:</span>
                <span className="text-secondary">{item?.name || 'Blood Collection Tubes'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Current Stock:</span>
                <span className="text-secondary">{item?.currentStock || 15} boxes</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Minimum Level:</span>
                <span className="text-secondary">{item?.minLevel || 50} boxes</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Status:</span>
                <span className="text-warning">{item?.status || 'Low'}</span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="quantity">Quantity Requested *</Label>
            <div className="relative">
              <Input 
                id="quantity"
                placeholder="Enter quantity"
                value={formData.quantity}
                onChange={(e) => setFormData(prev => ({ ...prev, quantity: e.target.value }))}
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                boxes
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="urgency">Urgency Level *</Label>
            <Select 
              value={formData.urgencyLevel}
              onValueChange={(value) => setFormData(prev => ({ ...prev, urgencyLevel: value }))}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="normal">Normal- standard delivery ( 5-7 days )</SelectItem>
                <SelectItem value="urgent">Urgent - expedited delivery ( 1-2 days )</SelectItem>
                <SelectItem value="critical">Critical - same day delivery</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="reason">Reason for Request *</Label>
            <Textarea 
              id="reason"
              placeholder="Explain why this is needed (e.g, low stock, increased demand etc."
              rows={3}
              value={formData.reason}
              onChange={(e) => setFormData(prev => ({ ...prev, reason: e.target.value }))}
            />
          </div>

          <div className="flex gap-3 pt-2">
            <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90">
              Submit Request
            </Button>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
          </div>

          <p className="text-xs text-muted-foreground text-center">
            Request will be sent to Admin for approval
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
