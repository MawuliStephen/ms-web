// // components/print-button.tsx
// 'use client';
// import { useReactToPrint } from 'react-to-print';
// import { Button } from '../../components/navigations/button';



// interface PrintButtonProps {
//     componentRef: React.RefObject<HTMLDivElement | null>;
//     documentTitle?: string;
//     variant?: 'default' | 'outline';
//     className?: string;
//   }


// export const PrintButton = ({ 
//   componentRef, 
//   documentTitle = 'Professional_CV',
//   variant = 'default',
//   className = ''
// }: PrintButtonProps) => {
//   const handlePrint = useReactToPrint({
//     content: () => {
//       if (!componentRef.current) {
//         console.error('Print content ref is not available');
        
//         return null;
//       }
//       // Check if the ref is a valid HTMLDivElement
//       return componentRef.current;
//     },
//     pageStyle: `
//       @page { size: A4; margin: 15mm; }
//       @media print {
//         body { -webkit-print-color-adjust: exact; }
//         .no-print { display: none !important; }
//       }
//     `,
//     documentTitle,
//     removeAfterPrint: true,
//     onBeforeGetContent: () => {
//       console.log('Preparing content for printing...');
//     },
//     onPrintError: (error) => {
//       console.error('Failed to print:', error);
//     },
    
//     onAfterPrint: () => console.log('Print completed'),
 

//   });

//   return (
//     <Button 
//       onClick={handlePrint} 
//       variant={variant}
//       className={`no-print ${className}`}
//     >
//       Download CV
//     </Button>
//   );
// };
