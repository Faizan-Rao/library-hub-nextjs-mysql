import React from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./FormSchema/signupSchema";
import axios from "axios";
import { useRouter } from "next/router";

import { Select } from "@chakra-ui/react";
import { useGetUniversityQuery } from "@/features/AdminApi/adminApiSlice";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const router = useRouter();

  const { data: University } = useGetUniversityQuery();

  const onSubmitHandler = (data) => {
    console.log(data);

    if (data.userPassword !== data.userCPassword) {
      return alert("Mismatched passwords");
    }

    const reqData = {
      adminName: data.userName,
      adminEmail: data.userEmail,
      adminPassword: data.userPassword,
      uniId: data.uniId,
    };

    const options = {
      method: "POST",
      url: "http://localhost:3000/api/Uadmin/Uadmin_SignUp",
      headers: { "Content-Type": "application/json" },
      data: JSON.stringify(reqData),
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        if (response.data.status === "success") {
          alert("User Signup successful");
          return;
        } else return alert("User Signup failed");
      })
      .catch(function (error) {
        console.error(error);
      });

    reset();
  };

  return (
    <div className="flex  gap-8 flex-col items-center min-h-[400px]  w-[400px] p-10 rounded">
      <h1 className="text-2xl font-semibold  text-[#456fca]">Create University Admin</h1>
      <form
        className="flex justify-between gap-8 flex-col"
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <Select
          placeholder="---Select option---"
          {...register("uniId", { required: true })}
        >
          {University?.data?.map((e) => {
            return (
              <option value={`${e.idUniversity}`} key={e.idUniversity}>
                {e.universityName}
              </option>
            );
          })}
        </Select>
        {errors.userName && (
          <p className="text-red-600 my-2">User name is required.</p>
        )}
        <input
          type="text"
          {...register("userName", { required: true })}
          className=" outline-none w-[100%] text-[15px] p-2 rounded border-2"
          placeholder="Enter Name"
        />
        {errors.userName && (
          <p className="text-red-600 my-2">User name is required.</p>
        )}
        <input
          {...register("userEmail", { required: true })}
          className=" outline-none w-[100%] text-[15px] p-2 rounded border-2"
          type="text"
          placeholder="Enter Email"
        />
        {errors.userEmail && (
          <p className="text-red-600 my-2">Email address is required.</p>
        )}
        <input
          {...register("userPassword", { required: true })}
          className="outline-none w-[100%] text-[15px] p-2 rounded border-2"
          type="password"
          placeholder="Enter Password"
        />
        {errors.userPassword && (
          <p className="text-red-600 my-2">Password is required.</p>
        )}
        <input
          {...register("userCPassword", { required: true })}
          className="outline-none w-[100%] text-[15px] p-2 rounded border-2"
          type="password"
          placeholder="Confirm Password"
        />
        {errors.userCPassword && (
          <p className="text-red-600 my-2">Password is required.</p>
        )}

        <div className="flex items-center ">
          <input
            type="submit"
            className=" cursor-pointer py-2 px-3 text-gray-100   bg-[#456fca] rounded text-sm"
            value="Add Admin"
          />
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
