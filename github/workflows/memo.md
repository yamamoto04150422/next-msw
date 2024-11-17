以下は、提供いただいた内容をMarkdown形式で整形したものです。

# GitHub Actions の概要

## 基本的な流れ

1. プルリクエストで実行されることが多い。
2. 主な手順は以下の通り:
   - チェックアウト
   - 言語のセットアップ
   - テストの実行

## 料金の概要

- **キャッシュの有効化**  
  セットアップアクション時にキャッシュを有効化することで、次回以降のワークフローで参照可能となり、高速化が図れる。

- **料金の注意点**  
  1分単位、ジョブ単位で料金が発生する。

---

## タイムアウトの設定

- デフォルトのタイムアウトは **最大360分**。
- 常に明示的にタイムアウトを設定することを推奨。
  ```yaml
  timeout-minutes: 1 # 1分
  ```

## デフォルトシェルの設定

- 原則、デフォルトシェルを定義する。
- `pipefail` を有効化して、パイプエラーを拾えるようにする。
  ```yaml
  defaults:
    run:
      shell: bash
  ```

---

## ログ

### ステップバックログ

- `bash` のトレースオプションを有効化する例:
  ```yaml
  steps:
    - run: |
        set -x
        date
        hostname
  ```

### グループ化

- ログのグループ化例:
  ```plaintext
  ::group::<group-name>
  <ログ内容>
  ::endgroup::
  ```

## レポーティング

- アノテーションを利用して、エラーや警告、通知を記録可能。
  ```plaintext
  ::error::エラーメッセージ
  ::warning::警告メッセージ
  ::notice::通知メッセージ
  ```

## マトリックス構成

- マトリックスを使用して複数の環境でジョブを実行可能。
  ```yaml
  strategy:
    matrix:
      os: [ubuntu-latest, windows-latest]
  ```

---

## 複数ジョブの実行

- デフォルトでは **並列実行**。
- 依存関係がある場合は逐次実行を設定。

---

## キャッシュ

### 制限

- **キャッシュの保存期間**: 7日以上アクセスされていないキャッシュは自動削除。
- **合計サイズ制限**: 各リポジトリ10GBまで。
- 手動またはCLIでのキャッシュ管理も可能。

### アクション

- キャッシュの保存と復元:

  ```yaml
  uses: actions/cache@v3
  ```

- 保存のみ:

  ```yaml
  uses: actions/cache/save@v3
  ```

- 復元のみ:
  ```yaml
  uses: actions/cache/restore@v3
  ```

### キャッシュキーの設計例

1. OSレベルで分離:

   ```yaml
   key: example-${{ runner.os }}-${{ runner.arch }}
   ```

2. 依存関係を更新したときにキャッシュを更新:
   ```yaml
   key: node-${{ runner.os }}-${{ hashFiles('**/package-lock.json') }}
   restore-key: |
     node-${{ runner.os }}-
   ```

---

## アーティファクト

### アップロード

- アーティファクトのアップロード:
  ```yaml
  uses: actions/upload-artifact@v4
  with:
    name: namekey
    path: filepath
    retention-days: 7
  ```

### ダウンロード

- アーティファクトのダウンロード:

  ```yaml
  uses: actions/download-artifact@v4
  with:
    name: namekey
    path: filepath
  ```

- **注意**: ブラウザでダウンロードする場合のみ、ZIP形式で圧縮される。
