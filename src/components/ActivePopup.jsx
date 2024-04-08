import facebookIcon from "../assets/images/icon-facebook.svg";
import pinterestIcon from "../assets/images/icon-pinterest.svg";
import twitterIcon from "../assets/images/icon-twitter.svg";

import styles from "./ActivePanel.module.css";

export default function ActivePopup() {
  return (
    <div className={styles.absolutePosition}>
      <div className={styles.popupBox}>
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
      </div>
      <div className={styles.triangle}></div>
    </div>
  );
}