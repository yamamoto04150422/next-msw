1. next js
1. mock service worker
1. Jest && React-Testing-Library
1. eslint && prettier
1. 状態管理　jotai
1. material　UI　and UseController
1. theme global.css共存

# 対象コミット

https://github.com/yamamoto04150422/next-msw/commit/0f4e5bb4608d6090a745388b35963546f4bca7e5

# 参考リンク

https://github.com/mswgit remote add originjs/msw/issues/1877

## msw 導入手順

```bash
1. npm install msw --save-dev
1. npx msw init public/ --save
```

## 状態管理ライブラリ

| ライブラリ名 | 学習コスト | 開発規模                   | 特徴                                                                                                           | GitHub の更新頻度 | コミュニティサポート | パフォーマンス | 拡張性     | エコシステムとプラグイン |
| ------------ | ---------- | -------------------------- | -------------------------------------------------------------------------------------------------------------- | ----------------- | -------------------- | -------------- | ---------- | ------------------------ |
| Redux        | 高い       | 大規模プロジェクト向け     | グローバルな状態管理、厳密なアクションとリデューサーパターン、ミドルウェアのサポート、Redux Toolkit での簡略化 | 高い              | 高い                 | 中〜高         | 非常に高い | 非常に充実               |
| Recoil       | 中程度     | 中〜大規模プロジェクト向け | コンポーネント単位の状態管理、簡潔な API、非同期状態のサポート、React の依存関係を最小限に                     | 中程度            | 高い                 | 高             | 高い       | まだ発展途上             |
| Zustand      | 低い       | 小〜中規模プロジェクト向け | シンプルで軽量、ボイラープレートが少ない、React のコンテキストを使用せずにグローバル状態を管理                 | 高い              | 中程度               | 非常に高       | 中〜高     | 十分なエコシステム       |
| Jotai        | 低い       | 小〜中規模プロジェクト向け | 最小限のボイラープレート、フレキシブルな状態管理、非同期状態や React Server Components に対応                  | 高い              | 中程度               | 非常に高       | 高い       | 発展途上                 |

1. 学習コスト: 初学者がそのライブラリを習得するのにどれだけの時間や労力がかかるかを示します。
1. 開発規模: ライブラリが適しているプロジェクトの規模を示します。
1. 特徴: ライブラリの主な機能や利点を要約しています。
   GitHub の更新頻度: リポジトリの活発さと、ライブラリの維持・進化の度合いを示します。
1. コミュニティサポート: ドキュメント、チュートリアル、フォーラムなどのリソースの充実度を示します。
   パフォーマンス: ライブラリがアプリケーションのパフォーマンスに与える影響を示します。
1. 拡張性: ライブラリがプロジェクトの規模の拡大や新しい要件にどれだけ対応できるかを示します。
1. エコシステムとプラグイン: 状態管理ライブラリと共に使用できるツールやプラグインの充実度を示します。

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## prettierを追加

eslint-config-prettier:

これは、ESLint と Prettier の競合を避けるための設定を提供します。ESLint のいくつかのルールは Prettier のルールと衝突することがあるので、この設定を使うことで、ESLint が Prettier のルールを上書きしないようにします。

eslint-plugin-prettier:
これは、ESLint の中で Prettier を実行できるようにするプラグインです。Prettier のルールを ESLint のルールとして扱い、コードが Prettier のフォーマットに従っているかどうかをチェックします。

```bash

npm install --save-dev eslint-config-prettier eslint-plugin-prettier

```

## Jest React-Testing-Library　追加

```bash

npm i -D jest @testing-library/react @types/jest @testing-library/jest-dom @testing-library/dom  @testing-library/user-event jest-css-modules

npm install ts-node --save-dev

npm install jest-environment-jsdom --save-dev


```

## 環境変数について

https://qiita.com/ktanoooo/items/64cad61096cf45f18c24

## react fooks form

npm install react-hook-form

## material　UI　and UseController

npm install @mui/material @emotion/react @emotion/styled @mui/icons-material

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
