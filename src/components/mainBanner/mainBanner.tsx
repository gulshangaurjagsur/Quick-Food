import styles from "./mainBanner.module.scss";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const MainBanner = (props: any) => {
  const { compData } = props;
  let settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: true,
  };
  return (
    <div id="promo-block" className={styles.sliderWrapper}>
      <Slider {...settings}>
        {compData?.item?.map((item: any, index: number) => (
          <div key={index} className={styles.bannerContainer}>
            <img src={item?.imageSource} />
            <div className={styles.textContainer}>
              <h2 dangerouslySetInnerHTML={{ __html: item?.heading }}></h2>
              <h3 dangerouslySetInnerHTML={{ __html: item?.subHeading }}></h3>
              {item?.link &&<a href={item?.link}>{item?.label}</a>}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default MainBanner;
