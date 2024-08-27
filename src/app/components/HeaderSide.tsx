// app/layout/components/HeaderSide.tsx
import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Link,
  Typography,
} from "@mui/material";

const HeaderSide: React.FC = () => {
  return (
    <Box
      sx={{
        position: "fixed", // スクロールしても固定表示
        top: 64, // 上部ヘッダーの高さ分下げる（64pxはAppBarのデフォルト高さ）
        left: 0,
        width: 200,
        height: "calc(100vh - 64px)", // ヘッダーの高さを引いた分の高さ
        backgroundColor: "white",
        borderRight: "1px solid #e0e0e0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 2,
      }}
    >
      <Typography variant="h6" gutterBottom>
        メニュー
      </Typography>
      <List component="nav">
        {["リンク1", "リンク2", "リンク3"].map((text, index) => (
          <ListItem key={index}>
            <Link href={`#${text}`} underline="none">
              <ListItemText primary={text} />
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default HeaderSide;
