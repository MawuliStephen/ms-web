// components/ui/button.tsx
'use client';
// components/ui/button.tsx
'use client';

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'default', ...props }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center rounded-none font-sans font-medium text-sm transition-all duration-200 ease-in-out px-4 py-2 whitespace-nowrap';
    
    const variantClasses = variant === 'outline' 
      ? 'bg-transparent text-primary border border-primary hover:bg-primary hover:text-primary-contrast'
      : 'bg-primary text-primary-contrast hover:bg-primary-contrast hover:text-primary hover:border-primary border border-transparent';

    return (
      <button
        className={`${baseClasses} ${variantClasses} ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button };

// import React from 'react';

// interface ButtonProps {
//   onClick?: () => void;
//   variant?: 'default' | 'outline';
//   className?: string;
//   children: React.ReactNode;
// }

// export const Button: React.FC<ButtonProps> = ({ onClick, variant = 'default', className = '', children }) => {
//   return (
//     <button 
//       onClick={onClick} 
//       className={`btn ${variant} ${className}`}
//     >
//       {children}
//     </button>
//   );
// };

// // // Replace this:
// // // import { Button } from './ui/button';

// // // With this:
// // const Button = ({ variant = 'default', className = '', ...props }) => {
// //   const baseClasses = 'px-4 py-2 rounded-md transition-colors';
// //   const variantClasses = variant === 'outline' 
// //     ? 'border border-border hover:bg-surface' 
// //     : 'bg-primary text-white hover:bg-primary-dark';
  
// //   return (
// //     <button 
// //       className={`${baseClasses} ${variantClasses} ${className}`}
// //       {...props}
// //     />
// //   );
// // };