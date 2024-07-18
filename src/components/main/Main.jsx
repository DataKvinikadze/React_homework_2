import React from "react";
import styles from "./Main.module.scss";
import Button from "../buttons/Button";
import Social from "../socials/Social";
import Profile from "../profile/Profile";
import Languge from "../Languges/Languge";

const Main = ({ socials, BtnContent, profilePic, Languages, Mode }) => {
  // console.log(Mode);
  return (
    <>
      <main>
        <section className={styles.MainSection}>
          <div className={styles.sectionContainer}>
            <div className={styles.sectionContet}>
              <div className={styles.leftSide}>
                <div className={styles.title}>
                  <h1 className={Mode ? styles.dark : null}>
                    Hi, I am <br />
                    Chukwukwe Chisom
                  </h1>
                </div>
                <div className={styles.job}>
                  <span>Frontend Developer</span>
                </div>
                <Button BtnContent={BtnContent} />
                <Social socials={socials} />
              </div>
              <div className={styles.rightSide}>
                <Profile profilePic={profilePic} />
              </div>
            </div>
          </div>
        </section>
        <section className={styles.Languages}>
          <div className={styles.sectionContainer}>
            <div className={styles.sectionContent}>
              <Languge Mode={Mode} Languages={Languages} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Main;
