"use client";

import { useState } from "react";

const FetchDataButton = () => {
  const [message, setMessage] = useState<string>("");

  const handleFetch = async () => {
    try {
      const res = await fetch("/api/hello");
      if (!res.ok) {
        throw new Error("Failed to fetch");
      }
      const data = await res.json();
      setMessage(data.message); // APIから返ってきたメッセージを表示
    } catch (error) {
      setMessage("Error fetching data");
    }
  };

  return (
    <div>
      <button onClick={handleFetch}>Fetch API Data</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default FetchDataButton;
