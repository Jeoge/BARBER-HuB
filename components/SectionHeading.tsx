import { ChevronRightIcon } from "./icons";

// 雑誌的な節タイトル。英字を小さく添えて余白を効かせる。
export default function SectionHeading({
  eyebrow,
  title,
  action,
}: {
  eyebrow?: string;
  title: string;
  action?: string;
}) {
  return (
    <div className="mb-4 flex items-end justify-between">
      <div>
        {eyebrow && (
          <p className="font-display text-xs uppercase tracking-[0.2em] text-pink">
            {eyebrow}
          </p>
        )}
        <h2 className="mt-1 text-xl font-bold tracking-tight">{title}</h2>
      </div>
      {action && (
        <button
          type="button"
          className="flex items-center gap-0.5 text-sm font-medium text-muted transition hover:text-ink"
        >
          {action}
          <ChevronRightIcon className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
