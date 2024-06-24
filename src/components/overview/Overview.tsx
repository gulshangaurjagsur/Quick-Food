import styles from "./overview.module.scss";
import React from "react";
const Overview = (props: any) => {
  const { compData } = props;
  return (
    <div id="about" className={styles.overviewWrapper}>
      <div className="container">
        <h2 dangerouslySetInnerHTML={{ __html: compData?.heading }}></h2>
        {compData?.description && <h4 dangerouslySetInnerHTML={{ __html: compData?.description }}></h4>}
      </div>
    </div>
  );
};
export default Overview;
