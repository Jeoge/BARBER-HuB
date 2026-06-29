"use client";

import { useState } from "react";

// 右下の投稿ボタン。「見る人が、いつでも投稿者になれる」入り口。
// MVPでは実際の投稿はせず、メニューが開くところまで。
const menu = [
  { icon: "📷", label: "写真を投稿", desc: "今日の仕事をシェア" },
  { icon: "💬", label: "質問する", desc: "みんなで解決" },
  { icon: "📰", label: "ニュースを共有", desc: "気になる業界の動き" },
  { icon: "🧑‍💼", label: "求人を出す", desc: "一緒に働く仲間を募集" },
];

export default function FloatingPostButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* 投稿ボタン本体 */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="投稿する"
        className="fixed bottom-20 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-pink text-white shadow-lg shadow-pink/40 transition hover:scale-105 active:scale-95"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor"
          strokeWidth="2.4" strokeLinecap="round" aria-hidden>
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </button>

      {/* 投稿メニュー（ボトムシート） */}
      {open && (
        <div className="fixed inset-0 z-50">
          <button
            type="button"
            aria-label="閉じる"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
          />
          <div className="absolute inset-x-0 bottom-0 mx-auto max-w-2xl rounded-t-3xl bg-paper p-5 pb-8 shadow-2xl">
            <div className="mx-auto mb-4 h-1.5 w-10 rounded-full bg-line" />
            <p className="mb-4 text-center text-base font-bold">投稿する</p>

            <ul className="space-y-2">
              {menu.map((m) => (
                <li key={m.label}>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="flex w-full items-center gap-4 rounded-2xl border border-line p-3 text-left transition hover:border-pink hover:bg-pink-soft/40"
                  >
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-pink-soft text-xl">
                      {m.icon}
                    </span>
                    <span>
                      <span className="block text-[15px] font-semibold">
                        {m.label}
                      </span>
                      <span className="block text-sm text-muted">{m.desc}</span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
