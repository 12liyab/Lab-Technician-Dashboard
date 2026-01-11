import { Search, Bell, Settings } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

export function Header() {
  return (
    <header className="h-16 border-b border-border bg-card px-6 flex items-center justify-between">
      <div>
        <h1 className="text-lg font-semibold text-foreground">Lab Technician Dashboard</h1>
        <p className="text-sm text-muted-foreground">Advance Laboratory Management System</p>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search patients, ID, sample ID..." 
            className="w-72 pl-9 bg-background"
          />
        </div>
        
        <button className="p-2 hover:bg-muted rounded-lg transition-colors">
          <Bell className="h-5 w-5 text-muted-foreground" />
        </button>
        
        <button className="p-2 hover:bg-muted rounded-lg transition-colors">
          <Settings className="h-5 w-5 text-muted-foreground" />
        </button>
      </div>
    </header>
  );
}
