import React from "react";

const Banner = () => {
  return (
    <div className='bg-[url("/bg.jpg")] flex bg-  bg-center bg-cover  min-h-[400px] '>
      <section className=" bg-[#18171776] flex justify-center  min-h-[400px]  items-center w-full">
        <div className=" bg-[#ffffff00]  flex  gap-8   p-20 flex-col text-center ">
          <h1 className=" bg-transparent text-7xl text-gray-200 font-semibold shadow-lg">
            LibraryHUB
          </h1>
          <p className=" text-md font-thin text-gray-200 bg-transparent shadow-lg">
            Knowledge is the path of learning and together we learn.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Banner;
