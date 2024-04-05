import { useState } from "react";

import getWindowDimensions from "./utils/utils.jsx";
import drawersImage from "./assets/images/drawers.jpg";
import avatarImage from "./assets/images/avatar-michelle.jpg";

import ShareIcon from "./assets/images/icon-share.svg?react";
import facebookIcon from "./assets/images/icon-facebook.svg";
import pinterestIcon from "./assets/images/icon-pinterest.svg";
import twitterIcon from "./assets/images/icon-twitter.svg";

import styles from "./App.module.css";

function App() {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked((previousState) => !previousState);
  }

  return (
    <main className={styles.mainContainer}>
      <img
        src={drawersImage}
        alt="Drawers with carefully curated decorations"
        className={styles.headerImage}
      ></img>
      <section className={styles.articleInfoContainer}>
        <h1 className={styles.h1}>
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </h1>
        <p className={styles.paragraph}>
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I’ve got some simple tips to help
          you make any room feel complete.
        </p>
      </section>
      {!isClicked && (
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
            <ShareIcon fill="#6E8098" alt="image of a curved arrow that is meant to represent sharing"/>
          </button>
        </footer>
      )}
      {isClicked && (
        <footer className={`${styles.activeShareFooter} ${styles.footer}`}>
          <div className={styles.links}>
            <span className={styles.shareText}>Share</span>
            <img
              src={facebookIcon}
              alt="Facebook icon"
              className={styles.socialMediaButton}
            ></img>
            <img
              src={twitterIcon}
              alt="Twitter icon"
              className={styles.socialMediaButton}
            ></img>
            <img
              src={pinterestIcon}
              alt="Pinterest icon"
              className={styles.socialMediaButton}
            ></img>
          </div>
          <button onClick={handleClick} className={`${styles.shareButton} ${styles.grayBackground}`}>
            <ShareIcon fill="white" alt="image of a curved arrow that is meant to represent sharing"/>
          </button>
        </footer>
      )}
    </main>
  );
}

export default App;
