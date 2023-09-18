import React, { useEffect } from "react";
import Link from "next/link";
import {
  useGetAdminsQuery,
  useGetUniversityQuery,
} from "@/features/AdminApi/adminApiSlice";

const AdminPanel = () => {
 

  useEffect(() => {
    setTimeout(() => {
      let adminData = localStorage.getItem("adminData");
      if (adminData) return;
      else {
        localStorage.removeItem("adminData");
        location.replace("/");
      }
    }, 400);
  }, []);

  
    let { data: dataUniversity } = useGetUniversityQuery();

    let { data: dataAdmin } = useGetAdminsQuery();

   

  return (
    <>
      <div className="m-5">
        <h1 className="text-[#456fca] text-4xl font-semibold my-10">
          Overview
        </h1>
        <div className="flex justify-center items-center  gap-10 min-h-[200px] flex-wrap">
          <div className="p-4 bg-slate-200 font-semibold shadow-lg flex flex-col justify-center items-center min-h-[200px] min-w-[200px] text-xl text-[#456fca] rounded-lg">
            <span>Admins</span> <span>{dataAdmin?.data?.length}</span>
          </div>
          <div className="p-4 bg-slate-200 font-semibold shadow-lg flex flex-col justify-center items-center min-h-[200px] min-w-[200px] text-xl text-[#456fca] rounded-lg">
            {" "}
            <span>University</span> <span>{dataUniversity?.data?.length}</span>
          </div>
        </div>
      </div>
      <div className="m-5">
        <h1 className="text-[#456fca] text-4xl font-semibold my-10">Panels</h1>
        <div className="flex gap-8  justify-center items-center min-h-[100px] flex-wrap  ">
          <div className="bg-slate-200  flex gap-8 justify-center items-center  shadow-lg rounded-lg  ">
            <Link
              href={"admin_panel"}
              className="py-1 px-3   text-lg text-[#456fca] rounded m-auto"
            >
              Overview
            </Link>
          </div>
          <div className="bg-slate-200  flex  justify-center items-center  shadow-lg rounded-lg  ">
            <Link
              href={"manageAdmin_panel"}
              className="py-1 px-3    text-lg text-[#456fca] rounded m-auto"
            >
              Admins
            </Link>
          </div>
          <div className="bg-slate-200  flex  justify-center items-center  shadow-lg rounded-lg  ">
            <Link
              href={"university_panel"}
              className="py-1 px-3  text-lg text-[#456fca] rounded m-auto"
            >
              University
            </Link>
          </div>
          <div className="bg-slate-200  flex  justify-center items-center  shadow-lg rounded-lg  ">
            <Link
              href={"#"}
              className="py-1 px-3   text-lg text-[#456fca] rounded m-auto"
            >
              Users
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPanel;
