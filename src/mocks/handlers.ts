// src/mocks/handlers.ts
import { http, HttpResponse } from "msw";

export type Post = {
  id: number;
  title: string;
};

interface Comment {
  postId: string; // または number
  content: string;
}

// モックイベントハンドラの定義
export const handlers = [
  http.get("/api/posts", ({}) => {
    const posts: Post[] = [
      { id: 1, title: "First Post" },
      { id: 2, title: "Second Post" },
    ];
    return HttpResponse.json(posts);
  }),

  http.post("/api/posts", ({ request, params, cookies }) => {
    const { id, title } = request.body as unknown as Post;
    const newPost: Post = { id, title };
    return HttpResponse.json(newPost, { status: 201 });
  }),

  http.post("/api/comments", ({ request }) => {
    const { postId, content } = request.body as unknown as Comment;
    const newComment: Comment = { postId, content };
    return HttpResponse.json(newComment, { status: 201 });
  }),
  http.get("/api/posts/:id", ({ params }) => {
    const id = parseInt(params.id as string, 10); // params.id を number に変換
    if (isNaN(id)) {
      return HttpResponse.json({ error: "Invalid ID" }, { status: 400 });
    }
    // 仮にこのデータがサーバーから取得されたものだと仮定します
    const post: Post = { id, title: "Sample Post" };
    return HttpResponse.json(post, { status: 200 });
  }),
  http.put("/api/posts/:id", ({ request, params }) => {
    const id = parseInt(params.id as string, 10); // params.id を number に変換
    if (isNaN(id)) {
      return HttpResponse.json({ error: "Invalid ID" }, { status: 400 });
    }
    const { title } = request.body as unknown as Post;
    // 仮にこのデータが更新されたものだと仮定します
    const updatedPost: Post = { id, title };
    return HttpResponse.json(updatedPost, { status: 200 });
  }),
];
