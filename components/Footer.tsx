// フッター。ブランドのキャッチコピーで締める。
export default function Footer() {
  return (
    <footer className="mt-12 border-t border-line px-4 py-10">
      <div className="mx-auto max-w-2xl">
        <p className="text-lg font-bold tracking-tight">
          BARBER<span className="text-pink"> HUB</span>
        </p>
        <p className="mt-2 text-xl font-bold">成功を共有しよう。</p>
        <p className="font-display mt-1 text-sm italic text-muted">
          One Success. Shared Success.
        </p>

        <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
          <span>このサービスについて</span>
          <span>利用規約</span>
          <span>プライバシー</span>
          <span>お問い合わせ</span>
        </div>

        <p className="mt-6 text-xs text-muted">
          © {new Date().getFullYear()} BARBER HUB
        </p>
      </div>
    </footer>
  );
}
