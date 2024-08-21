"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Button,
  Grid,
} from "@mui/material";

type FormValues = {
  firstName: string;
  gender: string;
  termsAccepted: boolean;
};

export default function MyFormWithGrid() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Controller
            name="firstName"
            control={control}
            defaultValue=""
            rules={{ required: "名前は必須です" }}
            render={({ field }) => (
              <TextField
                {...field}
                label="名前"
                variant="outlined"
                fullWidth
                error={!!errors.firstName}
                helperText={errors.firstName ? errors.firstName.message : ""}
              />
            )}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Controller
            name="gender"
            control={control}
            defaultValue=""
            rules={{ required: "性別を選択してください" }}
            render={({ field }) => (
              <Select
                {...field}
                label="性別"
                variant="outlined"
                fullWidth
                error={!!errors.gender}
              >
                <MenuItem value="">
                  <em>選択してください</em>
                </MenuItem>
                <MenuItem value="male">男性</MenuItem>
                <MenuItem value="female">女性</MenuItem>
                <MenuItem value="other">その他</MenuItem>
              </Select>
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <Controller
            name="termsAccepted"
            control={control}
            defaultValue={false}
            rules={{ required: "利用規約への同意が必要です" }}
            render={({ field }) => (
              <FormControlLabel
                control={
                  <Checkbox {...field} checked={field.value} color="primary" />
                }
                label="利用規約に同意します"
              />
            )}
          />
          {errors.termsAccepted && (
            <p style={{ color: "red" }}>{errors.termsAccepted.message}</p>
          )}
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained" color="primary" type="submit" fullWidth>
            送信
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
