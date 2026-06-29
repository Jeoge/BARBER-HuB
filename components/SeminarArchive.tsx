import { seminars } from "@/lib/data";
import CoverImage from "./CoverImage";
import SectionHeading from "./SectionHeading";
import { PlayIcon } from "./icons";

// 講習会・コンクールのアーカイブ。
// 地方やワンオペで現地に行けない人が、後からいつでも見られる場所。
export default function SeminarArchive() {
  return (
    <section className="pt-10">
      <div className="mx-auto max-w-2xl px-4">
        <SectionHeading
          eyebrow="Archive"
          title="講習会・コンクール"
          action="一覧へ"
        />
        <p className="-mt-2 mb-4 text-sm text-muted">
          行けなかった現場も、置いていかれない。
        </p>
      </div>

      {/* 横スクロールのカード */}
      <div className="no-scrollbar flex gap-3 overflow-x-auto px-4 pb-1">
        {seminars.map((s) => (
          <button
            key={s.id}
            type="button"
            className="w-64 shrink-0 overflow-hidden rounded-3xl border border-line text-left transition active:scale-[0.99]"
          >
            <CoverImage
              tone={s.tone}
              src={s.image}
              overlay
              className="grid aspect-video place-items-center"
            >
              <span className="relative grid h-12 w-12 place-items-center rounded-full bg-paper/90">
                <PlayIcon className="h-5 w-5 translate-x-0.5 text-ink" />
              </span>
              <span className="absolute left-3 top-3 rounded-full bg-paper/90 px-2.5 py-0.5 text-[11px] font-bold text-ink">
                {s.type}
              </span>
            </CoverImage>
            <div className="p-4">
              <h3 className="text-[15px] font-bold leading-snug">{s.title}</h3>
              <p className="mt-2 text-xs text-muted">
                {s.place}・{s.date}
              </p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
