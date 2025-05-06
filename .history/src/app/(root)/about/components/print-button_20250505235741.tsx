'use client';
import { useReactToPrint } from 'react-to-print';
import { Button } from '../../components/navigations/button';
import { useCallback } from 'react';

interface PrintButtonProps {
  componentRef: React.RefObject<HTMLDivElement | null>;
  documentTitle?: string;
  variant?: 'default' | 'outline';
  className?: string;
}

export const PrintButton = ({ 
  componentRef, 
  documentTitle = 'Professional_CV',
  variant = 'default',
  className = ''
}: PrintButtonProps) => {

  const handlePrint = useReactToPrint({
    content: () => {
      if (!componentRef.current) {
        console.error('❌ Print content ref is null');
        return null;
      }
      return componentRef.current;
    },
    documentTitle,
    removeAfterPrint: true,
    pageStyle: `
      @page { size: A4; margin: 15mm; }
      @media print {
        body { -webkit-print-color-adjust: exact; }
        .no-print { display: none !important; }
      }
    `,
    onPrintError: (err) => {
      console.error('❌ Failed to print:', err);
    },
    onAfterPrint: () => console.log('✅ Print completed'),
    onBeforeGetContent: () => console.log('ℹ️ Preparing content for printing...')
  });

  return (
    
    <Button 
      onClick={handlePrint}
      variant={variant}
      className={`no-print ${className}`}
      disabled={!componentRef.current} // Optional safety
    >
      Download CV
    </Button>

    
  );
};


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
