"use client";
import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";

const HeaderTop: React.FC = () => {
  return (
    <AppBar
      position="fixed" // スクロールしても固定表示
      sx={{
        backgroundColor: "white",
        color: "black",
        zIndex: (theme) => theme.zIndex.drawer + 1, // サイドバーより前面に表示
      }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1 }} />
        <img
          src="next.svg"
          alt="Logo"
          style={{ height: 40, marginRight: 16 }}
        />
        <Typography variant="h6" component="div">
          ユーザー名
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderTop;
