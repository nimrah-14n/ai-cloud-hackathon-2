type Task = {
    id: string;
    title: string;
    completed: boolean;
  };
  
  type Props = {
    tasks: Task[];
    onToggle: (id: string) => void;
  };
  
  export function TaskList({ tasks, onToggle }: Props) {
    if (tasks.length === 0) {
      return <p className="text-gray-500">No tasks available.</p>;
    }
  
    return (
      <ul className="space-y-2">
        {tasks.map(task => (
          <li key={task.id} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggle(task.id)}
            />
            <span className={task.completed ? "line-through" : ""}>
              {task.title}
            </span>
          </li>
        ))}
      </ul>
    );
  }