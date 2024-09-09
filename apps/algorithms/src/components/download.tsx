"use client"
import { ArrowDownToLine } from "lucide-react";
import { toPng } from 'html-to-image';

interface PropsDownload {
  id: string,

}


export function Download({ id }: PropsDownload) {
  const download = async () => {
    const svgElement = document.getElementById(id); // Usando o id para acessar o SVG
    if (svgElement) {
      try {
        const dataUrl = await toPng(svgElement);
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = `${id}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (error) {
        alert(`Erro ao fazer o download: ${error}`);
      }
    }
  };
  return (
    <button
      onClick={download}
      className="w-7 h-7 px-1 text-gray-600 bg-algorithms-color/20 hover:bg-algorithms-color/45 rounded-r-md"
    >
      <ArrowDownToLine size={20} />
    </button>
  );
}
