import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0070f3",
    },
    secondary: {
      main: "#ff4081",
    },
    background: {
      default: "#f9f9f9",
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
    h1: {
      fontSize: "2rem",
    },
    body1: {
      fontSize: "1rem",
    },
  },
  components: {
    MuiGrid: {
      styleOverrides: {
        root: {
          // MuiGridのスタイルをオーバーライドして、24分割のグリッドレイアウトをサポート
          width: "100%", // グリッド全体の幅を100%に設定
          flexBasis: "auto", // 自動調整
        },
        item: {
          // アイテムごとの設定
          maxWidth: `calc(100% / 24)`, // 最大幅を24分割に設定
          flexGrow: 0, // サイズを固定
          flexShrink: 0, // サイズを縮めない
          flexBasis: `calc(100% / 24)`, // 基準幅を24分割に設定
        },
      },
    },
  },
});

export default theme;
