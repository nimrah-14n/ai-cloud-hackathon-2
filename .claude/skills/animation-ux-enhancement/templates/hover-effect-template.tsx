import React from "react";

interface HoverProps {
  label: string;
}

export const HoverEffectTemplate: React.FC<HoverProps> = ({ label }) => (
  <button className="px-4 py-2 bg-blue-500 text-white rounded transform transition-transform hover:scale-105 hover:bg-blue-600">
    {label}
  </button>
);