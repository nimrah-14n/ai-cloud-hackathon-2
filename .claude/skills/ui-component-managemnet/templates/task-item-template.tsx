import React from "react";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface TaskItemProps {
  task: Task;
}

export const TaskItemTemplate: React.FC<TaskItemProps> = ({ task }) => (
  <div className="flex justify-between p-3 bg-gray-100 rounded shadow">
    <div className={`flex-1 ${task.completed ? "line-through text-gray-400" : ""}`}>
      {task.title}
    </div>
    <div className="space-x-2">
      <button className="text-green-600">✔</button>
      <button className="text-yellow-600">✎</button>
      <button className="text-red-600">✖</button>
    </div>
  </div>
);