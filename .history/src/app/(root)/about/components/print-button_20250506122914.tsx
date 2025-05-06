// 'use client';

import { useCallback } from 'react';
import { Button } from '../../components/navigations/button';
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
    const element = componentRef.current;
    if (!element) return;

    document.body.classList.add('pdf-mode'); // Before rendering
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
    });
    document.body.classList.remove('pdf-mode'); // Remove the class if it was added

    const imgData = canvas.toDataURL('image/jpeg', 1.0);
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });

    const pdfWidth = 210; // A4 width in mm
    const pdfHeight = 297; // A4 height in mm

    const imgProps = {
      width: canvas.width,
      height: canvas.height,
    };

    const ratio = imgProps.width / imgProps.height;
    const imgHeight = pdfWidth / ratio;

    let position = 0;
    let heightLeft = imgHeight;

    // Add image pages
    while (heightLeft > 0) {
      pdf.addImage(imgData, 'JPEG', 0, position, pdfWidth, imgHeight);
      heightLeft -= pdfHeight;
      if (heightLeft > 0) {
        pdf.addPage();
        position = 0;
      }
    }

    pdf.save(`${documentTitle}.pdf`);
  }, [componentRef, documentTitle]);

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
