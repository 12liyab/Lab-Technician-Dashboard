export interface Request {
  id: string;
  patientName: string;
  patientId: string;
  requestId: string;
  requestedBy: string;
  timestamp: string;
  testType: string;
  notes: string;
  status: 'urgent' | 'pending' | 'confirmed';
  hasCreateSample?: boolean;
}

export interface Sample {
  id: string;
  barcode: string;
  patientName: string;
  patientId: string;
  collectedAt: string;
  status: 'collected' | 'processing' | 'received';
}

export interface PendingRequest {
  id: string;
  patientName: string;
  patientId: string;
  testType: string;
  sampleId: string;
  status: 'pending';
  priority: 'normal' | 'urgent';
}

export interface PendingLabResult {
  id: string;
  patientName: string;
  testType: string;
  sampleId: string;
  path: string;
  status: 'in-progress' | 'pending';
}

export interface InventoryItem {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  minLevel: number;
  status: 'critical' | 'adequate' | 'low';
}

export interface Metric {
  label: string;
  value: string | number;
  icon: 'request' | 'progress' | 'completed' | 'time';
}
