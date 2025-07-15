
import { TaskFilter } from '@/types/task';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Circle, List } from 'lucide-react';

interface TaskFiltersProps {
  filter: TaskFilter;
  onFilterChange: (filter: TaskFilter) => void;
  stats: {
    total: number;
    active: number;
    completed: number;
  };
}

const TaskFilters = ({ filter, onFilterChange, stats }: TaskFiltersProps) => {
  const filters = [
    { key: 'all' as TaskFilter, label: 'All Tasks', icon: List, count: stats.total },
    { key: 'active' as TaskFilter, label: 'Active', icon: Circle, count: stats.active },
    { key: 'completed' as TaskFilter, label: 'Completed', icon: CheckCircle2, count: stats.completed },
  ];

  return (
    <Card className="p-4 bg-white/80 backdrop-blur-sm border-0 shadow-lg h-fit">
      <h3 className="font-semibold text-slate-700 mb-3 text-sm uppercase tracking-wide">
        Filters
      </h3>
      
      <div className="space-y-2">
        {filters.map(({ key, label, icon: Icon, count }) => (
          <Button
            key={key}
            variant={filter === key ? 'default' : 'ghost'}
            className={`w-full justify-between text-left h-auto p-3 transition-all duration-200 ${
              filter === key 
                ? 'bg-blue-500 text-white shadow-md' 
                : 'hover:bg-slate-100 text-slate-600'
            }`}
            onClick={() => onFilterChange(key)}
          >
            <div className="flex items-center gap-2">
              <Icon className="h-4 w-4" />
              <span>{label}</span>
            </div>
            <Badge 
              variant={filter === key ? 'secondary' : 'outline'}
              className={filter === key ? 'bg-white/20 text-white border-white/30' : ''}
            >
              {count}
            </Badge>
          </Button>
        ))}
      </div>

      {stats.total > 0 && (
        <div className="mt-4 pt-3 border-t border-slate-200">
          <div className="text-xs text-slate-500 space-y-1">
            <div className="flex justify-between">
              <span>Progress</span>
              <span>{Math.round((stats.completed / stats.total) * 100)}%</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2">
              <div 
                className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(stats.completed / stats.total) * 100}%` }}
              />
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};

export default TaskFilters;
