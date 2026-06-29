import Header from "@/components/Header";
import DailyBrief from "@/components/DailyBrief";
import MainFeature from "@/components/MainFeature";
import CategoryNav from "@/components/CategoryNav";
import Feed from "@/components/Feed";
import ThanksCulture from "@/components/ThanksCulture";
import QandA from "@/components/QandA";
import SeminarArchive from "@/components/SeminarArchive";
import Recruitment from "@/components/Recruitment";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import FloatingPostButton from "@/components/FloatingPostButton";

// BARBER HUB トップページ。
// 理容師が毎朝開く「業界ポータル」。上から下へ、1日のはじまりの順で並べている。
export default function Home() {
  return (
    <div className="min-h-screen pb-24">
      <Header />
      <main>
        <DailyBrief />
        <MainFeature />
        <CategoryNav />
        <Feed />
        <ThanksCulture />
        <QandA />
        <SeminarArchive />
        <Recruitment />
      </main>
      <Footer />
      <BottomNav />
      <FloatingPostButton />
    </div>
  );
}
