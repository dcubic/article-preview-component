import styles from "./ActivePanel.module.css";

import avatarImage from "../assets/images/avatar-michelle.jpg";
import ShareIcon from "../assets/images/icon-share.svg?react";

export default function StandardFooter({handleClick}) {
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
      <button onClick={handleClick} className={styles.shareButton}>
        <ShareIcon
          fill="#6E8098"
          alt="image of a curved arrow that is meant to represent sharing"
        />
      </button>
    </footer>
  );
}