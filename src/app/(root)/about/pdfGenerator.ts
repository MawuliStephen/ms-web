// // utils/pdfGenerator.ts
// import jsPDF from 'jspdf';
// // import { CompetenciesType } from '../../../data/cv/type'; // Ensure this path is correct
// // import data from '../../../data/cv/data.json';

// export const generateCVPDF = (
//     data: any, // You should define a proper type for your data
//     selectedGroups: (keyof CompetenciesType)[],
//     showProjects: boolean,
//     showMarketing: boolean,
//     documentTitle: string,
//     forPreview: boolean = false
// ): string => {
//     const { preamble, competencies, projects, volunteering, hobbies, experiences } = data;
//     const { name, title, email, phone, location, linkedin, portfolio } = preamble;

//     const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
//     let y = 20;
//     const leftMargin = 20;
//     const rightMargin = 20;
//     const pageWidth = 210;
//     const contentWidth = pageWidth - leftMargin - rightMargin;

//     // Modern color scheme
//     const primaryColor = [44, 62, 80]; // Dark blue
//     const secondaryColor = [52, 152, 219]; // Light blue
//     const accentColor = [231, 76, 60]; // Red
//     const textColor = [44, 62, 80]; // Dark text
//     const lightTextColor = [149, 165, 166]; // Gray text

//     // Set default font
//     doc.setFont('Helvetica');

//     // Add subtle background pattern
//     doc.setFillColor(248, 249, 250);
//     doc.rect(0, 0, pageWidth, 297, 'F');
//     doc.setDrawColor(230, 230, 230);
//     for (let i = 0; i < 300; i += 15) {
//         doc.line(0, i, pageWidth, i);
//     }

//     // Header with colored bar
//     doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
//     doc.rect(0, 0, pageWidth, 12, 'F');

//     // Name and Title
//     doc.setTextColor(255, 255, 255);
//     doc.setFontSize(24);
//     doc.setFont('Helvetica', 'bold');
//     doc.text(name, leftMargin, y);
//     y += 10;


//     // Add subtle background pattern
//     doc.setFillColor(248, 249, 250);
//     doc.rect(0, 0, pageWidth, 297, 'F');
//     doc.setDrawColor(230, 230, 230);
//     for (let i = 0; i < 300; i += 15) {
//         doc.line(0, i, pageWidth, i);
//     }

//     // Header with colored bar
//     doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
//     doc.rect(0, 0, pageWidth, 12, 'F');

//     // Name and Title
//     doc.setTextColor(255, 255, 255);
//     doc.setFontSize(24);
//     doc.setFont('Helvetica', 'bold');
//     doc.text(name, leftMargin, y);
//     y += 10;

//     doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
//     doc.setFontSize(14);
//     doc.setFont('Helvetica', 'normal');
//     doc.text(title, leftMargin, y);
//     y += 8;

//     // Contact Information in a row
//     const contactInfo = [
//         { icon: '✉️', text: email },
//         { icon: '📱', text: phone },
//         { icon: '📍', text: location },
//         ...(linkedin ? [{ icon: '🔗', text: `linkedin.com/in/${linkedin}` }] : []),
//         ...(portfolio ? [{ icon: '🌐', text: portfolio }] : [])
//     ];

//     doc.setFontSize(10);
//     doc.setTextColor(lightTextColor[0], lightTextColor[1], lightTextColor[2]);

//     let contactX = leftMargin;
//     const contactY = y;
//     const contactSpacing = 5;

//     contactInfo.forEach((info, index) => {
//         const textWidth = doc.getTextWidth(info.icon + ' ' + info.text);
//         if (contactX + textWidth > pageWidth - rightMargin && index > 0) {
//             contactX = leftMargin;
//             y += 5;
//         }
//         doc.text(info.icon + ' ' + info.text, contactX, y);
//         contactX += textWidth + contactSpacing;
//     });
//     y += 10;

//     // Divider line
//     doc.setDrawColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
//     doc.setLineWidth(0.5);
//     doc.line(leftMargin, y, pageWidth - rightMargin, y);
//     y += 10;

//     // Core Competencies Header with Simple Underline
//     doc.setTextColor(textColor[0], textColor[1], textColor[2]);
//     doc.setFontSize(16);
//     doc.setFont('Helvetica', 'bold');

//     // Draw the heading text
//     const competenciesText = 'CORE COMPETENCIES';
//     doc.text(competenciesText, leftMargin, y);

//     // Add simple horizontal line underneath
//     y += 4; // Space between text and line
//     doc.setDrawColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
//     doc.setLineWidth(0.5); // Medium weight line
//     doc.line(leftMargin, y, pageWidth - rightMargin, y); // Full-width line

//     y += 8; // Space after the line


//     // Competency bubbles
//     doc.setFontSize(10);
//     doc.setFont('Helvetica', 'normal');
//     let xPos = leftMargin;
//     const bubbleHeight = 6;
//     const bubblePadding = 5;
//     const verticalSpacing = 8;

//     selectedGroups.forEach((group: keyof CompetenciesType) => {
//         const items = competencies[group];
//         if (items) {
//             items.forEach(item => {
//                 const textWidth = doc.getTextWidth(item) + bubblePadding * 2;

//                 if (xPos + textWidth > pageWidth - rightMargin) {
//                     xPos = leftMargin;
//                     y += verticalSpacing;
//                 }

//                 // Check if we need a new page
//                 if (y > 280) {
//                     doc.addPage();
//                     y = 20;
//                     xPos = leftMargin;
//                 }

//                 // Draw bubble
//                 doc.setFillColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
//                 doc.roundedRect(
//                     xPos,
//                     y - bubbleHeight + 2,
//                     textWidth,
//                     bubbleHeight,
//                     2, 2, 'F'
//                 );
//                 doc.setTextColor(255, 255, 255);
//                 doc.text(item, xPos + bubblePadding, y);

//                 xPos += textWidth + 5;
//             });
//             y += verticalSpacing;
//             xPos = leftMargin;
//         }
//     });
//     y += 10;

//     // Work Experience
//     doc.setTextColor(textColor[0], textColor[1], textColor[2]);
//     doc.setFontSize(16);
//     doc.setFont('Helvetica', 'bold');
//     doc.text('WORK EXPERIENCE', leftMargin, y);
//     y += 10;

//     doc.setFontSize(11);
//     experiences.forEach((job: any) => {
//     if (y > 270) {
//         doc.addPage();
//         y = 20;
//     }

//     // Company and period
//     doc.setFont('Helvetica', 'bold');
//     doc.setTextColor(textColor[0], textColor[1], textColor[2]);
//     doc.text(job.company, leftMargin, y);

//     doc.setFont('Helvetica', 'normal');
//     doc.setTextColor(lightTextColor[0], lightTextColor[1], lightTextColor[2]);
//     doc.text(job.period, pageWidth - rightMargin, y, { align: 'right' });
//     y += 5;

//     // Role
//     if (job.role) {
//         doc.setFont('Helvetica', 'bold');
//         doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
//         doc.text(job.role, leftMargin, y);
//         y += 5;
//     }

//     // Details / highlights
//     job.details?.forEach((point: string) => {
//         const lines = doc.splitTextToSize(`- ${point}`, contentWidth);
//         lines.forEach((line: string) => {
//             if (y > 270) {
//                 doc.addPage();
//                 y = 20;
//             }
//             doc.setFont('Helvetica', 'normal');
//             doc.setTextColor(textColor[0], textColor[1], textColor[2]);
//             doc.text(line, leftMargin + 5, y);
//             y += 4;
//         });
//     });

//     y += 6;
// });


//     // experiences.forEach((job: any) => {
//     //     if (y > 270) {
//     //         doc.addPage();
//     //         y = 20;
//     //     }

//     //     // Company and period
//     //     doc.setFont('Helvetica', 'bold');
//     //     doc.setTextColor(textColor[0], textColor[1], textColor[2]);
//     //     doc.text(job.company, leftMargin, y);

//     //     doc.setFont('Helvetica', 'normal');
//     //     doc.setTextColor(lightTextColor[0], lightTextColor[1], lightTextColor[2]);
//     //     doc.text(job.period, pageWidth - rightMargin, y, { align: 'right' });
//     //     y += 5;

//     //     // Role
//     //     doc.setFont('Helvetica', 'bold');
//     //     doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
//     //     doc.text(job.role, leftMargin, y);
//     //     y += 6;

//     //     // Highlights
//     //     doc.setFont('Helvetica', 'normal');
//     //     doc.setTextColor(textColor[0], textColor[1], textColor[2]);
//     //     job.highlights.forEach((line: string) => {
//     //         if (y > 280) {
//     //             doc.addPage();
//     //             y = 20;
//     //         }
//     //         // Bullet point with proper text wrapping
//     //         const splitText = doc.splitTextToSize(`• ${line}`, contentWidth - 10);
//     //         splitText.forEach((textLine: string, i: number) => {
//     //             doc.text(textLine, leftMargin + 5, y + (i * 5));
//     //         });
//     //         y += splitText.length * 5 + 2;
//     //     });
//     //     y += 6;
//     // });




//     // Projects
//     if (showProjects && projects.length > 0) {
//         doc.setTextColor(textColor[0], textColor[1], textColor[2]);
//         doc.setFontSize(16);
//         doc.setFont('Helvetica', 'bold');
//         doc.text('PROJECTS', leftMargin, y);
//         y += 10;

//         doc.setFontSize(11);
//         projects.forEach((proj: any) => {
//             if (y > 270) {
//                 doc.addPage();
//                 y = 20;
//             }

//             // Project name
//             doc.setFont('Helvetica', 'bold');
//             doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
//             doc.text(proj.name, leftMargin, y);
//             y += 5;

//             // Description with text wrapping
//             doc.setFont('Helvetica', 'normal');
//             doc.setTextColor(textColor[0], textColor[1], textColor[2]);
//             const splitDesc = doc.splitTextToSize(proj.description, contentWidth);
//             splitDesc.forEach((line: string) => {
//                 if (y > 280) {
//                     doc.addPage();
//                     y = 20;
//                 }
//                 doc.text(line, leftMargin, y);
//                 y += 5;
//             });
//             y += 5;
//         });
//     }

//     // Volunteering
//     if (volunteering.length > 0) {
//         doc.setTextColor(textColor[0], textColor[1], textColor[2]);
//         doc.setFontSize(16);
//         doc.setFont('Helvetica', 'bold');
//         doc.text('VOLUNTEERING', leftMargin, y);
//         y += 10;

//         doc.setFontSize(11);
//         volunteering.forEach((vol: any) => {
//             if (y > 270) {
//                 doc.addPage();
//                 y = 20;
//             }

//             // Organization and date
//             doc.setFont('Helvetica', 'bold');
//             doc.text(vol.organization, leftMargin, y);
//             doc.setFont('Helvetica', 'normal');
//             doc.text(vol.date, pageWidth - rightMargin, y, { align: 'right' });
//             y += 5;

//             // Role
//             doc.setFont('Helvetica', 'bold');
//             doc.setTextColor(secondaryColor[0], secondaryColor[1], secondaryColor[2]);
//             doc.text(vol.role, leftMargin, y);
//             y += 5;

//             // Description
//             doc.setFont('Helvetica', 'normal');
//             doc.setTextColor(textColor[0], textColor[1], textColor[2]);
//             const splitDesc = doc.splitTextToSize(vol.description, contentWidth);
//             splitDesc.forEach((line: string) => {
//                 if (y > 280) {
//                     doc.addPage();
//                     y = 20;
//                 }
//                 doc.text(line, leftMargin, y);
//                 y += 5;
//             });
//             y += 5;
//         });
//     }

//     // Hobbies
//     if (hobbies.length > 0) {
//         doc.setTextColor(textColor[0], textColor[1], textColor[2]);
//         doc.setFontSize(16);
//         doc.setFont('Helvetica', 'bold');
//         doc.text('HOBBIES & INTERESTS', leftMargin, y);
//         y += 10;

//         doc.setFontSize(11);
//         doc.setFont('Helvetica', 'normal');

//         // Display hobbies in a row with icons
//         const hobbyIcons = ['🎨', '🎵', '📚', '⚽', '✈️', '🎮', '🍳', '📷'];
//         let hobbyX = leftMargin;
//         const hobbyY = y;

//         hobbies.forEach((hobby: string, index: number) => {
//             const icon = hobbyIcons[index % hobbyIcons.length];
//             const text = `${icon} ${hobby}`;
//             const textWidth = doc.getTextWidth(text);

//             if (hobbyX + textWidth > pageWidth - rightMargin) {
//                 hobbyX = leftMargin;
//                 y += 8;
//             }

//             if (y > 280) {
//                 doc.addPage();
//                 y = 20;
//                 hobbyX = leftMargin;
//             }

//             doc.text(text, hobbyX, y);
//             hobbyX += textWidth + 10;
//         });
//         y += 10;
//     }

//     // Footer
//     doc.setFontSize(8);
//     doc.setTextColor(lightTextColor[0], lightTextColor[1], lightTextColor[2]);
//     doc.text('Generated with jsPDF', pageWidth / 2, 290, { align: 'center' });

//     if (forPreview) {
//         return doc.output('datauristring');
//     } else {
//         doc.save(`${documentTitle}.pdf`);
//         return '';
//     }
// };
