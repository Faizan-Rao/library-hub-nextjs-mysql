import React, { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./BookFormSchema/AddBookSchema";
import axios from "axios";
import { useRouter } from "next/router";

import { Select } from "@chakra-ui/react";
import {
  useAddBookMutation,
  useGetCategoryQuery,
} from "@/features/UadminApi/uadminSliceApi";

const AddBookForm = () => {
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
    resolver: yupResolver(schema),
  });
  const router = useRouter();

  const { data: dataCategory } = useGetCategoryQuery(Uadmin.idUniversity);
  const [addBook] = useAddBookMutation();
  const [pdf, setPdf] = useState(null);
  const [fileName, setFileName] = useState(null);

  const handleFileChange = (e) => {
    let file = e.target.files[0];
    if (!file) alert("No File Exist");
    if (file && file.type !== "application/pdf")
      alert("File Not in Correct Format");
    else
      setPdf(file)
  };

  const onSubmitFile = async () =>{
    let formData = new FormData()
    formData.append('pdf', pdf)
    const response = await fetch("/api/upload",{
      method: "POST",
      body: formData
    })
    const data = await response.json()
    let fileName = data.data.pdf[0].newFilename;
    return fileName
  }


  const onSubmitHandler = async (data) => {
    const response = await onSubmitFile();
    
    const reqData = {
      bTitle: data.bookTitle,
      bDescription: data.bookDescription,
      bVersion: data.bookVersion,
      bImage: "",
      bPublisher: data.bookPublisher,
      bpath: response,
      catId: data.catId,
    };

    const payload = await addBook(reqData).unwrap();
    console.log(payload)

    reset();
  };

  return (
    <div className="flex  gap-8 flex-col items-center min-h-[400px]  w-[400px] p-10 rounded">
      <h1 className="text-2xl font-semibold  text-[#456fca]">Add New Book</h1>
      <form
        className="flex justify-between gap-8 flex-col"
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <Select
          placeholder="---Select option---"
          {...register("catId", { required: true })}
        >
          {dataCategory?.data?.map((e) => {
            return (
              <option value={`${e.idCategory}`} key={e.idCategory}>
                {e.categoryTitle}
              </option>
            );
          })}
        </Select>
        {errors.userName && (
          <p className="text-red-600 my-2">User name is required.</p>
        )}
        <input
          type="text"
          {...register("bookTitle", { required: true })}
          className=" outline-none w-[100%] text-[15px] p-2 rounded border-2"
          placeholder="Book Title"
        />
        {errors.userName && (
          <p className="text-red-600 my-2">User name is required.</p>
        )}
        <textarea
          {...register("bookDescription", { required: true })}
          className=" outline-none w-[100%] text-[15px] p-2 rounded  border-2"
          type="text"
          placeholder="Book Description"
        />
        {errors.userEmail && (
          <p className="text-red-600 my-2">Email address is required.</p>
        )}
        <input
          {...register("bookPublisher", { required: true })}
          className="outline-none w-[100%] text-[15px] p-2 rounded border-2"
          type="text"
          placeholder="Book Publisher"
        />
        {errors.userPassword && (
          <p className="text-red-600 my-2">Password is required.</p>
        )}
        <input
          {...register("bookVersion", { required: true })}
          className="outline-none w-[100%] text-[15px] p-2 rounded border-2"
          type="text"
          placeholder="Book Version"
        />
        {errors.userCPassword && (
          <p className="text-red-600 my-2">Password is required.</p>
        )}
        <input type="file" name="pdf" id="pdf" onChange={handleFileChange} />

        <div className="flex items-center ">
          <input
            type="submit"
            className=" cursor-pointer py-2 px-3 text-gray-100   bg-[#456fca] rounded text-sm"
            value="Add Book"
          />
        </div>
      </form>
    </div>
  );
};

export default AddBookForm;
