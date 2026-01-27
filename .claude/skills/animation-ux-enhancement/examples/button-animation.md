#### `button-animation.md`
```markdown
# Button Animation Example

- Button click ripple or press effect.
- Provides visual feedback for user actions.

```tsx
import React, { useState } from "react";

export const AnimatedButton: React.FC<{ label: string }> = ({ label }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <button
      className={`px-4 py-2 rounded text-white transition-all ${
        clicked ? "bg-green-600 scale-95" : "bg-blue-500"
      }`}
      onClick={() => setClicked(!clicked)}
    >
      {label}
    </button>
  );
};