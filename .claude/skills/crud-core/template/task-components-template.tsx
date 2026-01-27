### `skills/crud/templates/task-component-template.tsx`
import React from "react";
interface TaskProps {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
  onToggleComplete: (id: number) => void;
  onDelete: (id: number) => void;
}

export const TaskComponent: React.FC<TaskProps> = ({
  id,
  title,
  description,
  completed,
  onToggleComplete,
  onDelete,
}) => {
  return (
    <div className={`p-4 border rounded mb-2 ${completed ? "bg-green-50" : "bg-white"}`}>
      <h3 className={`font-bold ${completed ? "line-through" : ""}`}>{title}</h3>
      {description && <p className="text-gray-600">{description}</p>}
      <div className="mt-2 flex gap-2">
        <button onClick={() => onToggleComplete(id)} className="px-2 py-1 bg-blue-500 text-white rounded">
          {completed ? "Mark Incomplete" : "Mark Complete"}
        </button>
        <button onClick={() => onDelete(id)} className="px-2 py-1 bg-red-500 text-white rounded">
          Delete
        </button>
      </div>
    </div>
  );
};