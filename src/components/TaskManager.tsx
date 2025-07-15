
import { useState, useEffect } from 'react';
import { Task, TaskFilter } from '@/types/task';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import TaskFilters from './TaskFilters';
import { Card } from '@/components/ui/card';

const TaskManager = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<TaskFilter>('all');

  // Load tasks from localStorage on mount
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      const parsedTasks = JSON.parse(savedTasks).map((task: any) => ({
        ...task,
        createdAt: new Date(task.createdAt)
      }));
      setTasks(parsedTasks);
    }
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (taskData: Omit<Task, 'id' | 'createdAt'>) => {
    const newTask: Task = {
      ...taskData,
      id: crypto.randomUUID(),
      createdAt: new Date(),
    };
    setTasks(prev => [newTask, ...prev]);
  };

  const updateTask = (id: string, updates: Partial<Task>) => {
    setTasks(prev => prev.map(task => 
      task.id === id ? { ...task, ...updates } : task
    ));
  };

  const deleteTask = (id: string) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const toggleComplete = (id: string) => {
    updateTask(id, { completed: !tasks.find(t => t.id === id)?.completed });
  };

  const filteredTasks = tasks.filter(task => {
    switch (filter) {
      case 'active':
        return !task.completed;
      case 'completed':
        return task.completed;
      default:
        return true;
    }
  });

  const taskStats = {
    total: tasks.length,
    active: tasks.filter(t => !t.completed).length,
    completed: tasks.filter(t => t.completed).length,
  };

  return (
    <div className="space-y-6">
      <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
        <TaskForm onSubmit={addTask} />
      </Card>

      <div className="grid md:grid-cols-4 gap-4">
        <div className="md:col-span-1">
          <TaskFilters 
            filter={filter}
            onFilterChange={setFilter}
            stats={taskStats}
          />
        </div>
        
        <div className="md:col-span-3">
          <TaskList 
            tasks={filteredTasks}
            onToggleComplete={toggleComplete}
            onUpdateTask={updateTask}
            onDeleteTask={deleteTask}
          />
        </div>
      </div>

      {filteredTasks.length === 0 && (
        <div className="text-center py-12">
          <div className="text-slate-400 text-lg">
            {filter === 'active' && 'No active tasks'}
            {filter === 'completed' && 'No completed tasks'}
            {filter === 'all' && 'No tasks yet'}
          </div>
          <p className="text-slate-500 mt-2">
            {filter === 'all' ? 'Create your first task above!' : 'Try switching filters to see other tasks.'}
          </p>
        </div>
      )}
    </div>
  );
};

export default TaskManager;
