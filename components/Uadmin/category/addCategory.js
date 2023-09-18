import React, { useEffect, useState } from "react";

import { useForm } from "react-hook-form";

import { useRouter } from "next/router";

import {
  useAddBookMutation,
  useAddCategoryMutation,
  useGetCategoryQuery,
} from "@/features/UadminApi/uadminSliceApi";

const AddCategoryForm = () => {
  const [Uadmin, setUadmin] = useState({});
 
  useEffect(() => {
    setTimeout(() => {
      let adminData = localStorage.getItem("UadminData");
      if (adminData) {
        setUadmin(JSON.parse(localStorage.getItem("UadminData")));
      } else {
        localStorage.removeItem("UadminData");
        location.replace("/");
      }
    }, 400);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
  });
  const router = useRouter();

  
  const [addCategory] = useAddCategoryMutation();
  
  const onSubmitHandler = (data) => {
    let adminId = JSON.parse(localStorage.getItem("UadminData"))
    const reqData = {
        adminId : adminId.idAdmins, 
      categoryTitle: data.categoryTitle,
      
    };
    console.log(reqData)
    addCategory(reqData);

    reset();
  };

  return (
    <div className="flex  gap-8 flex-col items-center min-h-[400px]  w-[400px] p-10 rounded">
      <h1 className="text-2xl font-semibold  text-[#456fca]">
        Add New Category
      </h1>
      <form
        className="flex justify-between gap-8 flex-col"
        onSubmit={handleSubmit(onSubmitHandler)}
       
      >
        <input
          type="text"
          {...register("adminId")}
          className=" outline-none w-[100%] text-[15px] p-2 rounded"
          placeholder="Category Title"
          value={`${Uadmin.idAdmins}`}
          readOnly
          hidden
        />
        {errors.userName && (
          <p className="text-red-600 my-2">User name is required.</p>
        )}
        <input
          type="text"
          {...register("categoryTitle", { required: true })}
          className=" outline-none w-[100%] text-[15px] p-2 rounded border-2"
          placeholder="Category Title"
        />
        {errors.userName && (
          <p className="text-red-600 my-2">User name is required.</p>
        )}
        
       

        <div className="flex items-center ">
          <input
            type="submit"
            className=" cursor-pointer py-2 px-3 text-gray-100   bg-[#456fca] rounded text-sm"
            value="Create Category"
          />
        </div>
      </form>
    </div>
  );
};

export default AddCategoryForm;
