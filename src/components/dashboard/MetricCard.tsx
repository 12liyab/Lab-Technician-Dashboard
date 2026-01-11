import { GitPullRequest, Hourglass, CheckCircle, Timer } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MetricCardProps {
  label: string;
  value: string | number;
  icon: 'request' | 'progress' | 'completed' | 'time';
}

const iconConfig = {
  request: { icon: GitPullRequest, className: 'metric-icon-purple' },
  progress: { icon: Hourglass, className: 'metric-icon-blue' },
  completed: { icon: CheckCircle, className: 'metric-icon-green' },
  time: { icon: Timer, className: 'metric-icon-orange' },
};

export function MetricCard({ label, value, icon }: MetricCardProps) {
  const config = iconConfig[icon];
  const Icon = config.icon;

  return (
    <div className="metric-card animate-fade-in">
      <div className="flex items-start gap-3">
        <div className={cn('metric-icon', config.className)}>
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <p className="text-2xl font-bold text-foreground">{value}</p>
          <p className="text-sm text-muted-foreground">{label}</p>
        </div>
      </div>
    </div>
  );
}
