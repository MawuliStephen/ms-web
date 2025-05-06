import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  variant?: 'default' | 'outline';
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ onClick, variant = 'default', className = '', children }) => {
  return (
    <button 
      onClick={onClick} 
      className={`btn ${variant} ${className}`}
    >
      {children}
    </button>
  );
};

// // Replace this:
// // import { Button } from './ui/button';

// // With this:
// const Button = ({ variant = 'default', className = '', ...props }) => {
//   const baseClasses = 'px-4 py-2 rounded-md transition-colors';
//   const variantClasses = variant === 'outline' 
//     ? 'border border-border hover:bg-surface' 
//     : 'bg-primary text-white hover:bg-primary-dark';
  
//   return (
//     <button 
//       className={`${baseClasses} ${variantClasses} ${className}`}
//       {...props}
//     />
//   );
// };