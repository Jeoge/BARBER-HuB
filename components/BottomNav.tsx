import { HomeIcon, SearchIcon, BellIcon, MailIcon, ProfileIcon } from "./icons";

// 画面下のナビ。アプリのように、毎日ここから巡回できる。
const items = [
  { label: "ホーム", Icon: HomeIcon, active: true },
  { label: "探す", Icon: SearchIcon, active: false },
  { label: "お知らせ", Icon: BellIcon, active: false },
  { label: "メッセージ", Icon: MailIcon, active: false },
  { label: "マイページ", Icon: ProfileIcon, active: false },
];

export default function BottomNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper/95 backdrop-blur-md">
      <ul className="mx-auto flex max-w-2xl items-stretch justify-around px-2 py-1.5">
        {items.map(({ label, Icon, active }) => (
          <li key={label}>
            <button
              type="button"
              className={
                active
                  ? "flex w-16 flex-col items-center gap-0.5 py-1 text-pink"
                  : "flex w-16 flex-col items-center gap-0.5 py-1 text-muted transition hover:text-ink"
              }
            >
              <Icon className="h-[22px] w-[22px]" />
              <span className="text-[10px] font-medium">{label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
