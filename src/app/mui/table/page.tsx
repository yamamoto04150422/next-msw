"use client";

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Grid,
  Tooltip,
  MenuItem,
  Select,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
} from "@mui/material";

// バリデーションスキーマ
const schema = Yup.object().shape({
  office: Yup.string().required("営業所を入力してください"),
  department: Yup.string().required("部門を入力してください"),
  qualification: Yup.string().required("資格を入力してください"),
  remarks: Yup.string(),
  qualificationStatus: Yup.boolean(),
  qualificationContent: Yup.string().required("資格内容を選択してください"),
});

const HomePage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      office: "",
      department: "",
      qualification: "",
      qualificationStatus: false,
      qualificationContent: "",
      remarks: "",
    },
  });

  const [data, setData] = useState([
    {
      id: 1,
      office: "Tokyo",
      department: "Sales",
      qualification: "資格A",
      qualificationStatus: true,
      qualificationContent: "内容1",
      remarks: "備考1",
    },
    {
      id: 2,
      office: "Osaka",
      department: "HR",
      qualification: "資格B",
      qualificationStatus: false,
      qualificationContent: "内容2",
      remarks: "備考2",
    },
    // 他のモックデータ
  ]);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const onSubmit = (formData: any) => {
    const newData = [...data, { id: data.length + 1, ...formData }];
    setData(newData);
    reset(); // 追加後にフォームをリセット
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Controller
            name="office"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="営業所"
                fullWidth
                error={!!errors.office}
                helperText={errors.office?.message}
              />
            )}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Controller
            name="department"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="部門"
                fullWidth
                error={!!errors.department}
                helperText={errors.department?.message}
              />
            )}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Controller
            name="qualification"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="資格"
                fullWidth
                error={!!errors.qualification}
                helperText={errors.qualification?.message}
              />
            )}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Controller
            name="qualificationStatus"
            control={control}
            render={({ field }) => (
              <FormControlLabel
                control={<Checkbox {...field} checked={field.value} />}
                label="取得"
              />
            )}
          />
          <FormControlLabel control={<Checkbox />} label="未取得" />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Controller
            name="qualificationContent"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                label="資格内容"
                fullWidth
                error={!!errors.qualificationContent}
              >
                <MenuItem value="内容1">内容1</MenuItem>
                <MenuItem value="内容2">内容2</MenuItem>
                <MenuItem value="内容3">内容3</MenuItem>
              </Select>
            )}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Controller
            name="remarks"
            control={control}
            render={({ field }) => (
              <Tooltip title={field.value || "備考"}>
                <TextField
                  {...field}
                  label="備考"
                  fullWidth
                  error={!!errors.remarks}
                  helperText={errors.remarks?.message}
                />
              </Tooltip>
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ float: "right", marginRight: "10px" }}
          >
            一次保存
          </Button>
          <Button
            variant="contained"
            color="secondary"
            style={{ float: "right", marginRight: "10px" }}
            onClick={() => {
              handleSubmit(onSubmit)();
            }}
          >
            追加
          </Button>
        </Grid>
      </Grid>

      {/* テーブル表示 */}
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>営業所</TableCell>
              <TableCell>部門</TableCell>
              <TableCell>資格</TableCell>
              <TableCell>取得状況</TableCell>
              <TableCell>資格内容</TableCell>
              <TableCell>備考</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.office}</TableCell>
                  <TableCell>{row.department}</TableCell>
                  <TableCell>{row.qualification}</TableCell>
                  <TableCell>
                    {row.qualificationStatus ? "取得" : "未取得"}
                  </TableCell>
                  <TableCell>{row.qualificationContent}</TableCell>
                  <TableCell>{row.remarks}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* ページネーション */}
      <TablePagination
        component="div"
        count={data.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </form>
  );
};

export default HomePage;
