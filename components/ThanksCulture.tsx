import { ThanksIcon } from "./icons";

// THANKS文化の説明帯。BARBER HUBでは「いいね」ではなく「感謝」で評価する。
export default function ThanksCulture() {
  return (
    <section className="px-4 pt-10">
      <div className="mx-auto max-w-2xl overflow-hidden rounded-3xl bg-ink px-6 py-8 text-paper">
        <div className="flex items-start gap-4">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-pink">
            <ThanksIcon className="h-6 w-6 text-white" />
          </span>
          <div>
            <p className="font-display text-xs uppercase tracking-[0.2em] text-pink">
              THANKS Culture
            </p>
            <h2 className="mt-1 text-xl font-bold">「いいね」より、「ありがとう」。</h2>
            <p className="mt-2 text-[15px] leading-relaxed text-paper/70">
              BARBER HUBに「いいね」はありません。役に立った投稿には
              <span className="font-semibold text-paper"> THANKS </span>
              を贈ります。数を競うのではなく、誰かの成功を一緒に喜ぶ。
              それがこの場所のルールです。
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-pink px-4 py-2 text-sm font-semibold">
              <ThanksIcon className="h-4 w-4" />
              THANKS 128
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
