import { categories } from "@/lib/data";

// カテゴリーナビ。横スクロールのチップで、ポータルの全入り口を一覧できる。
export default function CategoryNav() {
  return (
    <nav className="pt-9">
      <div className="mx-auto max-w-2xl">
        <div className="no-scrollbar flex gap-2 overflow-x-auto px-4 pb-1">
          {categories.map((cat, i) => (
            <button
              key={cat}
              type="button"
              className={
                i === 0
                  ? "shrink-0 rounded-full bg-pink px-4 py-2 text-sm font-semibold text-white"
                  : "shrink-0 rounded-full border border-line bg-paper px-4 py-2 text-sm font-medium text-ink transition hover:border-pink hover:text-pink"
              }
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
