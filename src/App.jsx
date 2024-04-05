import { useState } from "react";

import getWindowDimensions from "./utils/utils.jsx";
import drawersImage from "./assets/images/drawers.jpg";
import avatarImage from "./assets/images/avatar-michelle.jpg";
import shareIcon from "./assets/images/icon-share.svg";
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
        <footer className={styles.footer}>
          <div className={styles.portraitNameLayout}>
            <img src={avatarImage} alt="Portrait image of Michelle" className={styles.avatarImage}></img>
            <div className={styles.nameContainer}>
              <h2 className={styles.h2}>Michelle Appleton</h2>
              <p className={styles.dateParagraph}>28 Jun 2020</p>
            </div>
          </div>
          <button onClick={handleClick}>
            <img
              src={shareIcon}
              alt="image of a curved arrow that is meant to represent sharing"
            ></img>
          </button>
        </footer>
      </section>
    </main>
  );
}

export default App;
