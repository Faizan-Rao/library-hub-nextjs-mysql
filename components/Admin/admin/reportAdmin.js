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
import DeleteAdmin from "./deleteAdmin";
import { useGetAdminsQuery } from "@/features/AdminApi/adminApiSlice";


const ReportAdmin = () => {
  const {data:User} = useGetAdminsQuery();
  const MultipleDisclosure = () => {
    const Disclosure2 = useDisclosure();
    return [ Disclosure2];
  };
  const [
    { isOpen: isOpen2, onOpen: onOpen2, onClose: onClose2 },
  ] = MultipleDisclosure();

  const [CurrentUser, setCurrentUser] = useState({});
  return (
    <>
      <TableContainer>
        <Table variant="simple" id={"PrintTable"}>
          <TableCaption>All Available Users</TableCaption>
          <Thead>
            <Tr>
              <Th>Admin#</Th>
              <Th>Admin-Name</Th>
              <Th>Admin-Email</Th>
              <Th>Admin-Role</Th>
              <Th>Admin-University</Th>
            </Tr>
          </Thead>
          <Tbody>
            {User?.data?.map((e, i) => {
              return (
                <Tr key={e.idAdmin}>
                  <Td>{i + 1}</Td>
                  <Td>{e.adminName}</Td>
                  <Td>{e.adminEmail}</Td>
                  <Td>{e.adminRole}</Td>
                  <Td>{e.universityName}</Td>
                  <Td>
                    <div className="ml-auto">
                      
                      <button
                        className=" cursor-pointer py-2 px-3 text-gray-100   bg-[#456fca] rounded text-sm mr-2"
                        onClick={onOpen2}
                        onClickCapture={() => setCurrentUser(e)}
                      >
                        delete
                      </button>
                    </div>
                  </Td>
                
          
                </Tr>
              )})}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>Admin#</Th>
              <Th>Admin-Name</Th>
              <Th>Admin-Email</Th>
              <Th>Admin-Role</Th>
              <Th>Admin-University</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
      <Modal isOpen={isOpen2} onClose={onClose2}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <DeleteAdmin
              currentUser={CurrentUser}
              onClose={onClose2}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
      <button className="cursor-pointer py-2 px-3 text-gray-100   bg-[#456fca] rounded text-sm"
           onClick={()=>{
            window.print(document.getElementById("PrintTable"))
           }} >Generate report</button>
    </>
  );
};

export default ReportAdmin;
