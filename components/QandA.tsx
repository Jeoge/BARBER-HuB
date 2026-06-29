import { questions } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import { CommentIcon } from "./icons";

// Q&A。一人で抱えこまず「みんなで解決」する困りごと相談。
export default function QandA() {
  return (
    <section className="px-4 pt-10">
      <div className="mx-auto max-w-2xl">
        <SectionHeading
          eyebrow="Q&amp;A"
          title="みんなで解決"
          action="質問する"
        />

        <ul className="divide-y divide-line overflow-hidden rounded-3xl border border-line">
          {questions.map((q) => (
            <li key={q.id} className="bg-paper p-4 transition hover:bg-pink-soft/40">
              <div className="flex items-center gap-2">
                <span className="rounded-md bg-pink-soft px-2 py-0.5 text-[11px] font-semibold text-pink-ink">
                  {q.tag}
                </span>
                <span
                  className={
                    q.status === "解決済み"
                      ? "text-[11px] font-semibold text-muted"
                      : "text-[11px] font-semibold text-pink"
                  }
                >
                  {q.status}
                </span>
              </div>

              <p className="mt-2 flex gap-2 text-[15px] font-semibold leading-snug">
                <span className="font-display text-pink">Q.</span>
                {q.title}
              </p>
              <p className="mt-1 line-clamp-2 pl-5 text-sm text-muted">
                {q.detail}
              </p>

              <p className="mt-2 flex items-center gap-1.5 pl-5 text-sm text-muted">
                <CommentIcon className="h-4 w-4" />
                回答 {q.answers}件
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
