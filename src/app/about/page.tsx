// next-basic/app/about/page.tsx

"use client"; // クライアントサイドコンポーネントとして宣言

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";

const AboutPage: React.FC = () => {
  const router = useRouter();

  const goBack = () => {
    router.back(); // 以前のページに戻る
  };

  return (
    <div>
      <h1>Aboutページ</h1>
      <p>このページは、当サイトの情報を提供します。</p>
      <Button variant="contained" onClick={goBack}>
        戻る
      </Button>
    </div>
  );
};

export default AboutPage;
