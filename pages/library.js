import React from "react";
import Banner from "@/components/User/Banner";
import Footer from "@/components/User/Footer";
import Navbar from "@/components/User/Navbar";
import Link from "next/link";

import { useGetUniversityQuery } from "@/features/AdminApi/adminApiSlice";

const Library = () => {
 const {data, isLoading} = useGetUniversityQuery();

  return (
    <>
      <Navbar />
      <Banner />
      <div className="m-5">
        <h1 className="text-[#456fca] text-4xl font-semibold my-10">
          Libraries
        </h1>
        <div className="flex gap-8 m-10 justify-center items-center min-h-[100px] flex-wrap">
          {isLoading
            ? "Loading "
            : data?.data?.map((e) => {
                return (
                  <div
                    key={e.idUniversity}
                    className="bg-white  flex gap-8 justify-center items-center   rounded pb-4 "
                  >
                    <input type="hidden" name="" value={e.idUniversity} />
                    <Link href={{pathname : '/category', query : {uniId : e.idUniversity} }} className="py-2 px-3 bg-slate-100   text-lg text-[#456fca] rounded">
                      {e.universityName}
                    </Link>
                  </div>
                );
              })}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Library;
