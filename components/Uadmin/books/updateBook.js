import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./BookFormSchema/AddBookSchema";
import { useUpdateBookMutation } from "@/features/UadminApi/uadminSliceApi";

const UpdateBook = ({ CurrentBook, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({});

  const [updateBook] = useUpdateBookMutation();

  const onSubmitHandler = (data) => {
    
    const bTitle =
      data.bookTitle !== "" ? data.bookTitle : CurrentBook.bookTitle;
    const bDescription =
      data.bookDescription !== ""
        ? data.bookDescription
        : CurrentBook.bookDescription;
    const bVersion =
      data.bookVersion !== "" ? data.bookVersion : CurrentBook.bookVersion;
    const bPublisher =
      data.bookPublisher !== ""
        ? data.bookPublisher
        : CurrentBook.bookPublisher;

    const reqData = {
      bTitle,
      bDescription,
      bVersion,
      bImage: "",
      bPublisher,
      bId: data.idBooks,
    };
    updateBook(reqData)
    

    reset();
  };

  return (
    <div className="flex my-5 justify-center gap-8 flex-col  min-h-[400px]  w-[400px] rounded">
      <h1 className="text-3xl font-semibold  text-[#456fca]">Update Book</h1>
      <form
        className="flex justify-between gap-8 flex-col"
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <input
          type="text"
          {...register("idBooks")}
          className=" outline-none w-[100%] text-[15px] p-2 rounded border-2"
          placeholder="Enter Name of the University"
          value={`${CurrentBook.idBooks}`}
          hidden
          readOnly
        />
        <input
          type="text"
          {...register("bookTitle")}
          className=" outline-none w-[100%] text-[15px] p-2 rounded border-2"
          placeholder={`${CurrentBook.bookTitle}`}
        />
        {errors.userName && (
          <p className="text-red-600 my-2">User name is required.</p>
        )}

        <input
          type="text"
          {...register("bookDescription")}
          className=" outline-none w-[100%] text-[15px] p-2 rounded border-2"
          placeholder={`${CurrentBook.bookDescription}`}
        />
        {errors.userName && (
          <p className="text-red-600 my-2">User name is required.</p>
        )}

        <input
          type="text"
          {...register("bookPublisher")}
          className=" outline-none w-[100%] text-[15px] p-2 rounded border-2"
          placeholder={`${CurrentBook.bookPublisher}`}
        />
        {errors.userName && (
          <p className="text-red-600 my-2">User name is required.</p>
        )}

        <input
          type="text"
          {...register("bookVersion")}
          className=" outline-none w-[100%] text-[15px] p-2 rounded border-2"
          placeholder={`${CurrentBook.bookVersion}`}
        />
        {errors.userName && (
          <p className="text-red-600 my-2">User name is required.</p>
        )}

        <div className="flex items-center ">
          <input
            type="submit"
            className=" mr-2 cursor-pointer py-2 px-3 text-gray-100   bg-[#456fca] rounded text-sm"
            value="Update"
            onClick={onClose}
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateBook;
