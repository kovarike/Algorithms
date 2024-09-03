// "use client"
// import React from 'react';
// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';
// import { ArrowDownToLine } from "lucide-react";


import { ArrowDownToLine } from "lucide-react";

// export function Download() {
//     const downloadPDF = async () => {
//         const content = document.getElementById('pdf');
//         console.log(content)

//         if (content) {
//             const canvas = await html2canvas(content, {
//                 scale: 3,
//                 useCORS: true,
//                 allowTaint: true,
//                 logging: true,
//                 scrollY: -window.scrollY,
//             });

//             const imgData = canvas.toDataURL('image/png');
//             const pdf = new jsPDF({
//                 orientation: 'portrait',
//                 unit: 'mm',
//                 format: 'a4',
//                 putOnlyUsedFonts: true
//             });

//             const imgWidth = 210;
//             const pageHeight = 279;
//             const imgHeight = canvas.height * imgWidth / canvas.width;
//             let heightLeft = imgHeight;
//             let position = 0;

//             pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
//             heightLeft -= pageHeight;

//             while (heightLeft > 0) {
//                 position = heightLeft - imgHeight;
//                 pdf.addPage();
//                 pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
//                 heightLeft -= pageHeight;

//             }

//             pdf.setFontSize(12);
//             pdf.text('Texto adicional no PDF', 10, 10);

//             pdf.save('danilo.pdf');
//         }
//     };

//     return (
//         <>

//             <button
//                 type='button'
//                 onClick={downloadPDF}
//                 className="w-7 h-7 px-1 text-gray-600 bg-algorithms-color/20 hover:bg-algorithms-color/45 rounded-r-md"
//             >
//                 <ArrowDownToLine size={20} />
//             </button>
//         </>
//     );
// }

export function Download() {
  return (
    <button
      // href="http://localhost:3000/profile"
      // download

      className="w-7 h-7 px-1 text-gray-600 bg-algorithms-color/20 hover:bg-algorithms-color/45 rounded-r-md"
    >
      <ArrowDownToLine size={20} />
    </button>
  );
}
