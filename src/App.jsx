import { useState, useEffect } from "react";

import ActiveFooter from "./components/ActiveFooter.jsx";
import StandardFooter from "./components/StandardFooter.jsx";
import ActivePopup from "./components/ActivePopup.jsx";

import drawersImage from "./assets/images/drawers.jpg";

import styles from "./App.module.css";

const MOBILE_WIDTH_THRESHOLD = 500

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function isMobileWidth() {
    return windowDimensions.width < MOBILE_WIDTH_THRESHOLD;
  }

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
      {!isClicked && <StandardFooter handleClick={handleClick} />}
      {isClicked && isMobileWidth() && (
        <ActiveFooter handleClick={handleClick} />
      )}
      {isClicked && !isMobileWidth() && (
        <ActivePopup />
      )}
    </main>
  );
}

export default App;