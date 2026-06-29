"use client";

import { useEffect, useState } from "react";
import { articles } from "@/lib/data";
import CoverImage from "./CoverImage";
import ThanksBadge from "./ThanksBadge";
import SectionHeading from "./SectionHeading";
import { CommentIcon, ChevronRightIcon } from "./icons";

// 業界TOPICS（メイン記事）。全面の写真に文字を重ねる雑誌風ヒーロー。
// 「開くたびに少し変わる」を表現するため、表示時にランダムな1本を選ぶ。
export default function MainFeature() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(Math.floor(Math.random() * articles.length));
  }, []);

  const article = articles[index];

  return (
    <section className="pt-4">
      {/* ヒーロー */}
      <div className="px-4">
        <div className="mx-auto max-w-2xl">
          <button
            type="button"
            onClick={() => setIndex((i) => (i + 1) % articles.length)}
            className="block w-full overflow-hidden rounded-3xl text-left transition active:scale-[0.99]"
          >
            <CoverImage
              tone={article.tone}
              src={article.image}
              overlay
              className="flex aspect-[4/5] w-full flex-col justify-end p-5 text-white sm:aspect-[16/12]"
            >
              <span className="relative w-fit rounded-md bg-pink px-2.5 py-1 text-[11px] font-bold tracking-wide">
                業界TOPICS
              </span>
              <p className="relative mt-3 font-display text-xs tracking-widest text-white/80">
                {article.category}・{article.readMin}分で読める
              </p>
              <h1 className="relative mt-1 font-display text-[28px] font-bold leading-tight">
                {article.title}
              </h1>
              <p className="relative mt-2 line-clamp-2 text-sm leading-relaxed text-white/85">
                {article.excerpt}
              </p>

              <span className="relative mt-4 flex items-center justify-between">
                <span className="rounded-full bg-white px-5 py-2 text-sm font-bold text-ink">
                  続きを読む
                </span>
                <span className="flex items-center gap-3">
                  <ThanksBadge count={article.thanks} />
                  <span className="flex items-center gap-1 text-sm text-white/85">
                    <CommentIcon className="h-4 w-4" />
                    {article.comments}
                  </span>
                </span>
              </span>

              {/* カルーセルのドット */}
              <span className="relative mt-4 flex gap-1.5">
                {articles.map((_, i) => (
                  <span
                    key={i}
                    className={
                      i === index
                        ? "h-1.5 w-5 rounded-full bg-pink"
                        : "h-1.5 w-1.5 rounded-full bg-white/50"
                    }
                  />
                ))}
              </span>
            </CoverImage>
          </button>
        </div>
      </div>

      {/* 新着記事（横スクロール） */}
      <div className="mx-auto max-w-2xl px-4 pt-8">
        <SectionHeading eyebrow="New" title="新着記事" action="すべて見る" />
      </div>
      <div className="no-scrollbar flex gap-3 overflow-x-auto px-4 pb-1">
        {articles.map((a) => (
          <button
            key={a.id}
            type="button"
            className="w-44 shrink-0 text-left transition active:scale-[0.99]"
          >
            <CoverImage
              tone={a.tone}
              src={a.image}
              overlay
              className="flex aspect-[4/3] w-full items-start justify-between rounded-2xl p-2.5"
            >
              <span className="relative rounded bg-white/90 px-2 py-0.5 text-[10px] font-bold text-ink">
                {a.category}
              </span>
            </CoverImage>
            <h3 className="mt-2 line-clamp-2 text-sm font-bold leading-snug">
              {a.title}
            </h3>
            <p className="mt-1.5 flex items-center gap-1 text-xs text-muted">
              <span className="grid h-4 w-4 place-items-center rounded-full bg-ink text-[8px] font-bold text-paper">
                AI
              </span>
              {a.author}
            </p>
          </button>
        ))}
        <div className="flex w-12 shrink-0 items-center">
          <ChevronRightIcon className="h-6 w-6 text-muted" />
        </div>
      </div>
    </section>
  );
}
