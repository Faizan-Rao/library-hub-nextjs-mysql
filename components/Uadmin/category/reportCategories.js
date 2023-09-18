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
import { useGetBookQuery, useGetCategoryQuery } from "@/features/UadminApi/uadminSliceApi";
import DeleteCategory from "./deleteCategory";
import UpdateCategory from "./updateCategory";





const ReportCategory = () => {
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
  const { data: Category} = useGetCategoryQuery(Uadmin.idUniversity);

  const MultipleDisclosure = () => {
    const Disclosure1 = useDisclosure();
    const Disclosure2 = useDisclosure();
    return [Disclosure1, Disclosure2];
  };
  const [
    { isOpen: isOpen1, onOpen: onOpen1, onClose: onClose1 },
    { isOpen: isOpen2, onOpen: onOpen2, onClose: onClose2 },
  ] = MultipleDisclosure();

    
  const [CurrentCategory, setCurrentCategory] = useState({});
  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>All Available Universities</TableCaption>
          <Thead>
            <Tr>
              <Th>Book#</Th>
              <Th>Category-Title</Th>
              
            </Tr>
          </Thead>
          <Tbody>
            {Category?.data?.map((e, i) => {
              return (
                <Tr key={e.idBooks}>
                  <Td>{i + 1}</Td>
                  <Td>{e.categoryTitle}</Td>
                  
                  <Td>
                    <div className="ml-auto">
                      <button
                        className=" cursor-pointer py-2 px-3 text-gray-100   bg-[#456fca] rounded text-sm mr-2"
                        onClick={onOpen1}
                        onClickCapture={() => setCurrentCategory(e)}
                      >
                        Update
                      </button>
                      <button
                        className=" cursor-pointer py-2 px-3   rounded text-sm"
                        onClick={onOpen2}
                        onClickCapture={() => setCurrentCategory(e)}
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
              <Th>Category-Title</Th>
              
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
            <UpdateCategory
               CurrentCategory={CurrentCategory}
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
            <DeleteCategory
              CurrentCategory={CurrentCategory}
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

export default ReportCategory;
