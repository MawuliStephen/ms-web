// components/print-button.tsx
'use client';
import { useReactToPrint } from 'react-to-print';
import { Button } from '../../components/navigations/button';



interface PrintButtonProps {
    componentRef: React.RefObject<HTMLDivElement | null>;
    documentTitle?: string;
    variant?: 'default' | 'outline';
    className?: string;
  }

// interface PrintButtonProps {
//   componentRef: React.RefObject<HTMLDivElement>;
//   documentTitle?: string;
//   variant?: 'default' | 'outline';
//   className?: string;
// }

export const PrintButton = ({ 
  componentRef, 
  documentTitle = 'Professional_CV',
  variant = 'default',
  className = ''
}: PrintButtonProps) => {
  const handlePrint = useReactToPrint({
    content: () => {
      if (!componentRef.current) {
        console.error('Print content ref is not available');
        return null;
      }
      
      return componentRef.current;
    },
    pageStyle: `
      @page { size: A4; margin: 15mm; }
      @media print {
        body { -webkit-print-color-adjust: exact; }
        .no-print { display: none !important; }
      }
    `,
    documentTitle,
    removeAfterPrint: true,
    onBeforeGetContent: () => {
      console.log('Preparing content for printing...');
    },
    onPrintError: (error) => {
      console.error('Failed to print:', error);
    }
  });

  return (
    <Button 
      onClick={handlePrint} 
      variant={variant}
      className={`no-print ${className}`}
    >
      Download CV
    </Button>
  );
};

// export const PrintButton = ({ 
//   componentRef, 
//   documentTitle = 'Professional_CV',
//   variant = 'default',
//   className = ''
// }: PrintButtonProps) => {
//   const handlePrint = useReactToPrint({
//     pageContent: () => componentRef.current,
//     pageStyle: `
//       @page { 
//         size: A4; 
//         margin: 15mm;
//         @top-center {
//           content: "${documentTitle}";
//           font-size: 12pt;
//         }
//       }
//       @media print {
//         body { 
//           -webkit-print-color-adjust: exact;
//           print-color-adjust: exact;
//         }
//         .no-print { display: none !important; }
//         .print\:bg-white { background: white !important; }
//         .print\:text-black { color: black !important; }
//         .print\:border-gray-200 { border-color: #e5e7eb !important; }
//       }
//     `,
//     documentTitle,
//     removeAfterPrint: true
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

// // components/print-button.tsx
// 'use client';
// import { useReactToPrint } from 'react-to-print';

// export const PrintButton = ({ componentRef }: { componentRef: React.RefObject<HTMLDivElement> }) => {
//   const handlePrint = useReactToPrint({
//     content: () => componentRef.current,
//     pageStyle: `
//       @page { size: A4; margin: 15mm; }
//       @media print {
//         body { -webkit-print-color-adjust: exact; }
//         .no-print { display: none !important; }
//         .print\:bg-white { background: white !important; }
//         .print\:text-black { color: black !important; }
//         .print\:border-gray-200 { border-color: #e5e7eb !important; }
//       }
//     `,
//     documentTitle: 'Professional_CV'
//   });

//   return (
//     <button onClick={handlePrint} className="no-print">
//       Download CV
//     </button>
//   );
// };