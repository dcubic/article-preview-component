import facebookIcon from "../assets/images/icon-facebook.svg";
import pinterestIcon from "../assets/images/icon-pinterest.svg";
import twitterIcon from "../assets/images/icon-twitter.svg";
import ShareIcon from "../assets/images/icon-share.svg?react";

import styles from "./ActivePanel.module.css";

export default function ActiveFooter({handleClick}) {
  return (
    <footer className={`${styles.activeShareFooter} ${styles.footer}`}>
      <div className={styles.links}>
        <span className={styles.shareText}>Share</span>
        <a
          href="https://facebook.com/"
          target="_blank"
          className={styles.linkContainer}
        >
          <img
            src={facebookIcon}
            alt="Facebook icon"
            className={styles.socialMediaButton}
          ></img>
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          className={styles.linkContainer}
        >
          <img
            src={twitterIcon}
            alt="Twitter icon"
            className={styles.socialMediaButton}
          ></img>
        </a>
        <a
          href="https://ca.pinterest.com/"
          target="_blank"
          className={styles.linkContainer}
        >
          <img
            src={pinterestIcon}
            alt="Pinterest icon"
            className={styles.socialMediaButton}
          ></img>
        </a>
      </div>
      <button
        onClick={handleClick}
        className={`${styles.shareButton} ${styles.grayBackground}`}
      >
        <ShareIcon
          fill="white"
          alt="image of a curved arrow that is meant to represent sharing"
        />
      </button>
    </footer>
  );
}