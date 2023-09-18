import ReportBooks from '@/components/Uadmin/books/totalBooks'
import React, { useEffect, useState } from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { useGetBookQuery } from '@/features/UadminApi/uadminSliceApi';
import AddBookForm from '@/components/Uadmin/books/addBook';

const BookPanel = () => {
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

  useEffect(()=>{

  },[])
  return (
    <>
      <div className=" container m-5">
      <h1 className="text-[#456fca] text-4xl font-semibold my-10">
        {Books?.data?.universityName} Books ({Books?.data?.length})
      </h1>
      <div>
        <Tabs variant="enclosed">
          <TabList>
            <Tab>All Books</Tab>
            <Tab>Add Book </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <ReportBooks/>
            </TabPanel>
            <TabPanel>
              <AddBookForm/>
              
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
    </>
  )
}

export default BookPanel