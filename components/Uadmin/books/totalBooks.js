import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Tfoot,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useGetBookQuery } from "@/features/UadminApi/uadminSliceApi";
import DeleteBook from "./deleteBook";
import UpdateBook from "./updateBook";




const ReportBooks = () => {
    const [Uadmin, setUadmin] = useState({})

    useEffect(() => {
      setTimeout(() => {
        let adminData = localStorage.getItem("UadminData");
        if (adminData){
          setUadmin(JSON.parse(localStorage.getItem("UadminData")))
        }
        else {
          localStorage.removeItem("UadminData");
          location.replace("/");
        }
      }, 400);
    }, []);
  const { data: Books} = useGetBookQuery(Uadmin.idUniversity);

  const MultipleDisclosure = () => {
    const Disclosure1 = useDisclosure();
    const Disclosure2 = useDisclosure();
    return [Disclosure1, Disclosure2];
  };
  const [
    { isOpen: isOpen1, onOpen: onOpen1, onClose: onClose1 },
    { isOpen: isOpen2, onOpen: onOpen2, onClose: onClose2 },
  ] = MultipleDisclosure();

    
  const [CurrentBook, setCurrentBook] = useState({});
  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>All Available Books</TableCaption>
          <Thead>
            <Tr>
              <Th>Book#</Th>
              <Th>Book-Title</Th>
              <Th>Book-Description</Th>
              <Th>Book-Publisher</Th>
              <Th>Book-Version</Th>
              
              <Th>University-Name</Th>
            </Tr>
          </Thead>
          <Tbody>
            {Books?.data?.map((e, i) => {
              return (
                <Tr key={e.idBooks}>
                  <Td>{i + 1}</Td>
                  <Td>{e.bookTitle}</Td>
                  <Td>{e.bookDescription}</Td>
                  <Td>{e.bookPublisher}</Td>
                  <Td>{e.bookVersion}</Td>
                 
                  <Td>{e.universityName}</Td>
                  <Td>
                    <div className="ml-auto">
                      <button
                        className=" cursor-pointer py-2 px-3 text-gray-100   bg-[#456fca] rounded text-sm mr-2"
                        onClick={onOpen1}
                        onClickCapture={() => setCurrentBook(e)}
                      >
                        Update
                      </button>
                      <button
                        className=" cursor-pointer py-2 px-3   rounded text-sm"
                        onClick={onOpen2}
                        onClickCapture={() => setCurrentBook(e)}
                      >
                        delete
                      </button>
                    </div>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>Book#</Th>
              <Th>Book-Title</Th>
              <Th>Book-Description</Th>
              <Th>Book-Publisher</Th>
              <Th>Book-Version</Th>
              
              <Th>University-Name</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
      {/* Modal For Update University */}
      <Modal isOpen={isOpen1} onClose={onClose1}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <UpdateBook
               CurrentBook={CurrentBook}
              onClose={onClose1}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
      {/* Modal For Delete University */}
      <Modal isOpen={isOpen2} onClose={onClose2}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <DeleteBook
              CurrentBook={CurrentBook}
              onClose={onClose2}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
      <button
        className="cursor-pointer py-2 px-3 text-gray-100   bg-[#456fca] rounded text-sm"
        onClick={() => {
          window.print();
        }}
      >
        Generate report
      </button>
    </>
  );
};

export default ReportBooks;
