import jsPDF from 'jspdf';
import data from '../../../../data/cv/data.json';

type FilterType = 'tech' | 'marketing' | 'all';

interface GeneratePDFOptions {
  documentTitle: string;
  showProjects: boolean;
  showMarketing: boolean;
  activeFilter: FilterType;
}

export function generatePDF({
  documentTitle,
  showProjects,
  // showMarketing,
  activeFilter,
}: GeneratePDFOptions) {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  // Initial vertical position for drawing lines
  let y = 20;

  // Left margin for content and line drawing
  const marginLeft = 25;

  // Function to draw a light gray sidebar on the left side of the page
  const addSidebar = () => {
    doc.setFillColor(240, 240, 240); // Light gray as RGB

    doc.rect(0, 0, 20, pageHeight, 'F'); // Draw a filled rectangle (sidebar) from (0,0) to 20px wide and full page height
  };

  // Function to draw a horizontal line and move down for the next one
  const drawLine = () => {
    doc.setDrawColor(200); // Set stroke color to medium gray
    doc.line(marginLeft, y, pageWidth - 10, y); // Draw a line from left margin to near the right edge
    y += 5; // Move down by 5 units for the next line
  };
  // Function to add a section title to the PDF
  const addSectionTitle = (title: string) => {
    doc.setFontSize(16); // Set font size for the title
    doc.setTextColor(33, 33, 33); // Set text color to dark gray
    doc.setFont('helvetica', 'bold'); // Use Helvetica bold font
    doc.text(title.toUpperCase(), marginLeft, y); // Add the title text at the current y position
    y += 1; // Move slightly down after title
    drawLine(); // Draw a horizontal line under the title
  };

  // Function to add a paragraph of text with optional styling and positioning
  const addParagraph = (
    text: string,
    fontSize = 11, // Default font size
    fontStyle: 'normal' | 'bold' = 'normal', // Default font style
    customY?: 4, // Optional custom vertical position
  ) => {
    doc.setFontSize(fontSize); // Set the desired font size
    doc.setTextColor(60, 60, 60); // Set text color to medium gray
    doc.setFont('helvetica', fontStyle); // Apply font and style
    const lines = doc.splitTextToSize(text, pageWidth - marginLeft - 10); // Wrap text to fit within the page width
    const textY = customY ?? y; // Use custom y if provided, otherwise use current y
    doc.text(lines, marginLeft, textY); // Add the text to the PDF
    y = textY + lines.length * 6; // Update y based on the number of lines added
  };

  const addBulletList = (items: string[]) => {
    items.forEach((item: string) => {
      const lines: string[] = doc.splitTextToSize(item, pageWidth - marginLeft - 15); // Wrap item text
      doc.text(`• ${lines[0]}`, marginLeft + 4, y); // Add bullet for first line
      y += 6; // Move down
      lines.slice(1).forEach((line: string) => {
        doc.text(`  ${line}`, marginLeft + 8, y); // Indent wrapped lines
        y += 6;
      });
    });
    y += 4; // Add extra space after the list
  };



  const drawChips = (items: string[]) => {
    let chipX = marginLeft; // Set initial X position for the first chip
    let chipY = y; // Set initial Y position for the first chip

    doc.setFontSize(10); // Set font size for chip text
    doc.setFont('helvetica', 'normal'); // Set font family for chip text

    items.forEach((item) => {
      const chipWidth = doc.getTextWidth(item) + 10; // Calculate the width of the chip (text width + padding)

      // Check if the chip will overflow the page width and wrap to the next line
      if (chipX + chipWidth > pageWidth - 10) {
        chipX = marginLeft; // Reset X position to the left margin
        chipY += 10; // Move down by 10 units for the next row of chips
      }

      // Set the fill color for the chip (light gray)
      doc.setFillColor(230, 230, 230);


      // Draw the chip background with rounded corners
      // Parameters: (X, Y, width, height, x-radius, y-radius, 'F' for fill)
      doc.roundedRect(chipX, chipY - 6, chipWidth, 8, 4, 4, 'F'); // Increased radius for more rounded corners

      // Set the text color for chip text
      doc.setTextColor(50, 50, 50); // Dark gray text color

      // Draw the text inside the chip, with padding from the left
      doc.text(item, chipX + 5, chipY); // Adjust Y to position text correctly inside chip

      // Move the X position to the right for the next chip, adding horizontal space
      chipX += chipWidth + 4; // 4 units of space between chips
    });

    // Update global Y position to the next line after all chips are drawn
    y = chipY + 6; // Add 6 units of space after the chips
  };




  const addPagination = () => {
    const pageCount = doc.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.setFontSize(9);
      doc.setTextColor(120);
      doc.text(`Page ${i} of ${pageCount}`, pageWidth - 30, pageHeight - 10);
    }
  };

  const preamble = data.preamble[activeFilter];
  const competencies = data.competencies;
  const experiences = data.experiences;
  const projects = data.projects;
  const volunteering = data.volunteering;
  const hobbies = data.hobbies;

  // --- Draw sidebar
  addSidebar();

  // --- Header
  doc.setFontSize(22);
  doc.setTextColor(0);
  doc.setFont('helvetica', 'bold');
  doc.text(preamble.name, marginLeft, y);

  y += 10;
  addParagraph(preamble.title, 13, 'bold');
  addParagraph(`${preamble.email} | ${preamble.phone} | ${preamble.location}`, 10);
  addParagraph(`LinkedIn: ${preamble.linkedin} | Portfolio: ${preamble.portfolio}`, 10);
  y += 4;
  addParagraph(preamble.summary);
  y += 6;

  // --- Competencies
    // --- Competencies
  addSectionTitle('Core Competencies');
  competencies.groups.forEach((group: string) => {
    addParagraph(group, 12, 'bold');
    // drawChips(competencies[group]);
    drawChips(competencies[group as keyof Omit<typeof competencies, 'groups'>]);

  });


  // --- Experience
  addSectionTitle('Work Experience');
  experiences.forEach((item) => {
    if (item.categories?.includes(activeFilter) || activeFilter === 'all') {
      addParagraph(`${item.role} at ${item.company}`, 12, 'bold');
      addParagraph(`${item.period}`, 10);
      addBulletList(item.highlights);
    }
  });

  // --- Projects
  if (showProjects && Array.isArray(projects)) {
    const filteredProjects = projects.filter(
      (proj) => proj.categories?.includes(activeFilter) || activeFilter === 'all'
    );
    if (filteredProjects.length > 0) {
      addSectionTitle('Projects');
      filteredProjects.forEach((proj) => {
        addParagraph(proj.name, 12, 'bold');
        addParagraph(proj.description);
        addBulletList(proj.tech);
      });
    }
  }

  // --- Volunteering
  addSectionTitle('Volunteering');
  volunteering.forEach((item) => {
    if (item.categories?.includes(activeFilter) || activeFilter === 'all') {
      addParagraph(`${item.organization} - ${item.role}`, 12, 'bold');
      addParagraph(item.date, 10);
      addParagraph(item.description);
    }
  });

  // --- Hobbies
  addSectionTitle('Hobbies');
  drawChips(hobbies);

  // --- Pagination
  addPagination();

  doc.save(`${documentTitle}.pdf`);
}



// import jsPDF from 'jspdf';
// import data from '../../../../data/cv/data.json';

// type FilterType = 'tech' | 'marketing' | 'all';

// interface GeneratePDFOptions {
//   documentTitle: string;
//   showProjects: boolean;
//   showMarketing: boolean;
//   activeFilter: FilterType;
// }

// export function generatePDF({
//   documentTitle,
//   showProjects,
//   showMarketing,
//   activeFilter,
// }: GeneratePDFOptions) {
//   const doc = new jsPDF();

//   const preamble = data.preamble[activeFilter];
//   const competencies = data.competencies;
//   const experiences = data.experiences;
//   const projects = data.projects;
//   const volunteering = data.volunteering;
//   const hobbies = data.hobbies;

//   let y = 20;

//   const drawLine = () => {
//     doc.setDrawColor(200);
//     doc.line(10, y, 200, y);
//     y += 5;
//   };

//   const addSectionTitle = (title: string) => {
//     doc.setFontSize(16);
//     doc.setTextColor(40, 40, 40);
//     doc.setFont('helvetica', 'bold');
//     doc.text(title.toUpperCase(), 10, y);
//     y += 8;
//     drawLine();
//   };

//   const addParagraph = (text: string, fontSize = 11, fontStyle: 'normal' | 'bold' = 'normal') => {
//     doc.setFontSize(fontSize);
//     doc.setTextColor(60, 60, 60);
//     doc.setFont('helvetica', fontStyle);
//     const lines = doc.splitTextToSize(text, 180);
//     doc.text(lines, 10, y);
//     y += lines.length * 6;
//   };

//   const addBulletList = (items: string[]) => {
//     if (!Array.isArray(items)) return;
//     doc.setFontSize(11);
//     doc.setFont('helvetica', 'normal');
//     doc.setTextColor(80, 80, 80);
//     items.forEach((item: string) => {
//       const lines = doc.splitTextToSize(item, 175);
//       doc.text(`• ${lines[0]}`, 14, y);
//       y += 6;
//       lines.slice(1).forEach((line: string) => {
//         doc.text(`  ${line}`, 18, y);
//         y += 6;
//       });
//     });
//     y += 4;
//   };

//   // Preamble / Header
//   doc.setFontSize(22);
//   doc.setTextColor(0, 0, 0);
//   doc.setFont('helvetica', 'bold');
//   doc.text(preamble.name, 10, y);

//   y += 8;
//   addParagraph(preamble.title, 13, 'bold');
//   addParagraph(`${preamble.email} | ${preamble.phone} | ${preamble.location}`, 11);
//   addParagraph(`LinkedIn: ${preamble.linkedin} | Portfolio: ${preamble.portfolio}`, 10);
//   y += 4;
//   addParagraph(preamble.summary);
//   y += 5;

//   // Competencies
//   addSectionTitle('Core Competencies');
//   competencies.groups.forEach((group: string) => {
//     addParagraph(group, 12, 'bold');
//     addBulletList(competencies[group]);
//   });

//   // Experience
//   addSectionTitle('Work Experience');
//   experiences?.forEach((item: any) => {
//     if (item.categories?.includes(activeFilter) || activeFilter === 'all') {
//       addParagraph(`${item.role} at ${item.company}`, 12, 'bold');
//       addParagraph(`${item.period}`, 10);
//       addBulletList(item.highlights);
//     }
//   });

//   // Projects
//   if (showProjects && Array.isArray(projects)) {
//     const filteredProjects = projects.filter(
//       (proj) => proj.categories?.includes(activeFilter) || activeFilter === 'all'
//     );
//     if (filteredProjects.length > 0) {
//       addSectionTitle('Projects');
//       filteredProjects.forEach((proj: any) => {
//         addParagraph(`${proj.name}`, 12, 'bold');
//         addParagraph(proj.description);
//         addBulletList(proj.tech);
//       });
//     }
//   }

//   // Volunteering
//   addSectionTitle('Volunteering');
//   volunteering?.forEach((item: any) => {
//     if (item.categories?.includes(activeFilter) || activeFilter === 'all') {
//       addParagraph(`${item.organization} - ${item.role}`, 12, 'bold');
//       addParagraph(`${item.date}`, 10);
//       addParagraph(item.description);
//     }
//   });

//   // Hobbies
//   addSectionTitle('Hobbies');
//   addBulletList(hobbies);

//   // Save PDF
//   doc.save(`${documentTitle}.pdf`);
// }


// // import jsPDF from 'jspdf';
// // import data from '../../../../data/cv/data.json';

// // type FilterType = 'tech' | 'marketing' | 'all';

// // interface GeneratePDFOptions {
// //   documentTitle: string;
// //   showProjects: boolean;
// //   showMarketing: boolean;
// //   activeFilter: FilterType;
// // }

// // export function generatePDF({
// //   documentTitle,
// //   showProjects,
// //   showMarketing,
// //   activeFilter,
// // }: GeneratePDFOptions) {
// //   const doc = new jsPDF();

// //   const preamble = data.preamble[activeFilter];
// //   const competencies = data.competencies;
// //   const experiences = data.experiences;
// //   const projects = data.projects;
// //   const volunteering = data.volunteering;
// //   const hobbies = data.hobbies;

// //   let y = 10;

// //   const addSectionTitle = (title: string) => {
// //     doc.setFontSize(14);
// //     doc.setFont('Helvetica', 'bold');
// //     doc.text(title, 10, y);
// //     y += 6;
// //   };

// //   const addParagraph = (text: string) => {
// //     doc.setFontSize(11);
// //     doc.setFont('Helvetica', 'normal');
// //     const lines = doc.splitTextToSize(text, 180);
// //     doc.text(lines, 10, y);
// //     y += lines.length * 6;
// //   };

// //   const addBulletList = (items: string[]) => {
// //     if (!Array.isArray(items)) return;
// //     doc.setFontSize(11);
// //     items.forEach((item: string) => {
// //       const lines = doc.splitTextToSize(item, 180);
// //       doc.text(`• ${lines[0]}`, 10, y);
// //       y += 6;
// //       lines.slice(1).forEach((line: string) => {
// //         doc.text(`  ${line}`, 10, y);
// //         y += 6;
// //       });
// //     });
// //   };

// //   // Preamble
// //   addSectionTitle(preamble.name);
// //   addParagraph(`${preamble.title}`);
// //   addParagraph(`${preamble.email} | ${preamble.phone} | ${preamble.location}`);
// //   addParagraph(`LinkedIn: ${preamble.linkedin} | Portfolio: ${preamble.portfolio}`);
// //   addParagraph(preamble.summary);
// //   y += 5;

// //   // Competencies
// //   addSectionTitle('Core Competencies');
// //   competencies.groups.forEach((group: string) => {
// //     addParagraph(group);
// //     addBulletList(competencies[group]);
// //   });

// //   // Experience
// //   addSectionTitle('Work Experience');
// //   experiences?.forEach((item: any) => {
// //     if (item.categories?.includes(activeFilter) || activeFilter === 'all') {
// //       addParagraph(`${item.role} at ${item.company} (${item.period})`);
// //       addBulletList(item.highlights);
// //     }
// //   });

// //   // Projects (if applicable)
// //   if (showProjects && Array.isArray(projects)) {
// //     const filteredProjects = projects.filter(
// //       (proj) => proj.categories?.includes(activeFilter) || activeFilter === 'all'
// //     );
// //     if (filteredProjects.length > 0) {
// //       addSectionTitle('Projects');
// //       filteredProjects.forEach((proj: any) => {
// //         addParagraph(`${proj.name}: ${proj.description}`);
// //         addBulletList(proj.tech);
// //       });
// //     }
// //   }

// //   // Volunteering
// //   addSectionTitle('Volunteering');
// //   volunteering?.forEach((item: any) => {
// //     if (item.categories?.includes(activeFilter) || activeFilter === 'all') {
// //       addParagraph(`${item.organization} - ${item.role} (${item.date})`);
// //       addParagraph(item.description);
// //     }
// //   });

// //   // Hobbies
// //   addSectionTitle('Hobbies');
// //   addBulletList(hobbies);

// //   // Save PDF
// //   doc.save(`${documentTitle}.pdf`);
// // }



// // // // utils/pdfGenerator.ts
// // // import jsPDF from 'jspdf';
// // // import data from '../../../../data/cv/data.json';

// // // type FilterType = 'tech' | 'marketing' | 'all';

// // // interface GeneratePDFOptions {
// // //   documentTitle: string;
// // //   showProjects: boolean;
// // //   showMarketing: boolean;
// // //   activeFilter: FilterType;
// // // }

// // // export function generatePDF({
// // //   documentTitle,
// // //   showProjects,
// // //   showMarketing,
// // //   activeFilter,
// // // }: GeneratePDFOptions) {
// // //   const doc = new jsPDF();

// // //   const preamble = data.preamble[activeFilter];
// // //   const competencies = data.competencies;
// // //   const experience = data.experiences;
// // //   const projects = data.projects;
// // //   const marketingProjects = 'marketingProjects' in data ? data.marketingProjects : [];
// // //   const volunteering = data.volunteering;
// // //   const hobbies = data.hobbies;

// // //   let y = 10;

// // //   const addSectionTitle = (title: string) => {
// // //     doc.setFontSize(14);
// // //     doc.setFont('Helvetica', 'bold');
// // //     doc.text(title, 10, y);
// // //     y += 6;
// // //   };

// // //   const addParagraph = (text: string) => {
// // //     doc.setFontSize(11);
// // //     doc.setFont('Helvetica', 'normal');
// // //     const lines = doc.splitTextToSize(text, 180);
// // //     doc.text(lines, 10, y);
// // //     y += lines.length * 6;
// // //   };

// // //   const addBulletList = (items: string[] | any) => {
// // //     if (!Array.isArray(items)) return; // Ensure it's an array
// // //     doc.setFontSize(11);
// // //     items.forEach((item: string) => {
// // //       const lines = doc.splitTextToSize(item, 180);
// // //       doc.text(`• ${lines[0]}`, 10, y);
// // //       y += 6;
// // //       lines.slice(1).forEach((line: any) => {
// // //         doc.text(`  ${line}`, 10, y);
// // //         y += 6;
// // //       });
// // //     });
// // //   };

// // //   // Preamble
// // //   addSectionTitle(preamble.name);
// // //   addParagraph(`${preamble.title}`);
// // //   addParagraph(`${preamble.email} | ${preamble.phone} | ${preamble.location}`);
// // //   addParagraph(`LinkedIn: ${preamble.linkedin} | Portfolio: ${preamble.portfolio}`);
// // //   addParagraph(preamble.summary);
// // //   y += 5;

// // //   // Competencies
// // //   addSectionTitle('Core Competencies');
// // //   addBulletList(competencies);

// // //   // Experience
// // //   addSectionTitle('Work Experience');
// // //   experience?.forEach((item: any) => {
// // //     addParagraph(`${item.role} at ${item.company} (${item.duration})`);
// // //     addBulletList(item.responsibilities);
// // //   });

// // //   // Projects (if applicable)
// // //   if (showProjects && Array.isArray(projects)) {
// // //     addSectionTitle('Projects');
// // //     projects.forEach((proj: any) => {
// // //       addParagraph(`${proj.name}: ${proj.description}`);
// // //     });
// // //   }

// // //   // Marketing Projects (if applicable)
// // //   if (showMarketing && Array.isArray(marketingProjects)) {
// // //     addSectionTitle('Marketing Highlights');
// // //     marketingProjects.forEach((proj: any) => {
// // //       addParagraph(`${proj.name}: ${proj.description}`);
// // //     });
// // //   }

// // //   // Volunteering
// // //   addSectionTitle('Volunteering');
// // //   volunteering?.forEach((item: any) => {
// // //     addParagraph(`${item.organization} - ${item.role} (${item.years})`);
// // //     addBulletList(item.responsibilities);
// // //   });

// // //   // Hobbies
// // //   addSectionTitle('Hobbies');
// // //   addBulletList(hobbies);

// // //   // Save PDF
// // //   doc.save(`${documentTitle}.pdf`);
// // // }

