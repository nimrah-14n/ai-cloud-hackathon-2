# Fade-In Animation Example

- Applies fade-in effect when a component mounts.
- Smooth appearance for task items or modals.

```tsx
import React from "react";

export const FadeIn: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="animate-fade-in">
    {children}
  </div>
);

/* Tailwind CSS configuration (tailwind.config.js)
extend: {
  keyframes: {
    'fade-in': { '0%': { opacity: 0 }, '100%': { opacity: 1 } }
  },
  animation: { 'fade-in': 'fade-in 0.5s ease-in-out' }
}
*/