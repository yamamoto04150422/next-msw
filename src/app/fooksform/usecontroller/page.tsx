"use client";

import React from "react";
import { useForm, Controller, useController } from "react-hook-form";
import {
  TextField,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Button,
} from "@mui/material";

interface FormValues {
  firstName: string;
  age: number;
  agree: boolean;
  country: string;
}

const MyForm: React.FC = () => {
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      firstName: "",
      age: 0,
      agree: false,
      country: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  // 相関チェック例: `agree`がtrueの場合、`country`の選択を必須にする
  const watchAgree = watch("agree", false);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Text Input */}
      <Controller
        name="firstName"
        control={control}
        rules={{ required: "First name is required" }}
        render={({ field }) => (
          <TextField
            {...field}
            label="First Name"
            variant="outlined"
            error={!!errors.firstName}
            helperText={errors.firstName?.message}
            fullWidth
            margin="normal"
          />
        )}
      />

      {/* Number Input */}
      <Controller
        name="age"
        control={control}
        rules={{
          required: "Age is required",
          min: { value: 1, message: "Age must be at least 1" },
        }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Age"
            type="number"
            variant="outlined"
            error={!!errors.age}
            helperText={errors.age?.message}
            fullWidth
            margin="normal"
          />
        )}
      />

      {/* Checkbox */}
      <Controller
        name="agree"
        control={control}
        render={({ field }) => (
          <FormControlLabel
            control={<Checkbox {...field} color="primary" />}
            label="I agree to the terms and conditions"
          />
        )}
      />

      {/* Select */}
      <Controller
        name="country"
        control={control}
        rules={{
          required: watchAgree
            ? "Country is required when you agree to the terms"
            : false,
        }}
        render={({ field }) => (
          <Select
            {...field}
            label="Country"
            variant="outlined"
            error={!!errors.country}
            fullWidth
            displayEmpty
            // margin="normal"
          >
            <MenuItem value="" disabled>
              Select your country
            </MenuItem>
            <MenuItem value="USA">USA</MenuItem>
            <MenuItem value="Canada">Canada</MenuItem>
            <MenuItem value="Japan">Japan</MenuItem>
          </Select>
        )}
      />
      {errors.country && (
        <p style={{ color: "red" }}>{errors.country.message}</p>
      )}

      {/* Submit Button */}
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Submit
      </Button>
    </form>
  );
};

export default MyForm;
