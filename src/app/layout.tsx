// src/app/layout.tsx
"use client";

import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/theme";
import "../app/styles/global.css";
import { Container } from "@mui/material";

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
          <Container maxWidth="lg">
            <header>
              <nav>
                {/* ナビゲーションメニューの例 */}
                <ul>
                  <li>
                    <a href="/">ホーム</a>
                  </li>
                  <li>
                    <a href="/about">アバウト</a>
                  </li>
                  <li>
                    <a href="/contact">コンタクト</a>
                  </li>
                </ul>
              </nav>
            </header>
            <main>{children}</main> {/* 子コンポーネントをレンダリング */}
            <footer>
              {/* フッターの例 */}
              <p>&copy; 2024 Your Company. All rights reserved.</p>
            </footer>
          </Container>
        </ThemeProvider>
      </body>
    </html>
  );
}
