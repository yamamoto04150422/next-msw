"use client";

import Image from "next/image";
import "./grid.css";

export default function page() {
  return (
    <>
      <h2>ifr 比率</h2>
      <div>超基本</div>
      <Image src={"/grid/Sec01-1.png"} alt="AA" width={400} height={200} />
      <div className="containerA">
        <div className="itemAA">ietmAA</div>
        <div className="itemAB">itemAB</div>
        <div className="itemAC">itemAC</div>
      </div>
      <h2>少し基本</h2>
      <Image src={"/grid/Sec02-1.png"} alt="BA" width={400} height={200} />
      <div className="containerB">
        <header className="headerB">header</header>
        <div className="navB">nav</div>
        <div className="aside1B">aside1</div>
        <div className="mainB">main</div>
        <div className="aside2B">aside2</div>
        <footer className="footerB">footer</footer>
      </div>
      <hr />
      <h2>gapとcontainerCからの省略記載法</h2>
      <p>cssの記述がかなり減った</p>
      <div className="containerC">
        <header className="headerC">header</header>
        <div className="aside1C">aside1</div>
        <div className="mainC">main</div>
        <div className="aside2C">aside2</div>
        <footer className="footerC">footer</footer>
      </div>
    </>
  );
}
