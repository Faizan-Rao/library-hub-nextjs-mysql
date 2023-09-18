import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../adminFormSchema/UniversityFormSchema";
import axios from "axios";
import { useUpdateUniversityMutation } from "@/features/AdminApi/adminApiSlice";

const UpdateUniversity = ({ currentUniversity, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [updateUniversity] = useUpdateUniversityMutation();
  const onSubmitHandler = (data) => {
    if (data.universityName === "") return;

    const reqData = {
      uniId: data.universityId,
      universityName: data.universityName,
    };

    updateUniversity(reqData);

    reset();
  };

  return (
    <div className="flex justify-center gap-8 flex-col  min-h-[400px]  w-[400px] rounded">
      <h1 className="text-3xl font-semibold  text-[#456fca]">
        Update University
      </h1>
      <form
        className="flex justify-between gap-8 flex-col"
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <input
          type="text"
          {...register("universityId", { required: true })}
          className=" outline-none w-[100%] text-[15px] p-2 rounded border-2"
          placeholder="Enter Name of the University"
          value={`${currentUniversity.idUniversity}`}
          hidden
          readOnly
        />
        <input
          type="text"
          {...register("universityName", { required: true })}
          className=" outline-none w-[100%] text-[15px] p-2 rounded border-2"
          placeholder={`${currentUniversity.universityName}`}
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

export default UpdateUniversity;
