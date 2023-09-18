import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
const SideNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <button
        className="m-4 p-2 border-2 rounded"
        colorScheme="teal"
        onClick={onOpen}
      >
        <RxHamburgerMenu className="text-3xl  text-black " />
      </button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} size={"md"}>
        <DrawerOverlay />
        <DrawerContent bg={"gray.200"}>
          <DrawerCloseButton />
          <DrawerHeader textColor={"#6E85B7"}>ADMIN PANEL</DrawerHeader>

          <DrawerBody textColor={"#6E85B7"}>
            <div className=" flex justify-center items-center min-h-[50%]">
              <ul className="flex justify-between  gap-8 flex-col">
                <li>
                  <Link
                    href={"/admin/admin_panel"}
                    className={
                      "hover:bg-[#6E85B7] hover:text-white p-3 transition-all rounded m-auto"
                    }
                    onClick={onClose}
                  >
                    Overview
                  </Link>
                </li>

                <li>
                  <Link
                    href={"/admin/university_panel"}
                    className={
                      "hover:bg-[#6E85B7] hover:text-white p-3 transition-all rounded m-auto"
                    }
                    onClick={onClose}
                  >
                    {" "}
                    University{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#"}
                    className={
                      "hover:bg-[#6E85B7] hover:text-white p-3 transition-all rounded m-auto"
                    }
                    onClick={onClose}
                  >
                    Users
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/admin/manageAdmin_panel"}
                    className={
                      "hover:bg-[#6E85B7] hover:text-white p-3 transition-all rounded m-auto"
                    }
                    onClick={onClose}
                  >
                    {" "}
                    Admin
                  </Link>
                </li>
              </ul>
            </div>
          </DrawerBody>
          <DrawerFooter borderTopWidth="1px">
            <button
              className="ml-4 py-2 px-3 text-gray-100    text-sm bg-[#456fca] rounded"
              onClick={() => {
                localStorage.removeItem("adminData");
                location.replace("/");
              }}
            >
              Logout
            </button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SideNav;
