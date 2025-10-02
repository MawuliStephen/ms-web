// components/DownloadPDFButton.tsx
'use client';
import { Button } from '../../components/navigations/button';
import { generatePDF } from '../utils/pdfGenerator';

interface DownloadPDFButtonProps {
  documentTitle: string;
  showProjects: boolean;
  showMarketing: boolean;
  activeFilter: 'tech' | 'marketing' | 'all';
}

export function DownloadPDFButton({
  documentTitle,
  showProjects,
  showMarketing,
  activeFilter
}: DownloadPDFButtonProps) {
  const handleDownload = () => {
    generatePDF({
      documentTitle,
      showProjects,
      showMarketing,
      activeFilter
    });
  };


  const handlePreview = () => {
    const pdfData =
      generatePDF({
        documentTitle,
        showProjects,
        showMarketing,
        activeFilter
      });

    const previewWindow = window.open('', '_blank');
    if (previewWindow) {
      previewWindow.document.write(`
                  <!DOCTYPE html>
                  <html>
                  <head>
                      <title>CV Preview</title>
                      <style>
                          body { margin: 0; padding: 0; }
                          iframe { width: 100%; height: 100vh; border: none; }
                      </style>
                  </head>
                  <body>
                      <iframe src="${pdfData}"></iframe>
                  </body>
                  </html>
              `);
      previewWindow.document.close();
    } else {
      alert('Please allow popups for this site to view the preview');
    }
  };




  return (
   <div className="">
  <Button variant="default" onClick={handleDownload}>
    Download PDF
  </Button>

  <Button onClick={handlePreview} variant="outline">
    Preview CV
  </Button>
</div>

  );
}
