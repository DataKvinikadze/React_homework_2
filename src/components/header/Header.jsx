import React, { useState } from "react";
import toggleLight from "/Vector.svg";
import Navigation from "../navigation/Navigation";
import styles from "./Header.module.scss";
import toggleDark from "/ToggleLight.svg";

const Header = ({ navBarVal, toggleFunc, Mode }) => {
  return (
    <>
      <header>
        <div className={styles.headerContainer}>
          <div className={styles.headerContent}>
            <Navigation Mode={Mode} navBarVal={navBarVal} />
            <div onClick={toggleFunc} className="toggle">
              <img src={Mode ? toggleDark : toggleLight} alt="" />
            </div>
          </div>
        </div>
      </header>
      <div className={styles.underline}></div>
    </>
  );
};

export default Header;
