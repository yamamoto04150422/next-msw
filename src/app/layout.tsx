// src/app/layout.tsx
"use client";

import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/theme";
import "../app/styles/global.css";
import { Box, Container } from "@mui/material";
import HeaderTop from "./components/HeaderTop";
import HeaderSide from "./components/HeaderSide";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {/* 既存のレイアウトやコンポーネント */}
          <HeaderTop />
          <Box sx={{ display: "flex" }}>
            <HeaderSide />
            <Box component="main" sx={{ flexGrow: 1, padding: 3 }}>
              {children}
            </Box>
          </Box>
          <main>{children}</main> {/* 子コンポーネントをレンダリング */}
          <footer>
            {/* フッターの例 */}
            <p>&copy; 2024 Your Company. All rights reserved.</p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
