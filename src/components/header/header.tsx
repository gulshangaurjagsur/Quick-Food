import styles from "./header.module.scss";
import React from "react";
const Header = (props: any) => {
  const { compData } = props;
  const [click, setClick] = React.useState(false);
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  return (
    <div className={styles.compWrapper}>
      <nav>
        <div className="container">
          <input type="checkbox" id="nav-toggle" style={{ display: "none" }} />
          <div className={styles.logo}>
            <img
              src={compData?.imageSource}
              alt="QuickFood"
              className="img-fluid"
            />
          </div>
          <ul className={styles.links}>
            {compData?.items?.map((item: any, index: number) => (
              <li key={index}>
                <a href={item?.url}>{item?.label}</a>
                {item?.subLinks?.length > 0 && (
                  <ul>
                    {item?.subLinks?.map((item: any, key: number) => (
                      <li key={key}>
                        <a href={item?.url}>{item?.label}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <label htmlFor="nav-toggle" className={styles.iconBurger}>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
          </label>
        </div>
      </nav>
    </div>
  );
};
export default Header;
