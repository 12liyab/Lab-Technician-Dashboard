import { NavLink, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  ArrowLeftRight, 
  TestTube, 
  UserCheck, 
  BarChart3, 
  Package,
  LogOut
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: ArrowLeftRight, label: 'Requests', path: '/requests' },
  { icon: TestTube, label: 'Samples', path: '/samples' },
  { icon: UserCheck, label: 'Pending', path: '/pending' },
  { icon: BarChart3, label: 'Reports', path: '/reports' },
  { icon: Package, label: 'Inventory', path: '/inventory' },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-56 bg-card border-r border-border flex flex-col h-screen">
      {/* Logo */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <TestTube className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <h2 className="font-bold text-primary text-sm">Premier Care</h2>
            <p className="text-xs text-primary">Lab Tech's Portal</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-3 space-y-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={cn(
                'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors',
                isActive 
                  ? 'bg-primary text-primary-foreground' 
                  : 'text-sidebar-foreground hover:bg-sidebar-accent'
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </NavLink>
          );
        })}
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-border">
        <div className="flex items-center gap-3">
          <Avatar className="h-9 w-9">
            <AvatarFallback className="bg-primary/10 text-primary text-sm">SJ</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate">Dr. Sarah Johnson</p>
            <p className="text-xs text-muted-foreground">Lab Technician</p>
          </div>
          <button className="p-1.5 hover:bg-muted rounded transition-colors text-destructive">
            <LogOut className="h-4 w-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}
