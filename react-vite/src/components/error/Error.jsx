import styles from "./Error.module.css";

export function ErrorMessage() {
  return (
    <div className={styles.root}>
      <main className={styles.main}>
        <div className={styles.imgContainer}>
          <img
            loading="lazy"
            className={styles.sadowheart}
            src={
              "https://ik.imagekit.io/phl0at/images/error_icon/Sadowheart.png"
            }
          />
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
