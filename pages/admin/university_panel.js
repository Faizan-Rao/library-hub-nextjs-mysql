import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import CreateUnivesity from "@/components/Admin/university/createUnivesity";
import ReportUniversity from "@/components/Admin/university/reportUniversity";
import { useGetUniversityQuery } from "@/features/AdminApi/adminApiSlice";

const UniversityPanel = () => {
  const { data: University } = useGetUniversityQuery();
  console.log(University)
  return (
    <div className=" container m-5">
      <h1 className="text-[#456fca] text-4xl font-semibold my-10">
        University ({University?.data?.length})
      </h1>
      <div>
        <Tabs variant="enclosed">
          <TabList>
            <Tab>All universities</Tab>
            <Tab>Create university</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <ReportUniversity />
            </TabPanel>
            <TabPanel>
              <CreateUnivesity />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
};

export default UniversityPanel;
