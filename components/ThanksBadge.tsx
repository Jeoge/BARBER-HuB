import { ThanksIcon } from "./icons";

// 「いいね」ではなく「THANKS」。ハート禁止、ピンクの吹き出しで感謝を可視化する。
export default function ThanksBadge({
  count,
  emphasis = false,
}: {
  count: number;
  emphasis?: boolean;
}) {
  return (
    <span
      className={
        emphasis
          ? "inline-flex items-center gap-1.5 rounded-full bg-pink px-3 py-1 text-sm font-semibold text-white"
          : "inline-flex items-center gap-1.5 text-pink"
      }
    >
      <ThanksIcon className="h-4 w-4" />
      <span className="text-sm font-semibold tabular-nums">
        THANKS {count}
      </span>
    </span>
  );
}
