"use client";

import React, { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/theme";
import "../app/styles/global.css";
import { Box } from "@mui/material";
import HeaderTop from "./components/HeaderTop";
import HeaderSide from "./components/HeaderSide";
import { PrimeReactProvider, addLocale, locale } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { LocaleJp } from "./custom/LocaleJp";
import { useEffectOnce } from "@/hooks/customHooks";
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // HeaderTopの高さとHeaderSideの幅を変数として管理
  const headerTopHeight = 64; // 例: 64px (必要に応じて調整)
  const headerSideWidth = 240; // 例: 240px (必要に応じて調整)

  // FOUC対策
  const [showScreen, setShowScreen] = useState(false);
  useEffectOnce(() => {
    setShowScreen(true);
  });

  // 日本語設定
  addLocale("jp", LocaleJp);

  locale("jp");

  return (
    <html lang="ja">
      <body>
        {showScreen && (
          <>
            {/* <PrimeReactProvider> */}
            <QueryClientProvider client={queryClient}>
              <ThemeProvider theme={theme}>
                <CssBaseline />
                {/* ヘッダーの配置 */}
                <HeaderTop />
                <Box sx={{ display: "flex" }}>
                  {/* サイドバー */}
                  <HeaderSide />
                  {/* メインコンテンツ領域 */}
                  <Box
                    component="main"
                    sx={{
                      flexGrow: 1,
                      padding: 3,
                      height: `calc(100vh - ${headerTopHeight}px)`, // HeaderTopの高さを引いた値を指定
                      marginTop: `${headerTopHeight}px`, // HeaderTopの高さ分だけマージンを設定
                      marginLeft: `${headerSideWidth}px`, // HeaderSideの幅分だけマージンを設定
                      overflowY: "auto", // コンテンツが溢れた場合のスクロール
                    }}
                  >
                    {children}
                  </Box>
                </Box>
                <footer>
                  {/* フッターの例 */}
                  <p>&copy; 2024 Your Company. All rights reserved.</p>
                </footer>
              </ThemeProvider>
              {/* </PrimeReactProvider> */}
              {process.env.NODE_ENV === "development" && <ReactQueryDevtools />}
            </QueryClientProvider>
          </>
        )}
      </body>
    </html>
  );
}
