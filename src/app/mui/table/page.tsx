"use client";

import React, { useState } from "react";
import { useForm, useController } from "react-hook-form";
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

// 型定義
interface FormData {
  office: string;
  department: string;
  qualification: string;
  qualificationStatus: boolean;
  qualificationContent: string;
  remarks?: string;
}

// モックデータ型
interface TableRowData extends FormData {
  id: number;
}

// バリデーションスキーマ
const schema = Yup.object().shape({
  office: Yup.string().required("営業所を入力してください"),
  department: Yup.string().required("部門を入力してください"),
  qualification: Yup.string().required("資格を入力してください"),
  remarks: Yup.string(),
  qualificationStatus: Yup.boolean(),
  qualificationContent: Yup.string().required("資格内容を選択してください"),
});

// useControllerを使用したテキストフィールドコンポーネント
const ControlledTextField: React.FC<{
  name: keyof FormData;
  control: any;
  label: string;
  placeholder?: string;
}> = ({ name, control, label, placeholder }) => {
  const {
    field,
    fieldState: { invalid },
  } = useController({
    name,
    control,
    rules: { required: true },
  });

  return (
    <TextField
      {...field}
      label={label}
      placeholder={placeholder}
      error={invalid}
      helperText={invalid ? `${label}は必須です` : ""}
      fullWidth
    />
  );
};

// useControllerを使用したチェックボックスコンポーネント
const ControlledCheckbox: React.FC<{
  name: keyof FormData;
  control: any;
  label: string;
}> = ({ name, control, label }) => {
  const { field } = useController({
    name,
    control,
  });

  return (
    <FormControlLabel
      control={<Checkbox {...field} checked={field.value} />}
      label={label}
    />
  );
};

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
          <ControlledTextField
            name="office"
            control={control}
            label="営業所"
            placeholder="営業所を入力"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <ControlledTextField
            name="department"
            control={control}
            label="部門"
            placeholder="部門を入力"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <ControlledTextField
            name="qualification"
            control={control}
            label="資格"
            placeholder="資格を入力"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <ControlledCheckbox
            name="qualificationStatus"
            control={control}
            label="取得"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <ControlledTextField
            name="qualificationContent"
            control={control}
            label="資格内容"
            placeholder="資格内容を選択"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Tooltip title="備考">
            <ControlledTextField
              name="remarks"
              control={control}
              label="備考"
              placeholder="備考を入力"
            />
          </Tooltip>
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
