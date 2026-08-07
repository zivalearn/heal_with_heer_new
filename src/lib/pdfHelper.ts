import { jsPDF } from 'jspdf';

interface PDFSection {
  title: string;
  items?: string[];
  text?: string;
}

export function generatePDF(
  fileName: string,
  title: string,
  subtitle: string,
  intro: string,
  sections: PDFSection[],
  footerText: string = "Heal With Heer Sanctuary — Inner Alignment Modalities"
) {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });
  
  const pageHeight = doc.internal.pageSize.height || 297;
  const pageWidth = doc.internal.pageSize.width || 210;
  const marginX = 20;
  let y = 30;

  // Header and Footer drawer
  const drawHeaderFooter = (pageNum: number) => {
    // Top elegant border line
    doc.setDrawColor(192, 148, 44); // Gold (#c0942c)
    doc.setLineWidth(0.4);
    doc.line(marginX, 16, pageWidth - marginX, 16);

    // Header text
    doc.setFont('Helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(115, 115, 115);
    doc.text("HEAL WITH HEER SANCTUARY", marginX, 12);
    
    // Bottom border line
    doc.setDrawColor(220, 220, 220);
    doc.line(marginX, pageHeight - 16, pageWidth - marginX, pageHeight - 16);

    // Footer text
    doc.text(footerText, marginX, pageHeight - 11);
    doc.text(`Page ${pageNum}`, pageWidth - marginX - 12, pageHeight - 11);
  };

  let pageNum = 1;
  drawHeaderFooter(pageNum);

  // Check and break pages automatically
  const checkPageBreak = (neededHeight: number) => {
    if (y + neededHeight > pageHeight - 20) {
      doc.addPage();
      pageNum++;
      drawHeaderFooter(pageNum);
      y = 30; // Reset to top
    }
  };

  // 1. Title
  doc.setFont('Helvetica', 'bold');
  doc.setFontSize(18);
  doc.setTextColor(19, 17, 44); // Deep Ocean
  const splitTitle = doc.splitTextToSize(title, pageWidth - 2 * marginX);
  doc.text(splitTitle, marginX, y);
  y += (splitTitle.length * 8) + 4;

  // 2. Subtitle
  if (subtitle) {
    doc.setFont('Helvetica', 'italic');
    doc.setFontSize(11);
    doc.setTextColor(192, 148, 44); // Gold
    const splitSub = doc.splitTextToSize(subtitle, pageWidth - 2 * marginX);
    doc.text(splitSub, marginX, y);
    y += (splitSub.length * 6) + 8;
  }

  // 3. Intro Text
  if (intro) {
    const splitIntro = doc.splitTextToSize(intro, pageWidth - 2 * marginX);
    checkPageBreak(splitIntro.length * 5.5 + 6);
    doc.setFont('Helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(60, 60, 60);
    doc.text(splitIntro, marginX, y);
    y += (splitIntro.length * 5.5) + 10;
  }

  // 4. Content Sections
  sections.forEach((section) => {
    // Check height for section header
    checkPageBreak(15);
    
    // Section Header
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(12);
    doc.setTextColor(19, 17, 44); // Deep Ocean
    doc.text(section.title, marginX, y);
    y += 7;

    // Plain text block
    if (section.text) {
      const splitText = doc.splitTextToSize(section.text, pageWidth - 2 * marginX);
      const needed = (splitText.length * 5.5) + 6;
      checkPageBreak(needed);
      
      doc.setFont('Helvetica', 'normal');
      doc.setFontSize(10);
      doc.setTextColor(60, 60, 60);
      doc.text(splitText, marginX, y);
      y += (splitText.length * 5.5) + 6;
    }

    // Bullet points list
    if (section.items && section.items.length > 0) {
      doc.setFont('Helvetica', 'normal');
      doc.setFontSize(10);
      doc.setTextColor(60, 60, 60);

      section.items.forEach((item) => {
        const bulletText = `•  ${item}`;
        const splitBullet = doc.splitTextToSize(bulletText, pageWidth - 2 * marginX - 6);
        const needed = (splitBullet.length * 5.5) + 2.5;
        
        checkPageBreak(needed);
        doc.text(splitBullet, marginX + 4, y);
        y += (splitBullet.length * 5.5) + 2.5;
      });
      y += 5; // Extra spacing after list
    }
  });

  doc.save(fileName);
}
