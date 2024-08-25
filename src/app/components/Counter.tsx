"use client"; // クライアントサイドコンポーネントとして宣言

import React from "react";
import { useAtom } from "jotai";
import { Button } from "@mui/material";
import { countAtom } from "../jotai/atom";

const Counter: React.FC = () => {
  const [count, setCount] = useAtom(countAtom);

  return (
    <div>
      <h1>カウンター: {count}</h1>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setCount((prev) => prev + 1)}
      >
        増加
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        onClick={() => setCount((prev) => prev - 1)}
        style={{ marginLeft: "10px" }}
      >
        減少
      </Button>
    </div>
  );
};

export default Counter;
