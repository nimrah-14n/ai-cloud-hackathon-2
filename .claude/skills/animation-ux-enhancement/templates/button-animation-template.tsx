import React, { useState } from "react";

interface AnimatedButtonProps {
  label: string;
}

export const ButtonAnimationTemplate: React.FC<AnimatedButtonProps> = ({ label }) => {
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