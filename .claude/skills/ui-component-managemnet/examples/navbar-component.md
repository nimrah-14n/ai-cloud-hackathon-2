# Navbar Component Example

- Fixed top navigation bar
- Includes logo, navigation links, and user profile menu
- Responsive: collapses into hamburger menu on mobile

```tsx
import React from "react";

interface NavbarProps {
  username: string;
}

export const Navbar: React.FC<NavbarProps> = ({ username }) => {
  return (
    <nav className="bg-blue-600 p-4 flex justify-between items-center">
      <div className="text-white font-bold text-xl">Todo App</div>
      <div className="hidden md:flex space-x-4 text-white">
        <a href="/" className="hover:underline">Home</a>
        <a href="/tasks" className="hover:underline">Tasks</a>
        <span>Hello, {username}</span>
      </div>
    </nav>
  );
};