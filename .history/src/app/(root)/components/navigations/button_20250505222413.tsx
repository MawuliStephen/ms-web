// components/ui/button.tsx
'use client';

import React from 'react';
// import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        outline: 'border border-input hover:bg-accent hover:text-accent-foreground',
      },
      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 px-3 rounded-md',
        lg: 'h-11 px-8 rounded-md',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={buttonVariants({ variant, size, className })}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };

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