import React, { useState } from "react";
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

import UpdateUniversity from "./updateUniveristy";
import DeleteUniversity from "./deleteUniversity";

import { useGetUniversityQuery } from "@/features/AdminApi/adminApiSlice";

const ReportUniversity = () => {
  
  const { data: University } = useGetUniversityQuery();
  const MultipleDisclosure = () => {
    const Disclosure1 = useDisclosure();
    const Disclosure2 = useDisclosure();
    return [Disclosure1, Disclosure2];
  };
  const [
    { isOpen: isOpen1, onOpen: onOpen1, onClose: onClose1 },
    { isOpen: isOpen2, onOpen: onOpen2, onClose: onClose2 },
  ] = MultipleDisclosure();

  const [CurrentUniversity, setCurrentUniversity] = useState({});
  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>All Available Universities</TableCaption>
          <Thead>
            <Tr>
              <Th>Uni#</Th>
              <Th>University-Name</Th>
            </Tr>
          </Thead>
          <Tbody>
            {University?.data?.map((e, i) => {
              return (
                <Tr key={e.idUniversity}>
                  <Td>{i + 1}</Td>
                  <Td>{e.universityName}</Td>
                  <Td>
                    <div className="ml-auto">
                      <button
                        className=" cursor-pointer py-2 px-3 text-gray-100   bg-[#456fca] rounded text-sm mr-2"
                        onClick={onOpen1}
                        onClickCapture={() => setCurrentUniversity(e)}
                      >
                        Update
                      </button>
                      <button
                        className=" cursor-pointer py-2 px-3   rounded text-sm"
                        onClick={onOpen2}
                        onClickCapture={() => setCurrentUniversity(e)}
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
              <Th>Uni#</Th>
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
            <UpdateUniversity
              currentUniversity={CurrentUniversity}
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
            <DeleteUniversity
              currentUniversity={CurrentUniversity}
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

export default ReportUniversity;
