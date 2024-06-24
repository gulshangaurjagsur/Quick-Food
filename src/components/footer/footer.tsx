import styles from "./footer.module.scss";
import React from "react";
const Footer = (props: any) => {
  const { compData } = props;
  return (
    <div className={styles.footerWrapper} id="contact">
      <div className="container">
        <div className="row">
          <div className={`col-md-4 col-sm-6 ${styles.footerWrapperCol}`}>
            <h2>{compData?.about?.heading}</h2>
            <div
              dangerouslySetInnerHTML={{
                __html: compData?.about?.description,
              }}></div>
          </div>
          <div
            className={`col-md-4 col-sm-6 ${styles.footerWrapperCol} ${styles.servicesFooter} `}>
            <h2>{compData?.service?.heading}</h2>
            {compData?.service?.links?.map((item: any, index: number) => (
              <a href={item?.url} key={index}>
                {item?.label}
              </a>
            ))}
          </div>
          <div className={`col-md-4 col-sm-6 {styles.footerWrapperCol} `}>
            <h2>{compData?.contact?.heading}</h2>
            <address
              dangerouslySetInnerHTML={{
                __html: compData?.contact?.address,
              }}></address>
          </div>
        </div>
      </div>
      <div className={styles.copyRight}>{compData?.copyRight}</div>
    </div>
  );
};
export default Footer;
