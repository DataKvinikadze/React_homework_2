import React from "react";
import styles from "./Profile.module.scss";

const Profile = ({ profilePic }) => {
  return (
    <>
      <div className={styles.profilePic}>
        <img src={profilePic} className="picture" />
      </div>
    </>
  );
};

export default Profile;
