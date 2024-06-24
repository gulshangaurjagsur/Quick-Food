import Head from "next/head";
import Header from "@component/components/header/header";
import Footer from "@component/components/footer/footer";
import Overview from "@component/components/overview/Overview";
import Banner from "@component/components/banner/banner";
import MenuList from "@component/components/menuList/MenuList";
import commomData from "../assets/data/common.json";

export default function Menu() {
  return (
    <>
      <Head>
        <title>QuickFood Services - Menu</title>
        <meta name="description" content="QuickFood Services - Menu" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main  className="mainContainer">
        <Header compData={commomData?.header} />
        <Banner compData={commomData?.banner} />
        <Overview compData={commomData?.menuOverview} />
        <MenuList compData={commomData?.menuList} />
        <Footer compData={commomData?.footer} />
      </main>
    </>
  );
}
