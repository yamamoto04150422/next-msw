import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0070f3", // メインのプライマリカラー
    },
    secondary: {
      main: "#ff4081", // メインのセカンダリカラー
    },
    background: {
      default: "#f9f9f9", // デフォルトの背景色
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif", // フォントファミリー
    h1: {
      fontSize: "2rem", // h1のフォントサイズ
    },
    body1: {
      fontSize: "1rem", // 通常のテキストのフォントサイズ
    },
  },
});

export default theme;
