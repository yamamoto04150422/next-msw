"use client";

import React, { useState } from "react";
import { TreeTable, TreeTableSelectionKeysType } from "primereact/treetable";
import { Column } from "primereact/column";
import { TreeNode } from "primereact/treenode";

const TreeTableDemo = () => {
  // TreeTable のデータ
  const [nodes, setNodes] = useState<TreeNode[]>([
    {
      key: "0",
      data: { estimateNumber: "E001" },
      children: [
        {
          key: "0-0",
          data: { startDate: "2024-01-01", endDate: "2024-01-15" },
          children: [
            {
              key: "0-0-0",
              data: {
                estimateNumber: "E001-1",
                jpName: "商品A",
                kanaName: "しょうひんA",
              },
            },
            {
              key: "0-0-1",
              data: {
                estimateNumber: "E001-2",
                jpName: "商品B",
                kanaName: "しょうひんB",
              },
            },
          ],
        },
      ],
    },
    {
      key: "1",
      data: { estimateNumber: "E002" },
      children: [
        {
          key: "1-0",
          data: { startDate: "2024-02-01", endDate: "2024-02-15" },
          children: [
            {
              key: "1-0-0",
              data: {
                estimateNumber: "E002-1",
                jpName: "商品C",
                kanaName: "しょうひんC",
              },
            },
          ],
        },
      ],
    },
  ]);

  // チェックボックスで選択されたノードの状態管理
  const [selectedNodes, setSelectedNodes] =
    useState<TreeTableSelectionKeysType | null>(null);

  // ヘッダー部分
  const header = (
    <div>
      <h3>三階層目のデータ</h3>
    </div>
  );

  // チェックボックスの制御（3階層目には選択不可）
  const isSelectable = (node: TreeNode): boolean => {
    return node.children !== undefined;
  };

  return (
    <TreeTable
      value={nodes}
      header={header}
      selectionMode="checkbox"
      selectionKeys={selectedNodes}
      onSelectionChange={(e) =>
        setSelectedNodes(e.value as TreeTableSelectionKeysType)
      }
      rowClassName={(node) => ({
        "p-disabled": !isSelectable(node), // 3階層目に対して無効クラスを適用
      })}
    >
      <Column field="estimateNumber" header="見積もり番号" expander></Column>
      <Column
        field="startDate"
        header=""
        body={(node) => node.data.startDate}
      ></Column>{" "}
      {/* 2階層目のヘッダーを空に設定 */}
      <Column
        field="endDate"
        header=""
        body={(node) => node.data.endDate}
      ></Column>{" "}
      {/* 2階層目のヘッダーを空に設定 */}
      {/* <Column field="estimateNumber" header="見積もり番号"></Column> */}
      <Column field="jpName" header="日本語名"></Column>
      <Column field="kanaName" header="かなめい"></Column>
    </TreeTable>
  );
};

export default TreeTableDemo;
