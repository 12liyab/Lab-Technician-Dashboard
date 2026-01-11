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

interface SupplyRequestModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit?: (data: any) => void;
}

export function SupplyRequestModal({ open, onClose, onSubmit }: SupplyRequestModalProps) {
  const [formData, setFormData] = useState({
    itemName: '',
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
          <DialogTitle>Supply Request</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="itemName">Item Name *</Label>
            <Input 
              id="itemName"
              placeholder="Enter item name"
              value={formData.itemName}
              onChange={(e) => setFormData(prev => ({ ...prev, itemName: e.target.value }))}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="quantity">Quantity Requested *</Label>
            <Input 
              id="quantity"
              placeholder="Enter quantity"
              value={formData.quantity}
              onChange={(e) => setFormData(prev => ({ ...prev, quantity: e.target.value }))}
            />
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
