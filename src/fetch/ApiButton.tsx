// src/components/ApiButton.tsx
import { apiRequest } from "@/mocks/api";
import { Post } from "@/mocks/handlers";
import React from "react";

const ApiButton: React.FC = () => {
  const fetchPosts = async () => {
    try {
      const posts = await apiRequest<Post[]>({
        method: "GET",
        url: "/api/posts",
      });
      console.log("Posts:", posts);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  const createPost = async () => {
    try {
      const newPost = await apiRequest<Post>({
        method: "POST",
        url: "/api/posts",
        body: { id: 3, title: "New Post" },
      });
      console.log("Created Post:", newPost);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  const fetchPostById = async (id: number) => {
    try {
      const post = await apiRequest<Post>({
        method: "GET",
        url: `/api/posts/${id}`,
      });
      console.log("Fetched Post:", post);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  const updatePostById = async (id: number, title: string) => {
    try {
      const updatedPost = await apiRequest<Post>({
        method: "PUT",
        url: `/api/posts/${id}`,
        body: { title },
      });
      console.log("Updated Post:", updatedPost);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  const createComment = async () => {
    try {
      const newComment = await apiRequest<Comment>({
        method: "POST",
        url: "/api/comments",
        body: { postId: 1, content: "This is a comment" },
      });
      console.log("Created Comment:", newComment);
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
