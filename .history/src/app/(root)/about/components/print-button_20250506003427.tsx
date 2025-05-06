// components/print-button.tsx
'use client';
import { useReactToPrint } from 'react-to-print';

interface PrintButtonProps {
  componentRef: React.RefObject<HTMLDivElement>;
//   componentRef: React.RefObject<HTMLDivElement | null>;

  documentTitle?: string;
}

export const PrintButton = ({ 
  componentRef, 
  documentTitle = 'Professional_CV'
}: PrintButtonProps) => {
  const handlePrint = useReactToPrint({
    content: () => {
      // Double-check ref availability
      if (!componentRef.current) {
        console.error('Print Error: Ref content is null', componentRef);
        return null;
      }
      
      console.log('Printing content:', componentRef.current.innerHTML); // Debug log
      
      // Return the printable content
      return componentRef.current;
    },
    pageStyle: `
      @page { size: A4; margin: 15mm; }
      body { -webkit-print-color-adjust: exact; }
      .no-print { display: none !important; }
    `,
    documentTitle,
    onBeforeGetContent: () => console.log('Starting print process...'),
    onAfterPrint: () => console.log('Print completed successfully'),
    onPrintError: (error) => console.error('Print Error:', error)
  });

  return (
    <button 
      onClick={() => {
        console.log('Button clicked - current ref:', componentRef.current);
        handlePrint();
      }}
      className="btn no-print"
    >
      Download CV
    </button>
  );
};


// 'use client';
// import { useReactToPrint } from 'react-to-print';
// import { Button } from '../../components/navigations/button';
// import { useCallback } from 'react';

// interface PrintButtonProps {
//   componentRef: React.RefObject<HTMLDivElement | null>;
//   documentTitle?: string;
//   variant?: 'default' | 'outline';
//   className?: string;
// }

// export const PrintButton = ({ 
//   componentRef, 
//   documentTitle = 'Professional_CV',
//   variant = 'default',
//   className = ''
// }: PrintButtonProps) => {

//   const handlePrint = useReactToPrint({
//     content: () => {
//       if (!componentRef.current) {
//         console.error('❌ Print content ref is null');
//         return null;
//       }
//       return componentRef.current;
//     },
//     documentTitle,
//     removeAfterPrint: true,
//     pageStyle: `
//       @page { size: A4; margin: 15mm; }
//       @media print {
//         body { -webkit-print-color-adjust: exact; }
//         .no-print { display: none !important; }
//       }
//     `,
//     onPrintError: (err) => {
//       console.error('❌ Failed to print:', err);
//     },
//     onAfterPrint: () => console.log('✅ Print completed'),
//     onBeforeGetContent: () => console.log('ℹ️ Preparing content for printing...')
//   });

//   return (
//     <div>
 

//     <Button 
//       onClick={handlePrint}
//       variant={variant}
//       className={`no-print ${className}`}
//       disabled={!componentRef.current} // Optional safety
//     >
//       Download CV
//     </Button>
// </div>
    
//   );
// };
