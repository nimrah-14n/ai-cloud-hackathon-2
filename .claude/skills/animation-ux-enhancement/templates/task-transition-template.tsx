import React from "react";

interface TaskProps {
  title: string;
  completed: boolean;
}

export const TaskTransitionTemplate: React.FC<TaskProps> = ({ title, completed }) => (
  <div className={`transition-all duration-300 ${completed ? "opacity-50 line-through" : ""}`}>
    {title}
  </div>
);