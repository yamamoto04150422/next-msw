"use client";

import React from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  username: string;
  email: string;
};

export default function FormWithReset() {
  const { register, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      username: "defaultUser",
      email: "default@example.com",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Username</label>
        <input {...register("username")} />
      </div>
      <div>
        <label>Email</label>
        <input {...register("email")} />
      </div>
      <input type="submit" />
    </form>
  );
}
