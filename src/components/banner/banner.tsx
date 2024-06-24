import styles from "./banner.module.scss";
import React from "react";
const Banner = (props: any) => {
  const { compData } = props;
  return (
    <div className={styles.bannerWrapper}>
      <img src={compData?.imageSource} className="img-fluid" />
    </div>
  );
};
export default Banner;
