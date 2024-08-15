// src/types.ts

// 投稿 (Post) 型
export interface Post {
  id: number;
  title: string;
  content: string;
  createdAt: string; // 作成日
  author: string; // 作成者
  comments?: Comment[]; // コメント (オプショナル)
}

// コメント (Comment) 型
export interface Comment {
  postId: number;
  content: string;
  author: string;
  createdAt: string;
}
