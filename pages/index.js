import Image from "next/image";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { AiFillStar } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { setBook } from "@/features/books/bookSlice";
import Banner from "@/components/User/Banner";
import Footer from "@/components/User/Footer";
import Navbar from "@/components/User/Navbar";
import { useGetRecommendQuery } from "@/features/UserApi/userSliceApi";

export default function Home() {

  const{data, isLoading} = useGetRecommendQuery();
  const dispatch = useDispatch();
console.log(data)
  return (
    <>
      <Navbar />
      <Banner />
      <div className="m-5">
        <h1 className="text-[#456fca] text-4xl font-semibold my-10">
          Recommended Books
        </h1>
        <div className="flex justify-around items-center flex-wrap gap-5 ">
          {isLoading
            ? "Loading "
            : data?.data?.map((e) => {
                return (
                  <div
                    key={e.idBooks}
                    className="bg-white min-h-[300px] flex gap-5 justify-between  flex-col overflow-hidden rounded-lg shadow-lg  "
                  >
                    <Image
                      src={e.bookImage ? e.bookImage : "/dummy.jpg"}
                      height={250}
                      width={250}
                      alt="bookImage"
                    />
                    <h1 className="font-semibold text-xl ml-4 ">
                      {" "}
                      {e.bookTitle}
                    </h1>
                    <p className="text-md ml-4 ">{e.bookDescription}</p>
                    <span className="text-md ml-4 ">
                      rating: {e.rating}.0{" "}
                      <AiFillStar className="inline text-yellow-500 text-[18px]" />{" "}
                    </span>
                    <Link
                      href={{pathname: "books" , query:{bid: e.idBooks} }}
                      className="py-2 px-3 m-3 text-gray-100    text-sm bg-[#456fca] rounded "
                      onClick={() => dispatch(setBook(e))}
                    >
                      View More
                    </Link>
                  </div>
                );
              })}
        </div>
      </div>

      <div className="m-5">
        <h1 className="text-[#456fca] text-4xl font-semibold my-10">
          View More
        </h1>
        <div className="flex gap-8 bg-slate-200 justify-evenly  items-center min-h-[100px] flex-wrap p-2">
          <p>Visit the link below to learn and for more information.</p>
          <div className="flex gap-8">
            <Link
              href={"library"}
              className="py-2 px-3 text-gray-100    text-sm bg-[#456fca] rounded"
            >
              Library
            </Link>
            <Link
              href={"about"}
              className="py-2 px-3 text-gray-100    text-sm bg-[#456fca] rounded"
            >
              About
            </Link>
          </div>
        </div>
      </div>
      <div className="m-5">
        <h1 className="text-[#456fca] text-4xl font-semibold my-10">
          Our Partners
        </h1>
        <div className="flex gap-8 justify-center items-center min-h-[100px] flex-wrap">
          <button className="py-2 px-3 bg-slate-100   text-lg text-[#456fca] rounded">
            Bahahuddin Zakariya University
          </button>
          <button className="py-2 px-3  bg-slate-100  text-lg text-[#456fca] rounded">
            NUST University
          </button>
          <button className="py-2 px-3 bg-slate-100   text-lg text-[#456fca] rounded">
            FAST University
          </button>
          <button className="py-2 px-3  bg-slate-100  text-lg text-[#456fca] rounded">
            LUMS University
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
