import { useState } from 'react';
import { Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface ProcessLabTestModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit?: (data: any) => void;
  patient?: {
    name: string;
    id: string;
    testType: string;
    sampleId: string;
    priority: string;
  };
}

export function ProcessLabTestModal({ open, onClose, onSubmit, patient }: ProcessLabTestModalProps) {
  const [formData, setFormData] = useState({
    verifyResults: false,
    flagCritical: false,
    technicalNotes: '',
    file: null as File | null,
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
          <DialogTitle>Process Lab Test</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Patient Information */}
          <div className="info-box-blue p-4 rounded-lg">
            <h4 className="text-sm font-medium text-secondary mb-2">Patient Information</h4>
            <div className="space-y-1 text-sm">
              <p><span className="text-muted-foreground">Name:</span> {patient?.name || 'John Doe'}</p>
              <p><span className="text-muted-foreground">ID:</span> {patient?.id || 'PT-2025-2026'}</p>
              <p><span className="text-muted-foreground">Test:</span> {patient?.testType || 'Completed Blood Count'}</p>
            </div>
          </div>

          {/* Clinical Information */}
          <div className="info-box-pink p-4 rounded-lg">
            <h4 className="text-sm font-medium text-pink-700 mb-2">Clinical Information</h4>
            <div className="space-y-1 text-sm">
              <p><span className="text-muted-foreground">Sample ID:</span> {patient?.sampleId || 'S001'}</p>
              <p><span className="text-muted-foreground">Priority:</span> {patient?.priority || 'Normal'}</p>
            </div>
          </div>

          {/* Upload Result */}
          <div className="space-y-2">
            <Label>Upload Result (PDF/Image) *</Label>
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
              <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
              <p className="text-sm text-primary font-medium">Choose file</p>
              <input 
                type="file" 
                className="hidden" 
                accept=".pdf,image/*"
                onChange={(e) => setFormData(prev => ({ ...prev, file: e.target.files?.[0] || null }))}
              />
            </div>
          </div>

          {/* Verify Results */}
          <div className="info-box-orange p-4 rounded-lg">
            <div className="flex items-start gap-3">
              <Checkbox 
                id="verify"
                checked={formData.verifyResults}
                onCheckedChange={(checked) => setFormData(prev => ({ ...prev, verifyResults: !!checked }))}
              />
              <div>
                <Label htmlFor="verify" className="text-warning font-medium cursor-pointer">
                  Verify Results
                </Label>
                <p className="text-xs text-muted-foreground mt-1">
                  I confirm that I have reviewed the results values, cross checked with quality control standards, 
                  and verified the accuracy of this test results.
                </p>
              </div>
            </div>
          </div>

          {/* Flag Critical */}
          <div className="info-box-red p-4 rounded-lg">
            <div className="flex items-start gap-3">
              <Checkbox 
                id="critical"
                checked={formData.flagCritical}
                onCheckedChange={(checked) => setFormData(prev => ({ ...prev, flagCritical: !!checked }))}
              />
              <div>
                <Label htmlFor="critical" className="text-destructive font-medium cursor-pointer">
                  Flag as critical/Abnormal Result
                </Label>
                <p className="text-xs text-muted-foreground mt-1">
                  Check this box if this result is outside normal range or requires immediate physician attention
                </p>
              </div>
            </div>
          </div>

          {/* Technical Notes */}
          <div className="space-y-2">
            <Label htmlFor="technicalNotes">Technical Notes</Label>
            <Textarea 
              id="technicalNotes"
              placeholder="Enter technical observations, or any relevant information..."
              rows={3}
              value={formData.technicalNotes}
              onChange={(e) => setFormData(prev => ({ ...prev, technicalNotes: e.target.value }))}
            />
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90">
              Mark as Completed
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
