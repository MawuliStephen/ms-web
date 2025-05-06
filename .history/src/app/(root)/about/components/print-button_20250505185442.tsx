// components/print-button.tsx
'use client';
import { useReactToPrint } from 'react-to-print';
// import { Button } from './ui/button';

export const PrintButton = ({ componentRef }: { componentRef: React.RefObject<HTMLDivElement> }) => {
  const handlePrint = useReactToPrint({
    getContent: () => componentRef.current,
    pageStyle: `
      @page { size: A4; margin: 15mm; }
      @media print {
        body { -webkit-print-color-adjust: exact; }
        .no-print { display: none !important; }
        .print\:bg-white { background: white !important; }
        .print\:text-black { color: black !important; }
        .print\:border-gray-200 { border-color: #e5e7eb !important; }
      }
    `,
    documentTitle: 'Professional_CV'
  });

  return (
    <button onClick={handlePrint} className="no-print">
      Download CV
    </button>
  );
};