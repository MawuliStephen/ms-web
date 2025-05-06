// // This file is part of the Professional CV project.
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

//   const handlePrint = useCallback(
//     useReactToPrint({
//       content: () => {
//         if (!componentRef.current) {
//           console.error('❌ Print content ref is null');
//           return null;
//         }
//         return componentRef.current;
//       },
//       documentTitle,
//       removeAfterPrint: true,
//       pageStyle: `
//         @page { size: A4; margin: 15mm; }
//         @media print {
//           body { -webkit-print-color-adjust: exact; }
//           .no-print { display: none !important; }
//         }
//       `,
//       onPrintError: (err) => {
//         console.error('❌ Failed to print:', err);
//       },
//       onAfterPrint: () => console.log('✅ Print completed'),
//       onBeforeGetContent: () => console.log('ℹ️ Preparing content for printing...')
//     }),
//     [componentRef, documentTitle]
//   );

//   return (
//     <Button
//       onClick={handlePrint}
//       variant={variant}
//       className={`no-print ${className}`}
//       disabled={!componentRef.current}
//     >
//       Download CV
//     </Button>
//   );
// };
