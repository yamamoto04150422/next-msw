"use client";

import GridLinesDemo from "../page";

export default function ViewPage() {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "stretch",
          height: "80vh",
          gap: "16px",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            // alignItems: "center",
            // justifyContent: "center",
            height: "100%",
            border: "1px solid #ddd",
            borderRadius: "8px",
            overflow: "auto",
          }}
        >
          <GridLinesDemo />
        </div>
        <div
          style={{
            flex: 1,
            border: "1px solid #000",
            borderRadius: "8px",
            padding: "8px",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxSizing: "border-box",
          }}
        >
          Content here
        </div>
      </div>
    </>
  );
}
