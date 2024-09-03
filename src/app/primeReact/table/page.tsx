"use client";

import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

interface Product {
  id: string;
  code: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
  quantity: string;
  inventoryStatus: string;
  rating: number;
}

const mockData: Product[] = [
  {
    id: "1001",
    code: "P1001",
    name: "Bamboo Watch",
    description: "Product Description",
    image: "bamboo-watch.jpg",
    price: 65,
    category: "Accessories",
    quantity: "24",
    inventoryStatus: "INSTOCK",
    rating: 5,
  },
  {
    id: "1002",
    code: "P1002",
    name: "Black Watch",
    description: "Product Description",
    image: "black-watch.jpg",
    price: 72,
    category: "Accessories",
    quantity: "61",
    inventoryStatus: "INSTOCK",
    rating: 4,
  },
  {
    id: "1003",
    code: "P1003",
    name: "Blue Band",
    description: "Product Description",
    image: "blue-band.jpg",
    price: 79,
    category: "Fitness",
    quantity: "2",
    inventoryStatus: "LOWSTOCK",
    rating: 3,
  },
  {
    id: "1004",
    code: "P1004",
    name: "Blue T-Shirt",
    description: "Product Description",
    image: "blue-t-shirt.jpg",
    price: 29,
    category: "Clothing",
    quantity: "25",
    inventoryStatus: "INSTOCK",
    rating: 5,
  },
  {
    id: "1005",
    code: "P1005",
    name: "Bracelet",
    description: "Product Description",
    image: "bracelet.jpg",
    price: 15,
    category: "Accessories",
    quantity: "73",
    inventoryStatus: "INSTOCK",
    rating: 4,
  },
];

const defaultEmptyRows: Product[] = Array(11).fill({
  id: "",
  code: "",
  name: "",
  description: "",
  image: "",
  price: 0,
  category: "",
  quantity: "",
  inventoryStatus: "",
  rating: 0,
});

export default function GridLinesDemo() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    // モックデータと空の行を組み合わせてデフォルトで10件表示
    setProducts([...mockData, ...defaultEmptyRows]);
  }, []);

  const onSelectionChange = (e: any) => {
    setSelectedProduct(e.value as Product);
  };

  return (
    <div className="card">
      <DataTable
        value={products}
        showGridlines
        tableStyle={{ minWidth: "50rem" }}
        rowHover
        selectionMode="single"
        selection={selectedProduct}
        onSelectionChange={onSelectionChange}
      >
        <Column field="code" header="Code"></Column>
        <Column field="name" header="Name"></Column>
        <Column field="category" header="Category"></Column>
        <Column field="quantity" header="Quantity"></Column>
      </DataTable>
      <p>
        {selectedProduct
          ? `Selected Product: ${selectedProduct.name} (Code: ${selectedProduct.code}, Quantity: ${selectedProduct.quantity})`
          : "No product selected"}
      </p>
    </div>
  );
}
