---

### **`templates` folder content**

#### `navbar-template.tsx`
```tsx
import React from "react";

interface NavbarProps {
  username: string;
}

export const NavbarTemplate: React.FC<NavbarProps> = ({ username }) => (
  <nav className="bg-blue-600 p-4 flex justify-between items-center">
    <div className="text-white font-bold text-xl">App Name</div>
    <div className="hidden md:flex space-x-4 text-white">
      <a href="/" className="hover:underline">Home</a>
      <a href="/tasks" className="hover:underline">Tasks</a>
      <span>Hello, {username}</span>
    </div>
  </nav>
);
