import styles from "./Error.module.css";
import { IKImage } from "imagekitio-react";
const urlEndpoint = "https://ik.imagekit.io/phl0at/images/error_icon/";

export function ErrorMessage() {
  return (
    <div className={styles.root}>
      <main className={styles.main}>
        <div className={styles.imgContainer}>
          <IKImage
            loading="lazy"
            className={styles.sadowheart}
            urlEndpoint={urlEndpoint}
            path={"Sadowheart.png"}
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
