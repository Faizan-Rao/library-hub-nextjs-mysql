import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../adminFormSchema/UniversityFormSchema";
import axios from "axios";
import { useAddUniversityMutation } from "@/features/AdminApi/adminApiSlice";

const CreateUnivesity = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [addUniversity] = useAddUniversityMutation();
  
  const onSubmitHandler = (data) => {
    const reqData = {
      universityName: data.universityName,
    };
    addUniversity(reqData);

    reset();
  };

  return (
    <div className="flex justify-center gap-8 flex-col  min-h-[400px]  w-[400px] rounded">
      <h1 className="text-3xl font-semibold  text-[#456fca]">
        Create University form
      </h1>
      <form
        className="flex justify-between gap-8 flex-col"
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <input
          type="text"
          {...register("universityName", { required: true })}
          className=" outline-none w-[100%] text-[15px] p-2 rounded border-2"
          placeholder="Enter Name of the University"
        />
        {errors.userName && (
          <p className="text-red-600 my-2">User name is required.</p>
        )}

        <div className="flex items-center p-6">
          <input
            type="submit"
            className=" cursor-pointer py-2 px-3 text-gray-100   bg-[#456fca] rounded text-sm"
            value="Create University"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateUnivesity;
