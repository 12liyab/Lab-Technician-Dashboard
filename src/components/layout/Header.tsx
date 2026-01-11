import { Search, Bell, Settings, Menu } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { useIsMobile } from '@/hooks/use-mobile';

interface HeaderProps {
  onMenuClick?: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  const isMobile = useIsMobile();

  return (
    <header className="h-16 border-b border-border bg-card px-4 md:px-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        {isMobile && (
          <button
            onClick={onMenuClick}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
          >
            <Menu className="h-5 w-5 text-muted-foreground" />
          </button>
        )}
        <div>
          <h1 className="text-lg font-semibold text-foreground">Lab Technician Dashboard</h1>
          <p className="text-sm text-muted-foreground hidden sm:block">Advance Laboratory Management System</p>
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search patients, ID, sample ID..."
            className="w-64 lg:w-72 pl-9 bg-background"
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
