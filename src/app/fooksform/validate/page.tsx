"use client";

import React from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  username: string;
  email: string;
  age: number;
};

export default function ValidatedForm() {
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
        <input {...register("username", { required: true, minLength: 4 })} />
        {errors.username && <span>Username must be at least 4 characters</span>}
      </div>
      <div>
        <label>Email</label>
        <input
          {...register("email", {
            required: true,
            pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
          })}
        />
        {errors.email && <span>Invalid email address</span>}
      </div>
      <div>
        <label>Age</label>
        <input
          type="number"
          {...register("age", { required: true, min: 18 })}
        />
        {errors.age && <span>Must be at least 18 years old</span>}
      </div>
      <input type="submit" />
    </form>
  );
}
