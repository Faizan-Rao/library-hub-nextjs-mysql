import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../adminFormSchema/AdminFormScheme";
import axios from "axios";
import { useDeleteAdminMutation } from "@/features/AdminApi/adminApiSlice";

const DeleteAdmin = ({ currentUser, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [deleteAdmin] = useDeleteAdminMutation();

  const onSubmitHandler = (data) => {
    const reqData = {
      adminId: data.adminId,
    };
    deleteAdmin(reqData);

    reset();
  };

  return (
    <div className="flex justify-center gap-8 flex-col  min-h-[400px]  w-[400px] rounded">
      <h1 className="text-3xl font-semibold  text-[#456fca]">
        Delete Admin
      </h1>
      <form
        className="flex justify-between gap-8 flex-col"
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <input
          type="text"
          {...register("adminId", { required: true })}
          className=" outline-none w-[100%] text-[15px] p-2 rounded border-2"
          placeholder="Enter Name of the University"
          value={`${currentUser.idAdmins}`}
          hidden
          readOnly
        />

        <input
          {...register("adminName", { required: true })}
          type="text"
          className=" outline-none w-[100%] text-[15px] p-2 rounded border-2"
          placeholder="Enter Name of the University"
          value={`${currentUser.adminName}`}
          readOnly
        />

        <input
          {...register("adminEmail", { required: true })}
          type="text"
          className=" outline-none w-[100%] text-[15px] p-2 rounded border-2"
          placeholder="Enter Name of the University"
          value={`${currentUser.adminEmail}`}
          readOnly
        />
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

export default DeleteAdmin;
