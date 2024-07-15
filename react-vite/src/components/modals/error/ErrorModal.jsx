// Files
import styles from "./ErrorModal.module.css";
import { Images } from "../../images";
// Functions/Components
// Packages
import { NavLink } from "react-router-dom";

export default function ErrorModal({ errors }) {
  const errorMessages = Object.values(errors);
  const errorKeys = Object.keys(errors);

  return (
    <main className={styles.main}>
      <div className={styles.imgContainer}>
        <img className={styles.sadowheart} src={Images.error["Sadowheart"]} />
      </div>
      <div className={styles.title}>
        {"The Lady Shar has denied your request"}
      </div>

      <div className={styles.message}>
        {
          "By her grace, she has blessed you with guidance to correct your errors...this time."
        }
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
      {errorKeys[0] === "feature" ? (
        <div className={styles.close}>
          {"Visit our public repository on"} <NavLink to="https://github.com/phl0at/BG3Builds/wiki">{"GitHub"}</NavLink> {"for more info on planned features"}
        </div>
      ) : (
        <div className={styles.close}>
          {"Please close this window and try again"}
        </div>
      )}
    </main>
  );
}
