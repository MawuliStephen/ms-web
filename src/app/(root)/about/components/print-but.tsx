// // // components/print-button.tsx
// // 'use client';
// // import { useReactToPrint } from 'react-to-print';
// // components/DownloadPDFButton.tsx
// 'use client';
// import { generatePDF } from '../utils/pdfGenerator';
// // import { Button } from '../../components/navigations/button';



// interface DownloadPDFButtonProps {
//   documentTitle: string;
//   showProjects: boolean;
//   showMarketing: boolean;
//   activeFilter: 'tech' | 'marketing' | 'all';
// }

// export function DownloadPDFButton({
//   documentTitle,
//   showProjects,
//   showMarketing,
//   activeFilter
// }: DownloadPDFButtonProps) {
//   const handleDownload = () => {
//     generatePDF({
//       documentTitle,
//       showProjects,
//       showMarketing,
//       activeFilter
//     });
//   };

//   return (
//        <Button 
//                 onClick={handleDownload} 
//                 variant={variant} 
//                 className={`no-print ${className}`}
//             >
//                 Download CV
//             </Button>
//   );
// }
