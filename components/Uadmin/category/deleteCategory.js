import { useDeleteCategoryMutation } from "@/features/UadminApi/uadminSliceApi";
import React from "react";

import { useForm } from "react-hook-form";


const DeleteCategory = ({ CurrentCategory, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({});


  const [deleteCategory] = useDeleteCategoryMutation()

  const onSubmitHandler = (data) => {
    const reqData = {
        categoryId: data.idCategory,
    };
    deleteCategory(reqData)
   
    reset();
  };
  
  return (
    <div className="flex justify-center gap-8 flex-col  min-h-[400px]  w-[400px] rounded">
      <h1 className="text-3xl font-semibold  text-[#456fca]">
        Delete Category
      </h1>
      <form
        className="flex justify-between gap-8 flex-col"
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <input
          type="text"
          {...register("idCategory", { required: true })}
          className=" outline-none w-[100%] text-[15px] p-2 rounded border-2"
          placeholder="Enter Name of the University"
          value={`${CurrentCategory.idCategory}`}
          readOnly
          hidden
        />
        <input
          type="text"
          {...register("categoryTitle", { required: true })}
          className=" outline-none w-[100%] text-[15px] p-2 rounded border-2"
          placeholder="Enter Name of the University"
          value={`${CurrentCategory.categoryTitle}`}
          readOnly
        />
        {errors.userName && (
          <p className="text-red-600 my-2">User name is required.</p>
        )}

        <div className="flex items-center ">
          <input
            type="submit"
            className=" mr-2 cursor-pointer py-2 px-3 text-gray-100   bg-[#456fca] rounded text-sm"
            value="Delete"
            onClick={onClose}
          />
        </div>
      </form>
    </div>
  );
};

export default DeleteCategory;
