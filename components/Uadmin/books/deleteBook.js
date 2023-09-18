import React from "react";

import { useForm } from "react-hook-form";

import { useDeleteBookMutation } from "@/features/UadminApi/uadminSliceApi";

const DeleteBook = ({ CurrentBook, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({});

const [deleteBook] = useDeleteBookMutation();

  const onSubmitHandler = (data) => {
    const reqData = {
        bid: data.idBooks,
    };
    console.log(reqData)
   deleteBook(reqData);
    reset();
  };

  return (
    <div className="flex justify-center gap-8 flex-col  min-h-[400px]  w-[400px] rounded">
      <h1 className="text-3xl font-semibold  text-[#456fca]">
        Delete Book
      </h1>
      <form
        className="flex justify-between gap-8 flex-col"
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <input
          type="text"
          {...register("idBooks", { required: true })}
          className=" outline-none w-[100%] text-[15px] p-2 rounded border-2"
          placeholder="Enter Name of the University"
          value={`${CurrentBook.idBooks}`}
          hidden
          readOnly
        />
        <input
          type="text"
          {...register("bookTitle", { required: true })}
          className=" outline-none w-[100%] text-[15px] p-2 rounded border-2"
          placeholder="Enter Name of the University"
          value={`${CurrentBook.bookTitle}`}
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

export default DeleteBook;
