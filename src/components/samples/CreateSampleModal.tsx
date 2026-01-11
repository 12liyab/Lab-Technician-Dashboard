import { useState } from 'react';
import { X, Calendar, Info } from 'lucide-react';
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

interface CreateSampleModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit?: (data: any) => void;
}

export function CreateSampleModal({ open, onClose, onSubmit }: CreateSampleModalProps) {
  const [formData, setFormData] = useState({
    patientName: '',
    patientId: '',
    testType: '',
    priority: '',
    collectionDate: '',
    collectionTime: '',
    clinicalNotes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Create New Sample</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Patient Information */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-foreground">Patient Information</h4>
            
            <div className="space-y-2">
              <Label htmlFor="patientName">Patient Name *</Label>
              <Input 
                id="patientName"
                placeholder="Enter quantity"
                value={formData.patientName}
                onChange={(e) => setFormData(prev => ({ ...prev, patientName: e.target.value }))}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="patientId">Patient ID *</Label>
              <Input 
                id="patientId"
                placeholder="Enter quantity"
                value={formData.patientId}
                onChange={(e) => setFormData(prev => ({ ...prev, patientId: e.target.value }))}
              />
            </div>
          </div>

          {/* Samples Details */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-foreground">Samples Details</h4>
            
            <div className="space-y-2">
              <Label htmlFor="testType">Test Type *</Label>
              <Select 
                value={formData.testType}
                onValueChange={(value) => setFormData(prev => ({ ...prev, testType: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select test" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cbc">Complete Blood Count</SelectItem>
                  <SelectItem value="troponin">Troponin</SelectItem>
                  <SelectItem value="lipid">Lipid Panel</SelectItem>
                  <SelectItem value="glucose">Glucose Test</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="priority">Priority *</Label>
              <Input 
                id="priority"
                placeholder="Enter quantity"
                value={formData.priority}
                onChange={(e) => setFormData(prev => ({ ...prev, priority: e.target.value }))}
              />
            </div>
          </div>

          {/* Collection Information */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-foreground">Collection Information</h4>
            
            <div className="space-y-2">
              <Label htmlFor="collectionDate">Collection Date *</Label>
              <div className="relative">
                <Input 
                  id="collectionDate"
                  type="date"
                  placeholder="mm/dd/yyyy"
                  value={formData.collectionDate}
                  onChange={(e) => setFormData(prev => ({ ...prev, collectionDate: e.target.value }))}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="collectionTime">Collection Time *</Label>
              <Input 
                id="collectionTime"
                type="time"
                placeholder="--:-- --"
                value={formData.collectionTime}
                onChange={(e) => setFormData(prev => ({ ...prev, collectionTime: e.target.value }))}
              />
            </div>
          </div>

          {/* Additional Information */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-foreground">Additional Information</h4>
            
            <div className="space-y-2">
              <Label htmlFor="clinicalNotes">Clinical Notes</Label>
              <Textarea 
                id="clinicalNotes"
                placeholder="Enter any relevant clinical information, symptoms, or special instructions..."
                rows={3}
                value={formData.clinicalNotes}
                onChange={(e) => setFormData(prev => ({ ...prev, clinicalNotes: e.target.value }))}
              />
            </div>
          </div>

          {/* Info Box */}
          <div className="info-box">
            <div className="flex gap-2">
              <Info className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-primary text-sm">Sample Registration</p>
                <p className="text-xs text-muted-foreground mt-1">
                  A unique sample ID and barcode will be automatically generated upon creation. 
                  Ensure all required fields are filled accurately for proper tracking.
                </p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90">
              Create Sample
            </Button>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
