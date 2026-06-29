import SectionHeading from "./SectionHeading";
import { ChevronRightIcon } from "./icons";

// 学生・求人。次世代の理容師と、サロン・学校をつなぐ導線。
const cards = [
  {
    label: "学生",
    title: "これから理容師になる人へ",
    body: "国家試験の対策、現場のリアル、先輩からのアドバイス。学生だけのコミュニティ。",
    tone: "linear-gradient(135deg,#ff5fa2,#ffd1e3)",
  },
  {
    label: "求人",
    title: "サロン求人をさがす",
    body: "働き方・歩合・独立支援まで。条件だけでなく「店の空気」が伝わる求人。",
    tone: "linear-gradient(135deg,#111114,#4b4b55)",
  },
  {
    label: "学校",
    title: "理容学校をさがす",
    body: "オープンキャンパス情報や卒業生の声。進路に迷う前にのぞいてみよう。",
    tone: "linear-gradient(135deg,#ff2d7e,#ff7eb3)",
  },
];

export default function Recruitment() {
  return (
    <section className="px-4 pt-10">
      <div className="mx-auto max-w-2xl">
        <SectionHeading eyebrow="Next Generation" title="学生・求人" />

        <div className="space-y-3">
          {cards.map((c) => (
            <button
              key={c.label}
              type="button"
              className="flex w-full items-center gap-4 overflow-hidden rounded-3xl border border-line bg-paper p-4 text-left transition hover:border-pink active:scale-[0.99]"
            >
              <span
                className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl text-xs font-bold text-white"
                style={{ background: c.tone }}
              >
                {c.label}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[15px] font-bold">{c.title}</span>
                <span className="mt-0.5 block text-sm leading-snug text-muted">
                  {c.body}
                </span>
              </span>
              <ChevronRightIcon className="h-5 w-5 shrink-0 text-muted" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
