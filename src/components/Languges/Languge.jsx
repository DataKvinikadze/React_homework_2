import React from "react";
import styles from "./Languge.module.scss";

const Languge = ({ Languages, Mode }) => {
  const languge = Languages.map((item, index) => {
    return (
      <div key={index} className={styles.container}>
        <div className={Mode ? styles.boxLight : styles.box}>
          <img src={item.langImageSrc} alt="" />
          <p>{item.lang}</p>
        </div>
      </div>
    );
  });
  return <>{languge}</>;
};

export default Languge;
