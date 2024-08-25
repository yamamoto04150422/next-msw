"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";

export default function Home() {
  const router = useRouter();

  const navigateToAbout = () => {
    router.push("/about"); // 「About」ページへ遷移
  };

  const navigateToContact = () => {
    router.push("/contact"); // 「Contact」ページへ遷移
  };
  return (
    <main className={styles.main}>
      <div>
        <h1>ホームページ</h1>
        <Button variant="contained" color="primary" onClick={navigateToAbout}>
          Aboutページへ
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={navigateToContact}
          style={{ marginLeft: "10px" }}
        >
          Contactページへ
        </Button>
      </div>
      <h1>
        <Link href="/api">/api</Link>
      </h1>
      <h1>
        <Link href="/fooksform/basic">fooksform/basic</Link>
      </h1>
      <h1>
        <Link href="/fooksform/dynamic">fooksform/dynamic</Link>
      </h1>
      <h1>
        <Link href="/fooksform/validate">fooksform/validate</Link>
      </h1>
      <h1>
        <Link href="/fooksform/formWithReset">fooksform/formWithReset</Link>
      </h1>
      <h1>
        <Link href="/fooksform/usecontroller">fooksform/usecontroller</Link>
      </h1>
      <h1>
        <Link href="/fooksform/usecontroller/grid">
          fooksform/usecontroller/grid
        </Link>
      </h1>
    </main>
  );
}
