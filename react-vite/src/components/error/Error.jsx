import styles from "./Error.module.css";
import { errorImage } from "../images/images";

export function ErrorMessage() {
  return (
    <div className={styles.root}>
      <main className={styles.main}>
        <div className={styles.imgContainer}>
          <img className={styles.sadowheart} src={errorImage["Sadowheart"]} />
        </div>
        <div className={styles.title}>{"You've entered the Shadowfell..."}</div>
        <p className={styles.message}>
          {"An unexpected error has occurred. Please try again."}
        </p>
        <div className={styles.errors}></div>
      </main>
    </div>
  );
}