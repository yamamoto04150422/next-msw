Tanstack Query（旧 React Query）をNext.js（App Router）で導入する手順を以下に説明します。

### 1. パッケージのインストール

まず、Tanstack Queryのパッケージをプロジェクトにインストールします。

```bash
npm install @tanstack/react-query

npm install axios

```

また、`@tanstack/react-query-devtools` を使うことで、デバッグ用ツールも利用可能です。

```bash
npm install @tanstack/react-query-devtools
```

### 2. `QueryClient`のセットアップ

Tanstack Queryでは、`QueryClient`を使ってデータフェッチの設定やキャッシュを管理します。

#### `app/layout.tsx` でグローバルに設定

`QueryClientProvider` をラップすることで、アプリ全体でQuery Clientを使えるようにします。

```tsx
// app/layout.tsx
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
```

### 3. データのフェッチ処理

各コンポーネントで `useQuery` フックを使ってデータを取得します。

#### 例: APIからデータを取得するコンポーネント

```tsx
// app/page.tsx
import { useQuery } from "@tanstack/react-query";

const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

export default function HomePage() {
  const { data, error, isLoading } = useQuery(["posts"], fetchData);

  if (isLoading) return <div>Loading...</div>;
  if (error instanceof Error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
```

axios/ tanstack

```tsx
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

// AxiosでAPIリクエスト
const fetchPosts = async () => {
  const response = await axios.get("/api/posts");
  return response.data; // axiosはレスポンスの中にdataを含んでいる
};

export default function PostFetcher() {
  const [enabled, setEnabled] = useState(false); // ボタンを押したときのみフェッチするためのstate
  const { data, error, isLoading, refetch } = useQuery(["posts"], fetchPosts, {
    enabled: enabled, // 初期状態では無効化
  });

  // ボタンを押してデータをフェッチ
  const handleFetch = () => {
    setEnabled(true); // クエリを有効化
    refetch(); // データフェッチを手動でトリガー
  };

  return (
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
  );
}
```

### 4. Devtoolsの追加（任意）

開発環境では、Query Devtoolsを使うことでキャッシュの状態を視覚的に確認できます。

```tsx
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {process.env.NODE_ENV === "development" && <ReactQueryDevtools />}
    </QueryClientProvider>
  );
}
```

### 5. 自動リフェッチやキャッシュの設定（任意）

`useQuery`のオプションで、自動リフェッチやキャッシュの保持期間などを設定できます。

```tsx
const { data, error, isLoading } = useQuery(["posts"], fetchData, {
  staleTime: 1000 * 60 * 5, // 5分間キャッシュを保持
  refetchOnWindowFocus: false, // ウィンドウにフォーカスした時にリフェッチしない
});
```

### まとめ

1. `@tanstack/react-query` をインストール。
2. `QueryClientProvider` でラップしてクライアントを共有。
3. `useQuery` フックでデータフェッチを簡単に実装。
4. Devtoolsを使ってデバッグが可能。

この流れでTanstack Queryを導入でき、Next.jsのApp Routerと相性よく動作します。
