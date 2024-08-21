import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
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
