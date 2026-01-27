import React from "react";
import { TaskItemTemplate } from "./task-item-template";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
}

export const TaskListTemplate: React.FC<TaskListProps> = ({ tasks }) => (
  <div className="space-y-2">
    {tasks.map(task => <TaskItemTemplate key={task.id} task={task} />)}
  </div>
);