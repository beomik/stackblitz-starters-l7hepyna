import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  className = "", 
  variant = "default", 
  ...props 
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case "outline":
        return "border border-gray-300 bg-white text-gray-800 hover:bg-gray-50";
      default:
        return "bg-green-600 text-white hover:bg-green-700";
    }
  };

  return (
    <button
      className={`px-4 py-2 rounded-md font-medium ${getVariantClasses()} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};