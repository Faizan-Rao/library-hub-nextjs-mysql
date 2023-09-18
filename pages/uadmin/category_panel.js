import ReportBooks from '@/components/Uadmin/books/totalBooks'
import React, { useEffect, useState } from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { useGetBookQuery, useGetCategoryQuery } from '@/features/UadminApi/uadminSliceApi';
import AddBookForm from '@/components/Uadmin/books/addBook';
import ReportCategory from '@/components/Uadmin/category/reportCategories';
import AddCategoryForm from '@/components/Uadmin/category/addCategory';

const CategoryPanel = () => {
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
  
  const { data: dataCategory} = useGetCategoryQuery(Uadmin.idUniversity);

  useEffect(()=>{

  },[])
  return (
    <>
      <div className=" container m-5">
      <h1 className="text-[#456fca] text-4xl font-semibold my-10">
        Book Categories ({dataCategory?.data?.length})
      </h1>
      <div>
        <Tabs variant="enclosed">
          <TabList>
            <Tab>All Categories</Tab>
            <Tab>Add Category </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <ReportCategory/>
            </TabPanel>
            <TabPanel>
              <AddCategoryForm/>
              
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
    </>
  )
}

export default CategoryPanel