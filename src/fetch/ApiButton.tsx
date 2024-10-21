// src/components/ApiButton.tsx
import { apiRequest } from "@/mocks/api";
import { Post } from "@/mocks/handlers";
import React, { useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const response = await axios.get("/api/posts");
  return response.data; // axiosはレスポンスの中にdataを含んでいる
};
const ApiButton: React.FC = () => {
  const [enabled, setEnabled] = useState(false); // ボタンを押したときのみフェッチするためのstate

  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["posts"], // queryKeyとqueryFnをオブジェクトとしてまとめる
    queryFn: fetchPosts, // フェッチ関数
    enabled: enabled, // 初期状態では無効化
  });

  const handleFetch = () => {
    setEnabled(true); // クエリを有効化
    refetch(); // データフェッチを手動でトリガー
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
    <>
      <div>
        <button onClick={fetchPosts}>Fetch Posts</button>
        <button onClick={createPost}>Create Post</button>
        <button onClick={() => fetchPostById(1)}>Fetch Post by ID 1</button>
        <button onClick={() => updatePostById(1, "Updated Title")}>
          Update Post by ID 1
        </button>
        <button onClick={createComment}>Create Comment</button>
      </div>
      <div>
        <button onClick={handleFetch}>Fetch Posts</button>

        {isLoading && <p>Loading...</p>}
        {error && (
          <p>There was a problem with the fetch operation: {error.message}</p>
        )}

        {data && (
          <ul>
            {data.map((post: any) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default ApiButton;
