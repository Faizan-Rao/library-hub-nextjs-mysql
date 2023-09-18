import PDFViewer from "@/components/User/pdf-viewer";
import { useRouter } from "next/router";


const ViewBook = () => {
  const file = useRouter().query.book;

  

  return (
    <PDFViewer filePath={file}/>
  );
};

export default ViewBook;
