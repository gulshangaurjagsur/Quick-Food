import Head from "next/head";
import Header from "@component/components/header/header";
import MainBanner from "@component/components/mainBanner/mainBanner";
import commomData from "../assets/data/common.json";
import Overview from "@component/components/overview/Overview";
import Footer from "@component/components/footer/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>QuickFood Services</title>
        <meta name="description" content="QuickFood Services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header compData={commomData?.header} />
        <MainBanner compData={commomData?.mainBanner} />
        <Overview compData={commomData?.homeOverview} />
        <Footer compData={commomData?.footer} />
      </main>
    </>
  );
}
