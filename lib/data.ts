// =====================================================================
// BARBER HUB ダミーデータ
// MVP段階ではDB・APIを使わず、ここのデータで「動いて見える」状態を作る。
// 本番では AI編集部 がフィードを整理してここに流し込むイメージ。
// =====================================================================

/** カテゴリーナビ（業界ポータルの入り口） */
export const categories = [
  "経営",
  "集客",
  "AI",
  "技術",
  "道具",
  "Q&A",
  "講習会",
  "求人",
  "学生",
  "趣味",
] as const;

/** 今日のブリーフィング（AI編集部が毎朝まとめる想定） */
export const dailyBrief = {
  date: "2026年6月29日（月）",
  headline: "今日の3分ニュース",
  news: "大手予約サイトの手数料改定が7月から段階適用。指名売上の比率が高い店ほど影響が大きい見込み。",
  tip: "梅雨どきは来店間隔が伸びがち。次回予約をその場で取るだけで、6月の離脱は平均18%下がるというデータも。",
  morningTalk: [
    "今日は「次回予約のひと声」を全員で徹底しよう。",
    "雨の日こそ、来てくれたお客様に感謝を言葉で。",
    "手が空いたらSNSのコメント返信を1件でも。",
  ],
};

export type Article = {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  readMin: number;
  thanks: number;
  comments: number;
  tone: string; // サムネ用グラデーション
  image?: string; // 本物の写真パス（任意・例: "/images/a1.jpg"）
};

/** メイン記事（5本用意。表示のたびに少し変わる想定） */
export const articles: Article[] = [
  {
    id: "a1",
    category: "AI",
    title: "AIで楽天ビューティー閲覧数1位になった話",
    excerpt:
      "客層に合わせて紹介文と写真を毎週入れ替えただけ。やったことを全部、時系列で公開します。",
    author: "AI編集部",
    readMin: 4,
    thanks: 312,
    comments: 41,
    tone: "linear-gradient(135deg,#ff2d7e 0%,#ff7eb3 100%)",
  },
  {
    id: "a2",
    category: "経営",
    title: "freee APIで年間66万円の固定費を削減した実例",
    excerpt:
      "売上と経費を自動で見える化。無駄なサブスクと在庫がここまで減るとは思わなかった。",
    author: "AI編集部",
    readMin: 5,
    thanks: 268,
    comments: 33,
    tone: "linear-gradient(135deg,#111114 0%,#4b4b55 100%)",
  },
  {
    id: "a3",
    category: "集客",
    title: "Google口コミで新規客を増やす、たった3つの声かけ",
    excerpt:
      "★を増やすのではなく、書きたくなる体験をつくる。会計時のひと言テンプレ付き。",
    author: "AI編集部",
    readMin: 3,
    thanks: 421,
    comments: 58,
    tone: "linear-gradient(135deg,#ff5fa2 0%,#ffd1e3 100%)",
  },
  {
    id: "a4",
    category: "技術",
    title: "40代以上に刺さる「白髪ぼかし」提案のはじめ方",
    excerpt:
      "染めるか染めないかの二択をやめる。客単価とリピートを両立させるカウンセリング術。",
    author: "AI編集部",
    readMin: 4,
    thanks: 197,
    comments: 22,
    tone: "linear-gradient(135deg,#2b2b33 0%,#ff2d7e 120%)",
  },
  {
    id: "a5",
    category: "講習会",
    title: "講習会に行けない人のための、全国レポート",
    excerpt:
      "地方・ワンオペでも置いていかれない。今月の注目セミナーを編集部が現地から要約。",
    author: "AI編集部",
    readMin: 6,
    thanks: 154,
    comments: 17,
    tone: "linear-gradient(135deg,#7a7a85 0%,#111114 100%)",
  },
];

export type FeedPost = {
  id: string;
  name: string;
  handle: string;
  time: string;
  text: string;
  tone: string; // 写真プレースホルダ用
  emoji: string;
  thanks: number;
  comments: number;
  image?: string; // 本物の写真パス（任意）
};

/** フィード（InstagramやXのような軽い投稿） */
export const feedPosts: FeedPost[] = [
  {
    id: "f1",
    name: "タカハシ",
    handle: "@fade_takahashi",
    time: "12分前",
    text: "今日のフェード。ガイドライン低めにして自然な繋がりを意識。お客さん大満足でした✂️",
    tone: "linear-gradient(135deg,#1f1f25,#ff2d7e)",
    emoji: "✂️",
    thanks: 128,
    comments: 9,
  },
  {
    id: "f2",
    name: "Sara / 表参道",
    handle: "@sara_barber",
    time: "38分前",
    text: "白髪ぼかしのビフォーアフター。無理に染めない提案、本当にリピート増えます。",
    tone: "linear-gradient(135deg,#ff7eb3,#ffe6f0)",
    emoji: "💈",
    thanks: 204,
    comments: 18,
  },
  {
    id: "f3",
    name: "独立3年目ケンタ",
    handle: "@kenta_solo",
    time: "1時間前",
    text: "ワンオペの会計、freeeに変えてから締め作業が15分→3分に。もっと早くやればよかった。",
    tone: "linear-gradient(135deg,#111114,#5a5a66)",
    emoji: "📊",
    thanks: 167,
    comments: 24,
  },
  {
    id: "f4",
    name: "ミドリ理容室",
    handle: "@midori_barber",
    time: "2時間前",
    text: "祖父の代から使ってるレザー、研ぎ直したら新品みたいに。道具を大事にする文化、残したい。",
    tone: "linear-gradient(135deg,#3a3a44,#ff2d7e)",
    emoji: "🪒",
    thanks: 311,
    comments: 32,
  },
  {
    id: "f5",
    name: "専門学生リク",
    handle: "@riku_student",
    time: "3時間前",
    text: "国家試験の練習、毎日カットウィッグと格闘中。先輩方のアドバイス、THANKSで返します🙏",
    tone: "linear-gradient(135deg,#ffd1e3,#ff5fa2)",
    emoji: "🎓",
    thanks: 96,
    comments: 14,
  },
];

export type Question = {
  id: string;
  title: string;
  detail: string;
  answers: number;
  status: "解決済み" | "みんなで解決中";
  tag: string;
};

/** Q&A（Yahoo!知恵袋のような困りごと相談） */
export const questions: Question[] = [
  {
    id: "q1",
    title: "新規のお客様の予約キャンセルを減らす方法はありますか？",
    detail: "前日リマインドは送っていますが、無断キャンセルが月に数件あって困っています…",
    answers: 12,
    status: "みんなで解決中",
    tag: "経営",
  },
  {
    id: "q2",
    title: "ブリーチ毛のメンズパーマ、どこまで攻めて大丈夫？",
    detail: "ハイトーンのお客様にパーマを希望されました。ダメージとの兼ね合いを知りたいです。",
    answers: 8,
    status: "解決済み",
    tag: "技術",
  },
  {
    id: "q3",
    title: "個人店のインボイス対応、みなさんどうしていますか？",
    detail: "登録すべきか迷っています。同じ規模の店舗の判断を参考にしたいです。",
    answers: 21,
    status: "みんなで解決中",
    tag: "経営",
  },
];

export type Seminar = {
  id: string;
  title: string;
  place: string;
  date: string;
  type: "講習会" | "コンクール";
  tone: string;
  image?: string; // 本物の写真パス（任意）
};

/** 講習会・コンクールのアーカイブ（後から見られる場所） */
export const seminars: Seminar[] = [
  {
    id: "s1",
    title: "メンズグルーミング最前線 2026 ダイジェスト",
    place: "東京・ベルサール",
    date: "2026.06.20",
    type: "講習会",
    tone: "linear-gradient(135deg,#111114,#ff2d7e)",
  },
  {
    id: "s2",
    title: "全国バーバーコンテスト クラシック部門 決勝",
    place: "大阪・インテックス",
    date: "2026.06.08",
    type: "コンクール",
    tone: "linear-gradient(135deg,#ff5fa2,#ffd1e3)",
  },
  {
    id: "s3",
    title: "白髪ぼかし＆フェード 実技セミナー（収録版）",
    place: "オンライン配信",
    date: "2026.05.30",
    type: "講習会",
    tone: "linear-gradient(135deg,#4b4b55,#111114)",
  },
];
