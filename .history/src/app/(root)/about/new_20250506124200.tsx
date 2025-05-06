'use client';

import { Button } from '../components/navigations/button';
import jsPDF from 'jspdf';

interface DownloadPDFButtonProps {
  documentTitle?: string;
  className?: string;
  variant?: 'default' | 'outline';
}

export const DownloadPDFButton = ({
  documentTitle = 'Professional_CV',
  className = '',
  variant = 'default',
}: DownloadPDFButtonProps) => {

  const handleDownload = () => {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });

    // Sample layout
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(24);
    doc.text('John Doe', 20, 30);

    doc.setFontSize(12);
    doc.setFont('Helvetica', 'normal');
    doc.text('Software Engineer', 20, 40);
    doc.text('Email: john@example.com | Phone: 123-456-7890', 20, 50);

    // Horizontal Line
    doc.setLineWidth(0.5);
    doc.line(20, 55, 190, 55);

    // Work Experience Header
    doc.setFontSize(14);
    doc.setFont('Helvetica', 'bold');
    doc.text('Work Experience', 20, 70);

    // Entry
    doc.setFontSize(12);
    doc.setFont('Helvetica', 'normal');
    doc.text('Senior Developer at XYZ Corp', 20, 80);
    doc.text('Jan 2020 – Present', 160, 80, { align: 'right' });
    doc.text('• Developed scalable web applications using React and Node.js.', 25, 90);
    doc.text('• Led a team of 4 developers and introduced CI/CD practices.', 25, 98);

    // More sections...
    // Projects, Education, Skills, etc.

    doc.save(`${documentTitle}.pdf`);
  };

  return (
    <Button onClick={handleDownload} variant={variant} className={`no-print ${className}`}>
      Download CV
    </Button>
  );
};
