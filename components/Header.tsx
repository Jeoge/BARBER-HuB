import { MenuIcon, SearchIcon, BellIcon } from "./icons";

// ヘッダー上段：メニュー｜中央ロゴ＋タグライン｜検索・通知・プロフィール
// 下段：横スクロールのタブナビ（毎朝ここから業界の情報へ）
const tabs = ["ホーム", "フォロー", "ニュース", "Q&A", "求人", "講習会", "経営", "AI"];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-md">
      <div className="mx-auto max-w-2xl">
        {/* 上段 */}
        <div className="flex items-center justify-between px-4 py-2.5">
          <button
            type="button"
            aria-label="メニュー"
            className="grid h-9 w-9 place-items-center rounded-full transition hover:bg-line/60"
          >
            <MenuIcon className="h-[22px] w-[22px]" />
          </button>

          <div className="text-center">
            <p className="text-lg font-bold leading-none tracking-tight">
              BARBER<span className="text-pink"> HUB</span>
            </p>
            <p className="font-display mt-1 text-[9px] uppercase tracking-[0.22em] text-muted">
              One Success. Shared Success.
            </p>
          </div>

          <div className="flex items-center gap-0.5">
            <button
              type="button"
              aria-label="検索"
              className="grid h-9 w-9 place-items-center rounded-full transition hover:bg-line/60"
            >
              <SearchIcon className="h-[21px] w-[21px]" />
            </button>
            <button
              type="button"
              aria-label="通知"
              className="relative grid h-9 w-9 place-items-center rounded-full transition hover:bg-line/60"
            >
              <BellIcon className="h-[21px] w-[21px]" />
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-pink ring-2 ring-paper" />
            </button>
            <span
              aria-label="プロフィール"
              className="ml-0.5 grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-pink to-pink-ink text-[11px] font-bold text-white"
            >
              YU
            </span>
          </div>
        </div>

        {/* 下段：タブナビ */}
        <nav className="no-scrollbar flex gap-5 overflow-x-auto px-4">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              type="button"
              className={
                i === 0
                  ? "relative shrink-0 pb-2.5 text-sm font-bold text-ink after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:rounded-full after:bg-pink"
                  : "shrink-0 pb-2.5 text-sm font-medium text-muted transition hover:text-ink"
              }
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
