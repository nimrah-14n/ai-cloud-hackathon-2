#### `task-complete-transition.md`
```markdown
# Task Complete Transition Example

- Smoothly marks task as complete with fade + strike-through.
- Enhances task completion feedback.

```tsx
import React from "react";

interface TaskProps {
  title: string;
  completed: boolean;
}

export const TaskComplete: React.FC<TaskProps> = ({ title, completed }) => (
  <div className={`transition-all duration-300 ${completed ? "opacity-50 line-through" : ""}`}>
    {title}
  </div>
);