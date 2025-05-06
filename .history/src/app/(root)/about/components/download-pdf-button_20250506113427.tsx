'use client';

import { useCallback, useEffect, useState } from 'react';
import { Button } from '../../components/navigations/button';

interface DownloadPDFButtonProps {
  componentRef: React.RefObject<HTMLDivElement | null>;
  documentTitle?: string;
  className?: string;
  variant?: 'default' | 'outline';
}

export const DownloadPDFButton = ({
  componentRef,
  documentTitle = 'Professional_CV',
  className = '',
  variant = 'default',
}: DownloadPDFButtonProps) => {
  const [html2pdfInstance, setHtml2pdfInstance] = useState<any>(null);

  useEffect(() => {
    // Dynamically import html2pdf.js
    const loadHtml2pdf = async () => {
      const module = await import('html2pdf.js');
      setHtml2pdfInstance(module.default || module); // ✅ this line is key
      // If the module uses named exports, we use the module directly
      setHtml2pdfInstance(module);
    };

    loadHtml2pdf();
  }, []);

  const handleDownload = useCallback(() => {
    if (!componentRef.current || !html2pdfInstance) return;
  
    html2pdfInstance()
      .set({
        margin: 0.5,
        filename: `${documentTitle}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
      })
      .from(componentRef.current)
      .save();
  }, [componentRef, documentTitle, html2pdfInstance]);
  

  // const handleDownload = useCallback(() => {
  //   if (!componentRef.current || !html2pdfInstance) return;

  //   // Call the html2pdf function from the module
  //   html2pdfInstance()
  //     .set({
  //       margin: 0.5,
  //       filename: `${documentTitle}.pdf`,
  //       image: { type: 'jpeg', quality: 0.98 },
  //       html2canvas: { scale: 2 },
  //       jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
  //     })
  //     .from(componentRef.current)
  //     .save();
  // }, [componentRef, documentTitle, html2pdfInstance]);

  return (
    <Button
      onClick={handleDownload}
      variant={variant}
      className={`no-print ${className}`}
    >
      Download CV
    </Button>
  );
};


// 'use client';
// import { useCallback } from 'react';
// import html2pdf from 'html2pdf.js';
// import { Button } from '../../components/navigations/button';


// interface DownloadPDFButtonProps {
//   componentRef: React.RefObject<HTMLDivElement>;
//   documentTitle?: string;
//   className?: string;
//   variant?: 'default' | 'outline';
// }

// export const DownloadPDFButton = ({
//   componentRef,
//   documentTitle = 'Professional_CV',
//   className = '',
//   variant = 'default',
// }: DownloadPDFButtonProps) => {
//   const handleDownload = useCallback(() => {
//     if (!componentRef.current) {
//       console.error('❌ Component ref is null');
//       return;
//     }

//     const element = componentRef.current;

//     html2pdf()
//       .set({
//         margin: 0.5,
//         filename: `${documentTitle}.pdf`,
//         image: { type: 'jpeg', quality: 0.98 },
//         html2canvas: { scale: 2 },
//         jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
//       })
//       .from(element)
//       .save()
//       .catch(err => console.error('❌ PDF generation failed:', err));
//   }, [componentRef, documentTitle]);

//   return (
//     <Button
//       onClick={handleDownload}
//       variant={variant}
//       className={`no-print ${className}`}
//     >
//       Download CV
//     </Button>
//   );
// };
