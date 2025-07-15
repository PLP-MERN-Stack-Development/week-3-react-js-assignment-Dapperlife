
import { Task } from '@/types/task';
import TaskItem from './TaskItem';

interface TaskListProps {
  tasks: Task[];
  onToggleComplete: (id: string) => void;
  onUpdateTask: (id: string, updates: Partial<Task>) => void;
  onDeleteTask: (id: string) => void;
}

const TaskList = ({ tasks, onToggleComplete, onUpdateTask, onDeleteTask }: TaskListProps) => {
  return (
    <div className="space-y-3">
      {tasks.map((task, index) => (
        <div 
          key={task.id}
          className="animate-fade-in"
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <TaskItem
            task={task}
            onToggleComplete={onToggleComplete}
            onUpdateTask={onUpdateTask}
            onDeleteTask={onDeleteTask}
          />
        </div>
      ))}
    </div>
  );
};

export default TaskList;
