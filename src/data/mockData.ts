import { Request, Sample, PendingRequest, PendingLabResult, InventoryItem } from '@/types/lab';

export const mockRequests: Request[] = [
  {
    id: '1',
    patientName: 'John Doe',
    patientId: 'PT-2024-256',
    requestId: 'REQ001',
    requestedBy: 'Dr. Emily Carter',
    timestamp: '2025-13-15 at 08:30 AM',
    testType: 'Troponin',
    notes: 'Patient experiencing acute chest pain for 2 hours',
    status: 'urgent',
    hasCreateSample: true,
  },
  {
    id: '2',
    patientName: 'John Doe',
    patientId: 'PT-2024-256',
    requestId: 'REQ001',
    requestedBy: 'Dr. Emily Carter',
    timestamp: '2025-13-15 at 08:30 AM',
    testType: 'Troponin',
    notes: 'Patient experiencing acute chest pain for 2 hours',
    status: 'pending',
  },
  {
    id: '3',
    patientName: 'John Doe',
    patientId: 'PT-2024-256',
    requestId: 'REQ001',
    requestedBy: 'John Doe',
    timestamp: '2025-13-15 at 08:30 AM',
    testType: 'Troponin',
    notes: 'Patient experiencing acute chest pain for 2 hours',
    status: 'confirmed',
  },
];

export const mockSamples: Sample[] = [
  {
    id: 'S001',
    barcode: 'BC001',
    patientName: 'John Doe',
    patientId: 'PT-2025-20256',
    collectedAt: '2024-25-14 08:30',
    status: 'collected',
  },
  {
    id: 'S002',
    barcode: 'BC002',
    patientName: 'John Doe',
    patientId: 'PT-2025-20256',
    collectedAt: '2024-25-14 08:30',
    status: 'processing',
  },
  {
    id: 'S003',
    barcode: 'BC003',
    patientName: 'John Doe',
    patientId: 'PT-2025-20256',
    collectedAt: '2024-25-14 08:30',
    status: 'received',
  },
];

export const mockPendingRequests: PendingRequest[] = [
  {
    id: '1',
    patientName: 'John Doe',
    patientId: 'PT-2025-20256',
    testType: 'Completed Blood Count',
    sampleId: 'S001',
    status: 'pending',
    priority: 'normal',
  },
  {
    id: '2',
    patientName: 'John Doe',
    patientId: 'PT-2025-20256',
    testType: 'Completed Blood Count',
    sampleId: 'S001',
    status: 'pending',
    priority: 'urgent',
  },
  {
    id: '3',
    patientName: 'John Doe',
    patientId: 'PT-2025-20256',
    testType: 'Completed Blood Count',
    sampleId: 'S001',
    status: 'pending',
    priority: 'normal',
  },
];

export const mockPendingLabResults: PendingLabResult[] = [
  {
    id: '1',
    patientName: 'John Doe',
    testType: 'Troponin',
    sampleId: 'S003',
    path: 'chest pain, suspected MI',
    status: 'in-progress',
  },
  {
    id: '2',
    patientName: 'John Doe',
    testType: 'Troponin',
    sampleId: 'S003',
    path: 'chest pain, suspected MI',
    status: 'pending',
  },
];

export const mockInventory: InventoryItem[] = [
  {
    id: '1',
    name: 'CBC Reagent Kit',
    quantity: 10,
    unit: 'Kits',
    minLevel: 20,
    status: 'critical',
  },
  {
    id: '2',
    name: 'CBC Reagent Kit',
    quantity: 45,
    unit: 'Kits',
    minLevel: 20,
    status: 'adequate',
  },
  {
    id: '3',
    name: 'CBC Reagent Kit',
    quantity: 45,
    unit: 'Kits',
    minLevel: 20,
    status: 'adequate',
  },
  {
    id: '4',
    name: 'CBC Reagent Kit',
    quantity: 15,
    unit: 'Kits',
    minLevel: 20,
    status: 'low',
  },
];

export const metrics = [
  { label: 'Today Request', value: 10, icon: 'request' as const },
  { label: 'In Progress', value: 10, icon: 'progress' as const },
  { label: 'Completed Today', value: 2, icon: 'completed' as const },
  { label: 'Avg TAT (hrs)', value: 2.5, icon: 'time' as const },
];
