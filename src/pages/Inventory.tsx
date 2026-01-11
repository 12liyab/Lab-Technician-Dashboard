import { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { InventoryTable } from '@/components/inventory/InventoryTable';
import { SupplyRequestModal } from '@/components/inventory/SupplyRequestModal';
import { RestockRequestModal } from '@/components/inventory/RestockRequestModal';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';
import { mockInventory } from '@/data/mockData';
import { toast } from '@/hooks/use-toast';

export default function Inventory() {
  const [showSupplyRequest, setShowSupplyRequest] = useState(false);
  const [showRestockRequest, setShowRestockRequest] = useState(false);
  const [selectedItem, setSelectedItem] = useState<typeof mockInventory[0] | null>(null);

  const lowStockCount = mockInventory.filter(
    item => item.status === 'critical' || item.status === 'low'
  ).length;

  const handleRequestRestock = (itemId: string) => {
    const item = mockInventory.find(i => i.id === itemId);
    if (item) {
      setSelectedItem(item);
      setShowRestockRequest(true);
    }
  };

  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-foreground">Reports & Analytics</h1>
        <Button 
          className="bg-secondary hover:bg-secondary/90"
          onClick={() => setShowSupplyRequest(true)}
        >
          Request Supplies
        </Button>
      </div>

      <InventoryTable 
        items={mockInventory}
        onRequestRestock={handleRequestRestock}
      />

      {/* Low Stock Alert */}
      {lowStockCount > 0 && (
        <div className="alert-box mt-4 flex items-start gap-2">
          <AlertTriangle className="h-5 w-5 flex-shrink-0" />
          <div>
            <p className="font-medium">Low Stock Alert</p>
            <p className="text-sm">
              {lowStockCount} items below minimum level. Immediate restocking required for critical items.
            </p>
          </div>
        </div>
      )}

      <SupplyRequestModal 
        open={showSupplyRequest} 
        onClose={() => setShowSupplyRequest(false)}
        onSubmit={(data) => {
          console.log('Supply request:', data);
          toast({
            title: "Request Submitted",
            description: "Your supply request has been sent to Admin for approval.",
          });
        }}
      />

      <RestockRequestModal 
        open={showRestockRequest} 
        onClose={() => setShowRestockRequest(false)}
        item={selectedItem ? {
          name: selectedItem.name,
          currentStock: selectedItem.quantity,
          minLevel: selectedItem.minLevel,
          status: selectedItem.status,
        } : undefined}
        onSubmit={(data) => {
          console.log('Restock request:', data);
          toast({
            title: "Restock Request Submitted",
            description: "Your restock request has been sent to Admin for approval.",
          });
        }}
      />
    </DashboardLayout>
  );
}
