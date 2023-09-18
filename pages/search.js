import React from "react";
import { useRouter } from "next/router";

import Image from "next/image";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";


import Footer from "@/components/User/Footer";
import Navbar from "@/components/User/Navbar";
import { useGetSearchQuery, useGetUserBookQuery } from "@/features/UserApi/userSliceApi";
import Banner from "@/components/User/Banner";

const Search = () => {
  
  const router = useRouter();
 
  const categoryTitle = router.query.categoryTitle
 
  
  
  const {data, isLoading} = useGetSearchQuery(categoryTitle);
  return (
    <>
      <Navbar />
      <Banner />
      <div className="m-5">
        <h1 className="text-[#456fca] text-4xl font-semibold my-10">Books</h1>
        <div className="flex justify-around items-center flex-wrap gap-5 my-5">
          
          {isLoading
            ? "Loading "
            : data?.data?.map((e) => {
                return (
                  <div
                    key={e.idBooks}
                    className="bg-white min-h-[300px] flex gap-5 justify-between   flex-col   shadow-lg  overflow-hidden rounded-lg"
                  >
                    <Image
                      src={e.bookImage ? e.bookImage : "/dummy.jpg"}
                      height={250}
                      width={250}
                      alt="bookImage"
                    />
                    <h1 className="font-semibold text-xl ml-4 ">
                      {e.bookTitle}
                    </h1>
                    <p className="text-md ml-4 ">{e.bookDescription}</p>
                    <span className="text-md ml-4 ">
                      Version: {e.bookVersion}
                      <AiFillStar className="inline text-yellow-500 text-[18px]" />
                    </span>
                    <Link
                      href={{pathname: "books", query:{bid: e.idBooks}}}
                      className="py-2 px-3 m-3 text-gray-100    text-sm bg-[#456fca] rounded "
                      
                    >
                      View More
                    </Link>
                  </div>
                ) ;
              })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Search;
