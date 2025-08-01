import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        ImageURL="/media/kite.png"
        productName=" kite "
        ProductDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite 
        experience seamlessly on your Android and iOS devices. "
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection 
       ImageURL="/media/Console.png"
        productName=" Console "
        ProductDescription="The central dashboard for your Zerodha account. Gain insights into your trades and 
        investments with in-depth reports and visualisations."
        learnMore=""/>

      <LeftSection
        ImageURL="/media/coin.png"
        productName=" Coin "
        ProductDescription="Buy direct mutual funds online, 
        commission-free, delivered directly to your 
        Demat account. Enjoy the investment experience 
        on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection 
      ImageURL="/media/Kiteconnect.png"
        productName=" Kite Connect API "
        ProductDescription="Build powerful trading platforms and experiences with 
        our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.."
        learnMore=""
      />
      <LeftSection
        ImageURL="/media/varsity.png"
        productName=" Varsity mobile "
        ProductDescription="An easy to grasp, 
        collection of stock market lessons with in-depth 
        coverage and illustrations. Content is broken down 
        into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
   

      <Universe />
    </>
  );
}

export default ProductPage;
