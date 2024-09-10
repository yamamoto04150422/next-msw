"use client";
import React, { useState, useEffect } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";

const MyResponsiveSidebar = () => {
  const [visible, setVisible] = useState(false);
  const [isPC, setIsPC] = useState(false);

  // クライアント側でのみ画面サイズを判定する
  useEffect(() => {
    const handleResize = () => {
      setIsPC(window.innerWidth >= 1024);
    };

    // 初回レンダリング時のサイズをチェック
    handleResize();

    // リサイズ時に画面幅をチェックするイベントリスナーを追加
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Button
        icon="pi pi-bars"
        onClick={() => setVisible(!visible)}
        label="Toggle Sidebar"
      />

      {isPC ? (
        // PCの場合は左側に固定表示
        <div style={{ display: "flex" }}>
          {visible && (
            <div
              style={{
                width: "250px",
                backgroundColor: "#f4f4f4",
                height: "100vh",
                position: "fixed",
                left: 0,
                top: 0,
              }}
            >
              <Button
                icon="pi pi-times"
                onClick={() => setVisible(false)}
                label="Close"
              />
              <h3>Left Sidebar</h3>
            </div>
          )}
          <div
            style={{
              marginLeft: visible ? "250px" : "0",
              transition: "margin-left 0.3s",
            }}
          >
            <h1>Main Content</h1>
            <p>
              This is the main content area. The sidebar will push this content.
            </p>
          </div>
        </div>
      ) : (
        // モバイルの場合は通常のPrimeReact Sidebar
        <Sidebar visible={visible} onHide={() => setVisible(false)}>
          <h3>Sidebar Content</h3>
        </Sidebar>
      )}
    </div>
  );
};

export default MyResponsiveSidebar;
