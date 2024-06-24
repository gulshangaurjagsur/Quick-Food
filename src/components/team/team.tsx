import styles from "./team.module.scss";
import React from "react";
const Team = (props: any) => {
  const { compData } = props;
  return (
    <div className={styles.team} id="team">
      <div className="container">
        <h2 dangerouslySetInnerHTML={{ __html: compData?.heading }}></h2>
        <h4>{compData?.subHeading}</h4>
        <div className="row"> 
          {compData?.item?.map((item: any, index: number) => (
            <div key={index} className={` col-md-4 ${styles.item} `}>
              <div className={styles.imgWrapper}>
                <img
                  src={item?.imageSource}
                  alt="QuickFood"
                  className="img-fluid"
                />
                <div className={styles.social}>
                  <a href="javascript:void(0);" className="fa fa-linkedin"></a>
                </div>
              </div>
              <h3>{item?.name}</h3>
              <em>{item?.designation}</em>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Team;
