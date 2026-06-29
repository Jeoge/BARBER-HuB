# BARBER HUB

成功を共有しよう。 — One Success. Shared Success.

理容師が毎朝開く「業界ポータル」BARBER HUB のMVPです。
AI編集部のデイリーブリーフ、注目記事、フィード、Q&A、講習会アーカイブ、求人などを
1枚のトップページにまとめています（スマホファースト）。
Next.js + React + TypeScript + Tailwind CSS で実装。

## 写真について（重要）

画像エリアは現在、印刷物風のプレースホルダ（デュオトーン）で表示しています。
本物の写真に差し替える方法は [`public/images/README.md`](public/images/README.md) を参照してください。
`public/images/` に写真を置き、`lib/data.ts` に `image` を1行足すだけで切り替わります。

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
