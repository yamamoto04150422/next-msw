"use client"; // クライアントサイドコンポーネントとして宣言

import React from "react";
import { useAtom } from "jotai";
import { Button } from "@mui/material";
import { userAuthenticatedAtom } from "../jotai/atom";

const AuthContent: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useAtom(userAuthenticatedAtom);

  const toggleAuth = () => setIsAuthenticated((prev) => !prev);

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <h1>ログイン中</h1>
          <Button variant="contained" color="secondary" onClick={toggleAuth}>
            ログアウト
          </Button>
        </div>
      ) : (
        <div>
          <h1>ログアウト中</h1>
          <Button variant="contained" color="primary" onClick={toggleAuth}>
            ログイン
          </Button>
        </div>
      )}
    </div>
  );
};

export default AuthContent;
