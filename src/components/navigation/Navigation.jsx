import React from "react";
import styles from "./Navigation.module.scss";

const Navigation = ({ navBarVal, Mode }) => {
  // console.log(navBarVal);
  const Value = navBarVal.map((item) => {
    return (
      // aq ufro shemoklebul versias rom vwerdi && gamoyenebit ragac warnings migdebda
      <li className={Mode ? styles.dark : null} key={item}>
        {item}
      </li>
    );
  });
  return (
    <>
      <nav>
        <div className={styles.nav}>
          <ul>{Value}</ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
