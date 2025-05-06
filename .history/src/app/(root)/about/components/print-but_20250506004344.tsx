// components/print-button.tsx
'use client';
import { useReactToPrint } from 'react-to-print';
import { Button } from '../../components/navigations/button';
// import { Button } from './ui/button';

interface PrintButtonProps {
  componentRef: React.RefObject<HTMLDivElement>;
  documentTitle?: string;
}

export const PrintButton = ({ 
  componentRef, 
  documentTitle = 'Professional_CV'
}: PrintButtonProps) => {
  const handlePrint = useReactToPrint({
    content: () => {
      // Create a clone of the content to prevent React interference
      const contentToPrint = componentRef.current?.cloneNode(true) as HTMLElement;
      
      if (!contentToPrint) {
        console.error('Nothing to print - content is empty');
        return null;
      }

      // Force visibility of all elements for printing
      contentToPrint.querySelectorAll('*').forEach(el => {
        const element = el as HTMLElement;
        element.style.visibility = 'visible';
        element.style.opacity = '1';
      });

      // Create a temporary container
      const printContainer = document.createElement('div');
      printContainer.appendChild(contentToPrint);
      
      console.log('Content prepared for printing:', printContainer.innerHTML);
      return printContainer;
    },
    pageStyle: `
      @page { 
        size: A4; 
        margin: 15mm;
        @top-center {
          content: "${documentTitle}";
          font-size: 12pt;
        }
      }
      body { 
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
        visibility: visible !important;
      }
      * {
        visibility: visible !important;
      }
      .no-print {
        display: none !important;
      }
    `,
    documentTitle,
    onBeforeGetContent: () => console.log('Starting print preparation...'),
    onAfterPrint: () => console.log('Print completed successfully'),
    onPrintError: (error) => console.error('Print failed:', error)
  });

  return (
    <Button
      onClick={() => {
        console.log('Print button clicked - current ref:', componentRef.current);
        handlePrint();
      }}
      variant="default"
      className="no-print"
    >
      Download CV
    </Button>
  );
};