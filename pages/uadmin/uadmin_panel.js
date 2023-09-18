import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useGetBookQuery, useGetCategoryQuery } from "@/features/UadminApi/uadminSliceApi";


const UadminPanel = () => {
 
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

  
    let { data: dataBook } = useGetBookQuery(Uadmin.idUniversity, {
      pollingInterval: 3000,
    });

    let { data: dataCategory } = useGetCategoryQuery(Uadmin.idUniversity, {
      pollingInterval: 3000,
    });

   

  return (
    <>
      <div className="m-5">
        <h1 className="text-[#456fca] text-4xl font-semibold my-10">
          Overview
        </h1>
        <div className="flex justify-center items-center  gap-10 min-h-[200px] flex-wrap">
          <div className="p-4 bg-slate-200 font-semibold shadow-lg flex flex-col justify-center items-center min-h-[200px] min-w-[200px] text-xl text-[#456fca] rounded-lg">
            <span> Total Books</span> <span>{dataBook?.data?.length ? dataBook?.data?.length : 0}</span>
          </div>
          <div className="p-4 bg-slate-200 font-semibold shadow-lg flex flex-col justify-center items-center min-h-[200px] min-w-[200px] text-xl text-[#456fca] rounded-lg">
            {" "}
            <span>Total Categories</span> <span>{dataCategory?.data?.length ? dataCategory?.data?.length : 0}</span>
          </div>
        </div>
      </div>
      <div className="m-5">
        <h1 className="text-[#456fca] text-4xl font-semibold my-10">Panels</h1>
        <div className="flex gap-8  justify-center items-center min-h-[100px] flex-wrap  ">
          <div className="bg-slate-200  flex gap-8 justify-center items-center  shadow-lg rounded-lg  ">
            <Link
              href={"uadmin_panel"}
              className="py-1 px-3   text-lg text-[#456fca] rounded m-auto"
            >
              Overview
            </Link>
          </div>
         
          <div className="bg-slate-200  flex  justify-center items-center  shadow-lg rounded-lg  ">
            <Link
              href={"category_panel"}
              className="py-1 px-3  text-lg text-[#456fca] rounded m-auto"
            >
              Categories
            </Link>
          </div>
          <div className="bg-slate-200  flex  justify-center items-center  shadow-lg rounded-lg  ">
            <Link
              href={"book_panel"}
              className="py-1 px-3   text-lg text-[#456fca] rounded m-auto"
            >
              Books
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default UadminPanel;
