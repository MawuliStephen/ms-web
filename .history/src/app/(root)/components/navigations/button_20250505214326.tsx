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