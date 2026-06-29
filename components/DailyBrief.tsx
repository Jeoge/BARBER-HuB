import { dailyBrief } from "@/lib/data";

// 1日のはじまり。AI編集部がまとめた「今日の3分」をトップ付近に大きく置く。
// 理容師が朝スマホを開いて最初に読む場所。
export default function DailyBrief() {
  return (
    <section className="px-4 pt-5">
      <div className="mx-auto max-w-2xl overflow-hidden rounded-3xl border border-line bg-paper shadow-[0_1px_30px_rgba(0,0,0,0.04)]">
        {/* ヘッダー帯：AI編集部 */}
        <div className="flex items-center justify-between bg-ink px-5 py-3 text-paper">
          <span className="flex items-center gap-2 text-sm font-semibold">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-pink text-[11px] font-bold">
              AI
            </span>
            AI編集部
          </span>
          <span className="text-xs text-paper/60">{dailyBrief.date}</span>
        </div>

        <div className="p-5">
          <h1 className="font-display text-3xl font-bold leading-tight">
            {dailyBrief.headline}
          </h1>
          <p className="mt-1 text-sm text-muted">
            毎朝、業界の動きを3分で。読めば朝礼で話せる。
          </p>

          {/* 今日の業界ニュース */}
          <div className="mt-5 border-t border-line pt-4">
            <p className="text-xs font-semibold tracking-wide text-pink">
              今日の業界ニュース
            </p>
            <p className="mt-1.5 text-[15px] leading-relaxed">
              {dailyBrief.news}
            </p>
          </div>

          {/* 今日の経営ヒント */}
          <div className="mt-4 border-t border-line pt-4">
            <p className="text-xs font-semibold tracking-wide text-pink">
              今日の経営ヒント
            </p>
            <p className="mt-1.5 text-[15px] leading-relaxed">
              {dailyBrief.tip}
            </p>
          </div>

          {/* 朝礼で使える3行 */}
          <div className="mt-4 rounded-2xl bg-pink-soft p-4">
            <p className="text-xs font-semibold tracking-wide text-pink-ink">
              朝礼で使える3行
            </p>
            <ol className="mt-2 space-y-1.5">
              {dailyBrief.morningTalk.map((line, i) => (
                <li key={i} className="flex gap-2 text-[15px] leading-snug">
                  <span className="font-display font-bold text-pink">
                    {i + 1}
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
