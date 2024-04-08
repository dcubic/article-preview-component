import styles from "./ActivePanel.module.css";

import ActivePopup from "./ActivePopup.jsx";

import avatarImage from "../assets/images/avatar-michelle.jpg";
import ShareIcon from "../assets/images/icon-share.svg?react";

export default function StandardFooter({isClicked, handleClick, isMobileWidth}) {
  return (
    <footer className={styles.footer}>
      <div className={styles.portraitNameLayout}>
        <img
          src={avatarImage}
          alt="Portrait image of Michelle"
          className={styles.avatarImage}
        ></img>
        <div className={styles.personalInfoContainer}>
          <h2 className={styles.h2}>Michelle Appleton</h2>
          <p className={styles.dateParagraph}>28 Jun 2020</p>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        {/* TODO: Add changing colour styling for this button component */}
        <button onClick={handleClick} className={`${styles.shareButton} ${isClicked ? styles.grayBackground : ""}`}>
          <ShareIcon
            fill={isClicked ? "white" : "#6E8098"}
            alt="image of a curved arrow that is meant to represent sharing"
          />
        </button>
        {isClicked && !isMobileWidth() && <ActivePopup />}
      </div>
    </footer>
  );
}