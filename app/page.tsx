const features = [
  {
    icon: "✂️",
    title: "予約をまとめて管理",
    body: "電話・SNS・店頭バラバラの予約を一つの画面で。ダブルブッキングをなくします。",
  },
  {
    icon: "📈",
    title: "売上が見える化",
    body: "日々の売上・指名・リピート率を自動で集計。経営判断がデータで動きます。",
  },
  {
    icon: "🤝",
    title: "店舗どうしでつながる",
    body: "求人・技術共有・ヘルプ要請を業界内でシェア。一人の成功をみんなの成功に。",
  },
];

const steps = [
  { no: "01", title: "無料で登録", body: "メールアドレスだけで、すぐにはじめられます。" },
  { no: "02", title: "お店を設定", body: "メニューや営業時間を入力。テンプレートで数分で完了。" },
  { no: "03", title: "予約を受付", body: "お客様はスマホから24時間いつでも予約できます。" },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* ヘッダー */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <span className="text-lg font-bold tracking-wide">
            BARBER<span className="text-gold"> HUB</span>
          </span>
          <a
            href="#cta"
            className="rounded-full bg-gold px-4 py-2 text-sm font-semibold text-ink transition hover:bg-gold-soft"
          >
            無料で始める
          </a>
        </div>
      </header>

      {/* ヒーロー */}
      <section className="relative overflow-hidden px-5 pb-20 pt-16 sm:pt-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(120%_80%_at_50%_-10%,rgba(200,162,75,0.25),transparent_60%)]"
        />
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-gold/40 px-4 py-1 text-xs font-medium tracking-widest text-gold-soft">
            理容業界のためのプラットフォーム
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-6xl">
            お店の毎日を、
            <br />
            <span className="text-gold">もっとシンプルに。</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-cream/70 sm:text-lg">
            予約・売上・つながりを、ひとつの場所へ。
            BARBER HUB は理容師とサロンのためのオールインワンツールです。
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#cta"
              className="w-full rounded-full bg-gold px-7 py-3.5 text-center font-semibold text-ink transition hover:bg-gold-soft sm:w-auto"
            >
              無料で始める
            </a>
            <a
              href="#features"
              className="w-full rounded-full border border-white/20 px-7 py-3.5 text-center font-semibold text-cream transition hover:border-white/40 sm:w-auto"
            >
              できることを見る
            </a>
          </div>
          <p className="mt-4 text-xs text-cream/40">
            クレジットカード不要・1分で登録
          </p>
        </div>
      </section>

      {/* 特徴 */}
      <section id="features" className="px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            お店の「面倒」を、まとめて解決
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-white/10 bg-ink-soft p-6 transition hover:border-gold/40"
              >
                <div className="text-3xl">{f.icon}</div>
                <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/60">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 使い方 */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            はじめ方はかんたん3ステップ
          </h2>
          <ol className="mt-10 space-y-5">
            {steps.map((s) => (
              <li
                key={s.no}
                className="flex items-start gap-5 rounded-2xl border border-white/10 bg-ink-soft p-5"
              >
                <span className="text-2xl font-bold text-gold">{s.no}</span>
                <div>
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <p className="mt-1 text-sm text-cream/60">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="px-5 py-16">
        <div className="mx-auto max-w-3xl rounded-3xl border border-gold/30 bg-gradient-to-b from-ink-soft to-ink p-8 text-center sm:p-12">
          <h2 className="text-2xl font-bold sm:text-3xl">
            今日から、お店をアップデート。
          </h2>
          <p className="mt-3 text-cream/70">
            One Success. Shared Success. ―― 一人の成功を、みんなの成功に。
          </p>
          <a
            href="#"
            className="mt-7 inline-block w-full rounded-full bg-gold px-8 py-4 font-semibold text-ink transition hover:bg-gold-soft sm:w-auto"
          >
            無料アカウントを作成
          </a>
        </div>
      </section>

      {/* フッター */}
      <footer className="border-t border-white/10 px-5 py-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
          <span className="font-bold">
            BARBER<span className="text-gold"> HUB</span>
          </span>
          <p className="text-xs text-cream/40">
            © {new Date().getFullYear()} BARBER HUB. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
