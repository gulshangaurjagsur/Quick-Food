import Head from "next/head";
import Header from "@component/components/header/header";
import Footer from "@component/components/footer/footer";
import Overview from "@component/components/overview/Overview";
import Banner from "@component/components/banner/banner";
import Team from "@component/components/team/team";
import commomData from "../assets/data/common.json";

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>QuickFood Services - About Us</title>
        <meta name="description" content="QuickFood Services - About Us" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mainContainer">
        <Header compData={commomData?.header} />
        <Banner compData={commomData?.banner} />
        <Overview compData={commomData?.aboutPageOverview} />
        <Team compData={commomData?.team} />
        <Footer compData={commomData?.footer} />
      </main>
    </>
  );
}
