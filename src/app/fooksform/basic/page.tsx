"use client";

import React from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  username: string;
  email: string;
};

export default function BasicForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Username</label>
        <input {...register("username", { required: true })} />
        {errors.username && <span>This field is required</span>}
      </div>
      <div>
        <label>Email</label>
        <input {...register("email", { required: true })} />
        {errors.email && <span>This field is required</span>}
      </div>
      <input type="submit" />
    </form>
  );
}
