import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { TrendingUp, AlertTriangle } from 'lucide-react';

export default function Reports() {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-foreground">Reports & Analytics</h1>
        <Button className="bg-secondary hover:bg-secondary/90">
          Export Report
        </Button>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="metric-card">
          <p className="text-sm text-muted-foreground mb-1">Turnaround Time</p>
          <p className="text-3xl font-bold text-foreground">2.5 hrs</p>
          <p className="text-sm text-muted-foreground">Average completion time</p>
          <p className="text-xs text-primary flex items-center gap-1 mt-1">
            <TrendingUp className="h-3 w-3" />
            12% faster than last week
          </p>
        </div>

        <div className="metric-card">
          <p className="text-sm text-muted-foreground mb-1">Test Volume</p>
          <p className="text-3xl font-bold text-foreground">10</p>
          <p className="text-sm text-muted-foreground">Total tests this week</p>
          <p className="text-xs text-primary mt-1">3 completed</p>
        </div>

        <div className="metric-card">
          <p className="text-sm text-muted-foreground mb-1">Critical Results</p>
          <p className="text-3xl font-bold text-foreground">0</p>
          <p className="text-sm text-muted-foreground">Flagged this week</p>
          <p className="text-xs text-primary mt-1">No critical results</p>
        </div>
      </div>

      {/* Report Filters */}
      <div className="bg-card rounded-lg border border-border p-6">
        <h3 className="font-semibold text-foreground mb-4">Report Filters</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="space-y-2">
            <Label>Start Date</Label>
            <Input type="date" placeholder="mm/dd/yyyy" />
          </div>
          <div className="space-y-2">
            <Label>End Date</Label>
            <Input type="date" placeholder="mm/dd/yyyy" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="space-y-2">
            <Label>Test Type</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select test type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Tests</SelectItem>
                <SelectItem value="cbc">Complete Blood Count</SelectItem>
                <SelectItem value="troponin">Troponin</SelectItem>
                <SelectItem value="lipid">Lipid Panel</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Status</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="All Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button className="bg-primary hover:bg-primary/90">
            Generate Report
          </Button>
          <button className="text-muted-foreground text-sm hover:text-foreground transition-colors">
            Export Filtered Data
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}
