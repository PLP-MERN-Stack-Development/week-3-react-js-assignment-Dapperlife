
import { useState } from 'react';
import { Task } from '@/types/task';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { 
  CheckCircle2, 
  Circle, 
  Edit3, 
  Trash2, 
  Save, 
  X,
  Calendar,
  Flag
} from 'lucide-react';

interface TaskItemProps {
  task: Task;
  onToggleComplete: (id: string) => void;
  onUpdateTask: (id: string, updates: Partial<Task>) => void;
  onDeleteTask: (id: string) => void;
}

const TaskItem = ({ task, onToggleComplete, onUpdateTask, onDeleteTask }: TaskItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);
  const [editDescription, setEditDescription] = useState(task.description || '');
  const [editPriority, setEditPriority] = useState(task.priority);

  const handleSave = () => {
    if (!editTitle.trim()) return;
    
    onUpdateTask(task.id, {
      title: editTitle.trim(),
      description: editDescription.trim() || undefined,
      priority: editPriority,
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditTitle(task.title);
    setEditDescription(task.description || '');
    setEditPriority(task.priority);
    setIsEditing(false);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-700 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-700 border-green-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high': return '🔴';
      case 'medium': return '🟡';
      case 'low': return '🟢';
      default: return '⚪';
    }
  };

  return (
    <Card className={`p-4 transition-all duration-200 hover:shadow-lg bg-white/80 backdrop-blur-sm border-0 shadow-md ${
      task.completed 
        ? 'opacity-75 bg-slate-50/80' 
        : 'hover:shadow-xl hover:-translate-y-1'
    }`}>
      <div className="flex items-start gap-3">
        <Button
          variant="ghost"
          size="sm"
          className={`mt-1 p-1 h-8 w-8 rounded-full transition-all duration-200 ${
            task.completed 
              ? 'text-green-600 hover:text-green-700 hover:bg-green-50' 
              : 'text-slate-400 hover:text-blue-600 hover:bg-blue-50'
          }`}
          onClick={() => onToggleComplete(task.id)}
        >
          {task.completed ? <CheckCircle2 className="h-5 w-5" /> : <Circle className="h-5 w-5" />}
        </Button>

        <div className="flex-1 min-w-0">
          {isEditing ? (
            <div className="space-y-3">
              <Input
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                className="font-medium"
                autoFocus
              />
              <Textarea
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
                placeholder="Add a description"
                className="resize-none"
                rows={2}
              />
              <Select value={editPriority} onValueChange={(value: 'low' | 'medium' | 'high') => setEditPriority(value)}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">🟢 Low</SelectItem>
                  <SelectItem value="medium">🟡 Medium</SelectItem>
                  <SelectItem value="high">🔴 High</SelectItem>
                </SelectContent>
              </Select>
            </div>
          ) : (
            <div className="space-y-2">
              <h3 className={`font-medium leading-tight ${
                task.completed 
                  ? 'line-through text-slate-500' 
                  : 'text-slate-800'
              }`}>
                {task.title}
              </h3>
              
              {task.description && (
                <p className={`text-sm leading-relaxed ${
                  task.completed 
                    ? 'line-through text-slate-400' 
                    : 'text-slate-600'
                }`}>
                  {task.description}
                </p>
              )}

              <div className="flex items-center gap-2 text-xs">
                <Badge variant="outline" className={getPriorityColor(task.priority)}>
                  <Flag className="h-3 w-3 mr-1" />
                  {getPriorityIcon(task.priority)} {task.priority}
                </Badge>
                
                <div className="flex items-center text-slate-500">
                  <Calendar className="h-3 w-3 mr-1" />
                  {task.createdAt.toLocaleDateString()}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center gap-1">
          {isEditing ? (
            <>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-1 text-green-600 hover:text-green-700 hover:bg-green-50"
                onClick={handleSave}
              >
                <Save className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-1 text-slate-500 hover:text-slate-700 hover:bg-slate-100"
                onClick={handleCancel}
              >
                <X className="h-4 w-4" />
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-1 text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                onClick={() => setIsEditing(true)}
              >
                <Edit3 className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-1 text-slate-500 hover:text-red-600 hover:bg-red-50 transition-colors"
                onClick={() => onDeleteTask(task.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </>
          )}
        </div>
      </div>
    </Card>
  );
};

export default TaskItem;
