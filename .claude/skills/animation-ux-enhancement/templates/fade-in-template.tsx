---

### **`templates` folder content**

#### `fade-in-template.tsx`
```tsx
import React from "react";

interface FadeInProps {
  children: React.ReactNode;
}

export const FadeInTemplate: React.FC<FadeInProps> = ({ children }) => (
  <div className="animate-fade-in">{children}</div>
);