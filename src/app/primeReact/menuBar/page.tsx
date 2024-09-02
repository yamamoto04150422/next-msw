"use client";

import React from "react";
import { TieredMenu } from "primereact/tieredmenu";
import { useMenuItems } from "./menuItems";

export default function BasicDemo() {
  const items = useMenuItems(); // メニューアイテムを取得

  return <TieredMenu model={items} breakpoint="767px" />;
}
