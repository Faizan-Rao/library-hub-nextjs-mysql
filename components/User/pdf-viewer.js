import { useState, useEffect } from "react";
// import default react-pdf entry
import { Document, Page, pdfjs } from "react-pdf";
// import pdf worker as a url, see `next.config.js` and `pdf-worker.js`
import workerSrc from "@/pdf-worker";


pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

export default function PDFViewer({ filePath }) {
  const [file, setFile] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [zoom, setZoom] = useState(1000);

  

  useEffect(() => {
    fetch(`/api/file-reader?file=${filePath}`).then((response)=>(response.json())).then((data)=> setFile(data))
    
  }, []);

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
    console.log(file)
  }
  const handleZoomIn = () => {
    if (zoom < 1500) return setZoom((prev) => prev + 100);
    else return setZoom(1500);
  };
  const handleZoomOut = () => {
    if (zoom > 400) return setZoom((prev) => prev - 100);
    else return setZoom(400);
  };
  return (
    <div>
      <div className="flex justify-center items-center bg-slate-100">
        <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
          {Array.from({ length: numPages }, (_, index) => (
            <Page
              className="mb-4 shadow-lg p-20"
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              width={zoom}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              imageResourcesPath={`./books/${filePath}`}
            />
          ))}
          <div className="fixed bottom-5 right-5  ">
            <div className="flex gap-8 justify-center items-center bg-gray-300 rounded-full">
              <button
                className="bg-gray-500 text-white px-2 text-xl rounded-lg aspect-square font-bold"
                onClick={handleZoomOut}
              >
                -
              </button>
              <span className="text-md">Zoom: {zoom / 100}x</span>
              <button
                className="bg-gray-500 text-white px-1  text-xl aspect-square rounded-lg"
                onClick={handleZoomIn}
              >
                +
              </button>
            </div>
          </div>
        </Document>
      </div>
    </div>
  );
}
