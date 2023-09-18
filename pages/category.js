import React from "react";
import Banner from "@/components/User/Banner";
import Footer from "@/components/User/Footer";
import Navbar from "@/components/User/Navbar";
import Link from "next/link";

import { useGetUserCategoryQuery } from "@/features/UserApi/userSliceApi";
import { useRouter } from "next/router";

const Category = () => {
  const uniId = useRouter().query.uniId
 const {data, isLoading} = useGetUserCategoryQuery(uniId);

  return (
    <>
      <Navbar />
      <Banner />
      <div className="m-5">
        <h1 className="text-[#456fca] text-4xl font-semibold my-10">
          Categories
        </h1>
        <div className="flex gap-8 m-10 justify-center items-center min-h-[100px] flex-wrap">
          {isLoading
            ? "Loading "
            : data?.data?.map((e) => {
                return (
                  <div
                    key={e.idCategory}
                    className="bg-white  flex gap-8 justify-center items-center   rounded pb-4 "
                  >
                    <input type="hidden" name="" value={e.idCategory} />
                    <Link href={{pathname : '/allbook', query : {categoryId : e.idCategory} }} className="py-2 px-3 bg-slate-100   text-lg text-[#456fca] rounded">
                      {e.categoryTitle}
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

export default Category;
