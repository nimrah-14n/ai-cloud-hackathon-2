#### `task-list-component.md`
```markdown
# Task List Component Example

- Displays a list of Task Items
- Accepts tasks as props and renders TaskItem for each
- Supports sorting and filtering

```tsx
import React from "react";
import { TaskItem } from "./TaskItem";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
}

export const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <div className="space-y-2">
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};