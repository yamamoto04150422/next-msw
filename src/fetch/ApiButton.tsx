// src/components/ApiButton.tsx
import React from "react";

const ApiButton: React.FC = () => {
  const fetchPosts = async () => {
    try {
      const response = await fetch("/api/posts");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log("Posts:", data);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  const createPost = async () => {
    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: 3, title: "New Post" }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log("Created Post:", data);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  const fetchPostById = async (id: number) => {
    try {
      const response = await fetch(`/api/posts/${id}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log("Fetched Post:", data);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  const updatePostById = async (id: number, title: string) => {
    try {
      const response = await fetch(`/api/posts/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log("Updated Post:", data);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  const createComment = async () => {
    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ postId: 1, content: "This is a comment" }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log("Created Comment:", data);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  return (
    <div>
      <button onClick={fetchPosts}>Fetch Posts</button>
      <button onClick={createPost}>Create Post</button>
      <button onClick={() => fetchPostById(1)}>Fetch Post by ID 1</button>
      <button onClick={() => updatePostById(1, "Updated Title")}>
        Update Post by ID 1
      </button>
      <button onClick={createComment}>Create Comment</button>
    </div>
  );
};

export default ApiButton;
