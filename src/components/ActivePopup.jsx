import styles from "./ActivePanel.module.css";

export default function ActivePopup() {
  return (
    <section className={styles.footer}>
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
    </section>
  );
}