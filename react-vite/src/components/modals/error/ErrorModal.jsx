// Files
import styles from "./ErrorModal.module.css";
import { Images } from "../../images";
// Functions/Components
// Packages

export default function ErrorModal({ errors }) {
  const errorMessages = Object.values(errors);
  const errorKeys = Object.keys(errors);

  return (
    <main className={styles.main}>
      <div className={styles.imgContainer}>
        <img className={styles.sadowheart} src={Images.error["Sadowheart"]} />
      </div>
      <div className={styles.title}>{"Sorry, Adventurer!"}</div>

      <div className={styles.message}>
        {"The Lady Shar has denied your request"}
      </div>

      <div className={styles.errors}>
        <ul className={styles.list}>
          {errorMessages.map((err, i) => (
            <li key={i} className={styles.error}>
              {err[0]}
            </li>
          ))}
        </ul>
      </div>
      {
        (errorKeys[0] === "feature" ? (
          <div className={styles.close}>
            {
              "Visit our public repository on GitHub for more info on planned features"
            }
          </div>
        ) : (
          <div className={styles.close}>
            {"Please close this window and try again"}
          </div>
        ))
      }
    </main>
  );
}
