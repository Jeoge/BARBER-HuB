import { feedPosts } from "@/lib/data";
import CoverImage from "./CoverImage";
import ThanksBadge from "./ThanksBadge";
import SectionHeading from "./SectionHeading";
import { CommentIcon } from "./icons";

// フィード。InstagramやXより落ち着いた、現場のリアルな投稿欄。
export default function Feed() {
  return (
    <section className="px-4 pt-10">
      <div className="mx-auto max-w-2xl">
        <SectionHeading eyebrow="Feed" title="現場のいま" action="もっと見る" />

        <ul className="space-y-3">
          {feedPosts.map((post) => (
            <li
              key={post.id}
              className="rounded-3xl border border-line bg-paper p-4"
            >
              {/* 投稿者 */}
              <div className="flex items-center gap-3">
                <span
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-lg"
                  style={{ background: post.tone }}
                >
                  <span className="drop-shadow">{post.emoji}</span>
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold">{post.name}</p>
                  <p className="truncate text-xs text-muted">
                    {post.handle}・{post.time}
                  </p>
                </div>
              </div>

              {/* 本文 */}
              <p className="mt-3 text-[15px] leading-relaxed">{post.text}</p>

              {/* 写真 */}
              <CoverImage
                tone={post.tone}
                src={post.image}
                className="mt-3 aspect-[5/3] w-full rounded-2xl"
              />

              {/* アクション */}
              <div className="mt-3 flex items-center gap-5">
                <ThanksBadge count={post.thanks} />
                <span className="flex items-center gap-1.5 text-sm text-muted">
                  <CommentIcon className="h-[18px] w-[18px]" />
                  {post.comments}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
