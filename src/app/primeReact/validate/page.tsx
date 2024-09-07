"use client";

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Paginator } from "primereact/paginator";

// バリデーションスキーマ
const schema = Yup.object().shape({
  office: Yup.string().required("営業所を入力してください"),
  department: Yup.string().required("部門を入力してください"),
  qualification: Yup.string().required("資格を入力してください"),
  remarks: Yup.string(),
  qualificationStatus: Yup.boolean(),
  qualificationContent: Yup.string().required("資格内容を選択してください"),
});

// 初期データ
const initialData = [
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
  {
    id: 3,
    office: "Nagoya",
    department: "Marketing",
    qualification: "資格C",
    qualificationStatus: true,
    qualificationContent: "内容3",
    remarks: "備考3",
  },
  {
    id: 4,
    office: "Fukuoka",
    department: "Development",
    qualification: "資格D",
    qualificationStatus: false,
    qualificationContent: "内容4",
    remarks: "備考4",
  },
  {
    id: 5,
    office: "Sapporo",
    department: "Support",
    qualification: "資格E",
    qualificationStatus: true,
    qualificationContent: "内容5",
    remarks: "備考5",
  },
];

const HomePage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [data, setData] = useState(initialData);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const qualificationContentOptions = [
    { label: "内容1", value: "内容1" },
    { label: "内容2", value: "内容2" },
    { label: "内容3", value: "内容3" },
  ];

  const onSubmit = (formData: any) => {
    const newData = [...data, { id: data.length + 1, ...formData }];
    setData(newData);
  };

  const handlePageChange = (event: any) => {
    setPage(event.page);
    setRowsPerPage(event.rows);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="p-fluid grid">
        <div className="field col-12 md:col-6">
          <Controller
            name="office"
            control={control}
            render={({ field }) => (
              <>
                <label>営業所</label>
                <InputText
                  {...field}
                  value={field.value || ""} // undefinedやnullを避ける
                  placeholder="営業所"
                  className={`${errors.office ? "p-invalid" : ""} custom-input`} // カスタムクラスを追加
                />
                <div className="p-error" style={{ minHeight: "1.5rem" }}>
                  {errors.office && errors.office.message}
                </div>
              </>
            )}
          />
        </div>

        <div className="field col-12 md:col-6">
          <Controller
            name="department"
            control={control}
            render={({ field }) => (
              <>
                <label>部門</label>
                <InputText
                  {...field}
                  value={field.value || ""}
                  placeholder="部門"
                  className={`${errors.department ? "p-invalid" : ""} custom-input`}
                />
                <div className="p-error" style={{ minHeight: "1.5rem" }}>
                  {errors.department && errors.department.message}
                </div>
              </>
            )}
          />
        </div>

        <div className="field col-12 md:col-6">
          <Controller
            name="qualification"
            control={control}
            render={({ field }) => (
              <>
                <label>資格</label>
                <InputText
                  {...field}
                  value={field.value || ""}
                  placeholder="資格"
                  className={`${errors.qualification ? "p-invalid" : ""} custom-input`}
                />

                <div className="p-error" style={{ minHeight: "1.5rem" }}>
                  {errors.qualification && errors.qualification.message}
                </div>
              </>
            )}
          />
        </div>

        <div className="field col-12 md:col-6">
          <Controller
            name="qualificationStatus"
            control={control}
            render={({ field }) => (
              <>
                <label>取得</label>
                <Checkbox
                  {...field}
                  checked={field.value != undefined && field.value}
                />
              </>
            )}
          />
        </div>

        <div className="field col-12 md:col-6">
          <Controller
            name="qualificationContent"
            control={control}
            render={({ field }) => (
              <>
                <label>資格内容</label>
                <Dropdown
                  {...field}
                  options={qualificationContentOptions}
                  placeholder="資格内容を選択"
                  className={errors.qualificationContent ? "p-invalid" : ""}
                />
                <div className="p-error" style={{ minHeight: "1.5rem" }}>
                  {errors.qualificationContent &&
                    errors.qualificationContent.message}
                </div>
              </>
            )}
          />
        </div>

        <div className="field col-12 md:col-6">
          <Controller
            name="remarks"
            control={control}
            render={({ field }) => (
              <>
                <label>備考</label>
                <InputText
                  {...field}
                  value={field.value || ""}
                  placeholder="備考"
                />
              </>
            )}
          />
        </div>

        <div className="col-12">
          <Button
            label="一次保存"
            className="p-button-primary"
            style={{ marginRight: "10px" }}
            type="button"
          />
          <Button label="追加" className="p-button-secondary" type="submit" />
        </div>
      </div>

      {/* DataTable */}
      <DataTable value={data} paginator={false} responsiveLayout="scroll">
        <Column field="office" header="営業所" />
        <Column field="department" header="部門" />
        <Column field="qualification" header="資格" />
        <Column
          field="qualificationStatus"
          header="取得状況"
          body={(rowData) => (rowData.qualificationStatus ? "取得" : "未取得")}
        />
        <Column field="qualificationContent" header="資格内容" />
        <Column field="remarks" header="備考" />
      </DataTable>

      {/* Paginator */}
      <Paginator
        first={page * rowsPerPage}
        rows={rowsPerPage}
        totalRecords={data.length}
        onPageChange={handlePageChange}
      />
    </form>
  );
};

export default HomePage;
