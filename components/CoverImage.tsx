// 画像エリアの共通部品。
//
// いまは「写真が無い環境」のため、デュオトーンのグラデーション＋
// ハーフトーン風テクスチャで“印刷物っぽい”プレースホルダを表示している。
//
// ▼ 本物の写真に差し替える方法（ネット環境のあるPCで）
//   1. public/images/ に写真を置く（例: public/images/feature.jpg）
//   2. その画像を使う場所で <CoverImage src="/images/feature.jpg" ... /> と渡すだけ。
//      src があれば自動で写真を背景に表示する。
type CoverImageProps = {
  tone: string; // プレースホルダ用グラデーション
  src?: string; // 差し替え用の写真パス（任意）
  className?: string;
  overlay?: boolean; // 文字を重ねるとき、下を暗くするか
  children?: React.ReactNode;
};

export default function CoverImage({
  tone,
  src,
  className = "",
  overlay = false,
  children,
}: CoverImageProps) {
  return (
    <div
      className={`relative overflow-hidden bg-cover bg-center ${className}`}
      style={src ? { backgroundImage: `url(${src})` } : { background: tone }}
    >
      {/* テクスチャ（写真がある時は控えめでも自然） */}
      <div className="cover-grain pointer-events-none absolute inset-0 opacity-70" />
      {/* 文字を重ねる場合の下方グラデーション */}
      {overlay && <div className="cover-vignette pointer-events-none absolute inset-0" />}
      {children}
    </div>
  );
}
