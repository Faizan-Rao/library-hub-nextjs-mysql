import React, { useReducer, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
const Navbar = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col  p-3 mb-2 ">
        <div className="flex justify-between mx-2 items-center flex-wrap">
          <div className="font-bold text-xl text-[#456fca]">LibraryHUB</div>
          <div>
            <ul className="flex justify-between items-center gap-8 hover:text-gray-800">
              <li className="ml-4  text-[#6E85B7]">
                <Link href={"/"}>Home</Link>
              </li>
              <li className="ml-4  text-[#6E85B7]">
                <Link href={"library"}>Library</Link>
              </li>
              <li className="ml-4  text-[#6E85B7]">
                <Link href={"about"}>About</Link>
              </li>
            </ul>
          </div>
          <div>
            {/* <Link href={"user/login"} className="text-[#6E85B7]  font-semibold">Login/Signup</Link> */}
            
              <div className="flex justify-center items-center ">
                <input
                  className="border-2 rounded-md outline-none p-1 "
                  type="search"
                  name="search"
                  id="search"
                  onChange={(e) => {
                    setSearch(e.target.value);
                    console.log(search);
                  }}
                />
                <Link
                  href={search ? `search?categoryTitle=${search}` : "#"}
                  className="text-[14px] text-gray-100 px-4 py-2 ml-3 rounded-sm bg-[#456fca]"
                >
                  Search
                </Link>
              </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
