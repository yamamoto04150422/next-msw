"use client";

import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";
import Counter from "./components/Counter";
import AuthContent from "./components/AuthContent";

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
        <h1>ホームページ useRouter</h1>
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
      <hr />
      <div>
        <h1>ホームページ Jotai</h1>
        <Counter />
        <AuthContent />
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
      <h1>
        <Link href="/table">table</Link>
      </h1>
      <h1>
        <Link href="/grid">grid</Link>
      </h1>
      <h1>
        <Link href="/gridCustom">gridCustom</Link>
      </h1>
      <h1>
        <Link href="/primeReact/download">primeReact/download</Link>
      </h1>
      <h1>
        <Link href="/primeReact/menuBar">primeReact/menuBar</Link>
      </h1>
      <h1>
        <Link href="/primeReact/table">primeReact/table</Link>
      </h1>
      <h1>
        <Link href="/mui/table">mui/table</Link>
      </h1>
      <h1>
        <Link href="/primeReact/validate">primeReact/validate</Link>
      </h1>
      <h1>
        <Link href="/simpleGrid">simpleGrid</Link>
      </h1>
      <h1>
        <Link href="/iphoneGrid">iphoneGrid</Link>
      </h1>
      <h1>
        <Link href="/primeReact/calendar">primeReact/calendar</Link>
      </h1>
    </main>
  );
}
