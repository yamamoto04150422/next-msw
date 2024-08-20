"use client";

import React from "react";
import { useForm, useFieldArray } from "react-hook-form";

type FormValues = {
  users: { name: string; email: string }[];
};

export default function DynamicForm() {
  const { register, handleSubmit, control } = useForm<FormValues>({
    defaultValues: {
      users: [{ name: "", email: "" }],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "users",
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field, index) => (
        <div key={field.id}>
          <label>Name</label>
          <input {...register(`users.${index}.name`)} />
          <label>Email</label>
          <input {...register(`users.${index}.email`)} />
          <button type="button" onClick={() => remove(index)}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={() => append({ name: "", email: "" })}>
        Add User
      </button>
      <input type="submit" />
    </form>
  );
}
