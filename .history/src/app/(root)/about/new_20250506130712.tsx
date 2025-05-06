'use client';

import { useCallback } from 'react';
// import { Button } from '../../components/navigations/button';
import { Button } from '../components/navigations/button';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

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
    const handleDownload = useCallback(async () => {
        const original = componentRef.current;
        if (!original) return;

        // Clone content
        const clone = original.cloneNode(true) as HTMLElement;

        // Apply a PDF-specific class
        clone.classList.add('pdf-mode');

        // Hide visually, but keep in DOM for rendering
        clone.style.position = 'absolute';
        clone.style.top = '-9999px';
        clone.style.left = '-9999px';
        document.body.appendChild(clone);

        const canvas = await html2canvas(clone, {
            scale: 2,
            useCORS: true,
            backgroundColor: '#ffffff',
        });

        const imgData = canvas.toDataURL('image/jpeg', 1.0);
        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4',
        });

        const pdfWidth = 210;
        const pdfHeight = 297;
        const imgWidth = pdfWidth;
        const imgHeight = (canvas.height * pdfWidth) / canvas.width;

        let position = 0;
        let heightLeft = imgHeight;

        while (heightLeft > 0) {
            pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
            heightLeft -= pdfHeight;
            if (heightLeft > 0) {
                pdf.addPage();
                position = 0;
            }
        }

        pdf.save(`${documentTitle}.pdf`);
        document.body.removeChild(clone); // Cleanup
    }, [componentRef, documentTitle]);

    return (
        <Button onClick={handleDownload} variant={variant} className={`no-print ${className}`}>
            Download CV
        </Button>
    );
};



// 'use client';

// import { Button } from '../components/navigations/button';
// import jsPDF from 'jspdf';

// interface DownloadPDFButtonProps {
//   documentTitle?: string;
//   className?: string;
//   variant?: 'default' | 'outline';
// }

// export const DownloadPDFButton = ({
//   documentTitle = 'Professional_CV',
//   className = '',
//   variant = 'default',
// }: DownloadPDFButtonProps) => {

//   const handleDownload = () => {
//     const doc = new jsPDF({
//       orientation: 'portrait',
//       unit: 'mm',
//       format: 'a4',
//     });

//     // Sample layout
//     doc.setFont('Helvetica', 'bold');
//     doc.setFontSize(24);
//     doc.text('John Doe', 20, 30);

//     doc.setFontSize(12);
//     doc.setFont('Helvetica', 'normal');
//     doc.text('Software Engineer', 20, 40);
//     doc.text('Email: john@example.com | Phone: 123-456-7890', 20, 50);

//     // Horizontal Line
//     doc.setLineWidth(0.5);
//     doc.line(20, 55, 190, 55);

//     // Work Experience Header
//     doc.setFontSize(14);
//     doc.setFont('Helvetica', 'bold');
//     doc.text('Work Experience', 20, 70);

//     // Entry
//     doc.setFontSize(12);
//     doc.setFont('Helvetica', 'normal');
//     doc.text('Senior Developer at XYZ Corp', 20, 80);
//     doc.text('Jan 2020 – Present', 160, 80, { align: 'right' });
//     doc.text('• Developed scalable web applications using React and Node.js.', 25, 90);
//     doc.text('• Led a team of 4 developers and introduced CI/CD practices.', 25, 98);

//     // More sections...
//     // Projects, Education, Skills, etc.

//     doc.save(`${documentTitle}.pdf`);
//   };

//   return (
//     <Button onClick={handleDownload} variant={variant} className={`no-print ${className}`}>
//       Download CV
//     </Button>
//   );
// };
