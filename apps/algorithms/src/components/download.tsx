"use client";
import { ArrowDownToLine } from "lucide-react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

interface PropsDownload {
  id: string;
}

export function Download({ id }: PropsDownload) {
  const downloadPDF = async () => {
    const element = document.getElementById(id); // Acessa o elemento pelo id
    if (element) {
      try {
        // Usa html2canvas para capturar o elemento como uma imagem
        const canvas = await html2canvas(element, { scrollX: 0, scrollY: 0 });
        const imgData = canvas.toDataURL("image/png");

        // Define o tamanho e formato padrão do PDF (A4)
        const pdf = new jsPDF({
          orientation: "portrait", // ou 'landscape' para paisagem
          unit: "mm", // unidade em milímetros
          format: "a4", // formato A4 padrão
        });

        // Calcula as dimensões da página A4 em pixels
        const a4WidthPx = 210 * 3.7795275591; // A4 width in pixels (210mm * 3.7795275591)
        const a4HeightPx = 297 * 3.7795275591; // A4 height in pixels (297mm * 3.7795275591)

        // Define a altura e largura da imagem no PDF
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;

        // Define a escala para ajustar a imagem no PDF
        const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
        const newImgWidth = imgWidth * ratio;
        const newImgHeight = imgHeight * ratio;

        // Adiciona a imagem ao PDF
        pdf.addImage(imgData, "PNG", 0, 0, newImgWidth, newImgHeight);

        // Faz o download do PDF com o nome do id
        pdf.save(`${id}.pdf`);
      } catch (error) {
        alert(`Erro ao gerar o PDF: ${error}`);
      }
    } else {
      alert("Elemento não encontrado.");
    }
  };

  return (
    <button
      onClick={downloadPDF}
      className="w-7 h-7 px-1 text-gray-600 bg-algorithms-color/20 hover:bg-algorithms-color/45 rounded-r-md"
    >
      <ArrowDownToLine size={20} />
    </button>
  );
}
