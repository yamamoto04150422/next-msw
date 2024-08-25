// next-basic/app/contact/page.tsx

"use client"; // クライアントサイドコンポーネントとして宣言

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";

const ContactPage: React.FC = () => {
  const router = useRouter();

  const goHome = () => {
    router.push("/"); // ホームページに戻る
  };

  return (
    <div>
      <h1>Contactページ</h1>
      <p>お問い合わせはこちらのページからどうぞ。</p>
      <Button variant="contained" color="primary" onClick={goHome}>
        ホームに戻る
      </Button>
    </div>
  );
};

export default ContactPage;
