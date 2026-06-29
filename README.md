# BARBER HUB

One Success. Shared Success.

理容業界向けプラットフォーム「BARBER HUB」のMVPです。
スマホで開けるトップページを Next.js + React + TypeScript + Tailwind CSS で実装しています。

## 必要なもの

- [Node.js](https://nodejs.org/) 18 以上（推奨: 20 / 22）

## はじめ方（ローカルで動かす）

1. 必要な部品をインストールします（最初の1回だけ）

   ```bash
   npm install
   ```

2. 開発サーバーを起動します

   ```bash
   npm run dev
   ```

3. ブラウザで次のURLを開きます

   <http://localhost:3000>

   スマホで確認する場合は、同じWi-Fi内のスマホから
   `http://（PCのIPアドレス）:3000` を開いてください。

## その他のコマンド

| コマンド         | 内容                                   |
| ---------------- | -------------------------------------- |
| `npm run dev`    | 開発用サーバーを起動（編集が即反映）   |
| `npm run build`  | 本番用にビルド（公開前の最終チェック） |
| `npm run start`  | ビルド済みのものを起動                 |

## フォルダ構成

```
app/
├─ layout.tsx    # 全ページ共通の枠組み（タイトルや言語設定など）
├─ page.tsx      # トップページの中身
└─ globals.css   # 全体の色・フォントなどの設定
```

## 技術スタック

- Next.js 15（App Router）
- React 19
- TypeScript
- Tailwind CSS v4
