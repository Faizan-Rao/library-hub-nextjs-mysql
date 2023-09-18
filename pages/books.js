import Banner from "@/components/User/Banner";
import Footer from "@/components/User/Footer";
import Navbar from "@/components/User/Navbar";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import { useGetSingleBookQuery } from "@/features/UserApi/userSliceApi";
import { useRouter } from "next/router";
import { setBook } from "@/features/books/bookSlice";
import { useEffect } from "react";

const Books = () => {
  const bid = useRouter().query.bid;
  const { data, isLoading } = useGetSingleBookQuery(bid);
  
  return (
    <>
      <Navbar />
      <Banner />
      <div className="m-5">
        <h1 className="text-[#456fca] text-4xl font-semibold my-10">Book</h1>

        {!isLoading && 
          <div className="flex justify-center gap-8 flex-wrap ">
            <div className="overflow-hidden self-center rounded-lg">
              <Image
                src={"/dummy.jpg"}
                height={200}
                width={400}
                alt={"BookImage"}
              />
            </div>
            <div className="flex flex-col lg:ml-16">
              <h1 className="text-[#456fca] text-xl font-semibold my-5">
                Title:
              </h1>
              <p className="text-md">{data?.data[0]?.bookTitle}</p>
              <h1 className="text-[#456fca] text-xl font-semibold my-5">
                Description:
              </h1>
              <p className="text-md">{data?.data[0]?.bookDescription}</p>
              <h1 className="text-[#456fca] text-xl font-semibold my-5">
                Publisher:
              </h1>
              <p className="text-md">{data?.data[0]?.bookPublisher}</p>
              <h1 className="text-[#456fca] text-xl font-semibold my-5">
                Version:
              </h1>
              <p className="text-md">{data?.data[0]?.bookVersion}</p>
              <div className="flex gap-2 justify-center my-4 ">
                <Link
                  href={`./books/${data?.data[0]?.bookPath}`}
                  className="py-2 px-3  text-gray-100    text-sm bg-[#456fca] rounded "
                  
                  
                >
                  Download
                </Link>
                <Link
                  href={{
                    pathname: "viewbook",
                    query: { book: data?.data[0]?.bookPath },
                  }}
                  target="_self"
                  className="py-2 px-3  text-gray-100    text-sm bg-[#456fca] rounded "
                >
                  Read Online
                </Link>
              </div>
            </div>
          </div>
        }
      </div>

      <Footer />
    </>
  );
};

export default Books;
