"use client";

import { MenuItem } from "primereact/menuitem";
import { useRouter } from "next/navigation";

export const useMenuItems = (): MenuItem[] => {
  const router = useRouter();

  const items: MenuItem[] = [
    {
      label: "File",
      icon: "pi pi-file",
      items: [
        {
          label: "New",
          icon: "pi pi-plus",
          items: [
            {
              label: "Document",
              icon: "pi pi-file",
            },
            {
              label: "Image",
              icon: "pi pi-image",
            },
            {
              label: "Video",
              icon: "pi pi-video",
            },
          ],
        },
        {
          label: "Open",
          icon: "pi pi-folder-open",
        },
        {
          label: "Print",
          icon: "pi pi-print",
        },
      ],
    },
    {
      label: "Edit",
      icon: "pi pi-file-edit",
      items: [
        {
          label: "Copy",
          icon: "pi pi-copy",
        },
        {
          label: "Delete",
          icon: "pi pi-times",
        },
      ],
    },
    {
      label: "home",
      icon: "pi pi-search",
      command: () => {
        router.push("/");
      },
    },
    {
      separator: true,
    },
    {
      label: "Share",
      icon: "pi pi-share-alt",
      items: [
        {
          label: "Slack",
          icon: "pi pi-slack",
        },
        {
          label: "download",
          icon: "pi pi-whatsapp",
          command: () => {
            router.push("/primeReact/download");
          },
        },
      ],
    },
  ];

  return items;
};
