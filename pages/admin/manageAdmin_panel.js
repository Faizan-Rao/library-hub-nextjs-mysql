import React from "react";
import { useSelector } from "react-redux";
import ReportAdmin from "@/components/Admin/admin/reportAdmin";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import SignUpForm from "@/components/forms/SignUpForm";
import { useGetAdminsQuery } from "@/features/AdminApi/adminApiSlice";

const ManageAdmin = () => {
  const {data: Admin} = useGetAdminsQuery();
  
  return (
    <div className=" container m-5">
      <h1 className="text-[#456fca] text-4xl font-semibold my-10">
        Admins ({Admin?.data?.length})
      </h1>
      <div>
      <Tabs variant="enclosed">
          <TabList>
            <Tab>All Admins</Tab>
            <Tab>Create New Admin</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <ReportAdmin/>
            </TabPanel>
            <TabPanel>
              <SignUpForm/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
};

export default ManageAdmin;
