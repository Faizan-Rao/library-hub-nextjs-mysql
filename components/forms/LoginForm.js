import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./FormSchema/loginSchema";
import axios from "axios";
import { useRouter } from "next/router";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const router = useRouter();

  const onSubmitHandler = (data) => {
   
    if(router.pathname == "/admin/login")
    {
      const reqData = {
        adminEmail : data.userEmail,
        adminPassword : data.userPassword
      }

      const options = {
        method: "POST",
        url: "http://localhost:3000/api/Admin/Admin_Login",
        headers: { "Content-Type": "application/json" },
        data: JSON.stringify(reqData),
      };
  
      axios
        .request(options)
        .then(function (response) 
        {
          console.log(response.data)
          if(response.data.data?.length > 0)
          {
            localStorage.setItem("adminData", JSON.stringify(response.data.data[0]))
            location.replace('/admin/admin_panel')
            return;
          }
          else
            return alert("Invalid UserEmail or UserPassword")
        })
        .catch(function (error) 
        {
          console.error(error);
        });
    }
    else
    {
      const reqData = {
        adminEmail : data.userEmail,
        adminPassword : data.userPassword
      }

      const options = {
        method: "POST",
        url: "http://localhost:3000/api/Uadmin/Uadmin_Login",
        headers: { "Content-Type": "application/json" },
        data: JSON.stringify(reqData),
      };
  
      axios
        .request(options)
        .then(function (response) 
        {
          console.log(response.data);
          if(response.data.data?.length > 0)
          {
            localStorage.setItem("UadminData", JSON.stringify(response.data.data[0]))
            location.replace('/uadmin/uadmin_panel')
            return;
          }
          else
            return alert("Invalid UserEmail or UserPassword")
        })
        .catch(function (error) 
        {
          console.error(error);
        });
    }
    reset();
  };

  return (
    <div className="flex justify-between gap-8 flex-col items-center min-h-[400px] shadow-lg w-[400px] p-10 rounded">
      <h1 className="text-4xl font-semibold m-4 text-[#456fca]">Login</h1>
      <form
        className="flex justify-between gap-8 flex-col"
        onSubmit={handleSubmit(onSubmitHandler)}
      >
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

        <div className="flex items-center p-6">
          <input
            type="submit"
            className=" cursor-pointer py-2 px-3 text-gray-100   bg-[#456fca] rounded text-sm"
            value="Login"
          />
          <Link
            className="ml-4 py-2 px-3 text-gray-100    text-sm bg-[#456fca] rounded"
            href={"#"}
          >
            Signup
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
