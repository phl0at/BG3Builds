// Files
import styles from "./ErrorModal.module.css";
import { Images } from "../../images";
// Functions/Components
// Packages
import { NavLink } from "react-router-dom";
import { useModal } from "../../../context/Modal";

export default function ErrorModal({ errors }) {
  const errorMessages = Object.values(errors);
  const errorKeys = Object.keys(errors);
  const { closeModal } = useModal();

  return (
    <main className={styles.main}>
      <div className={styles.imgContainer}>
        <img className={styles.sadowheart} src={Images.error["Sadowheart"]} />
      </div>
      <div className={styles.title}>
        {"The Lady Shar has denied your request"}
      </div>

      {errorKeys[0] === "feature" ? null : (
        <div className={styles.message}>
          {
            "By her grace, she has blessed you with guidance to correct your errors...this time."
          }
        </div>
      )}

      <div className={styles.errors}>
        <div className={styles.list}>
          {errorMessages.map((err, i) => (
            <div key={i} className={styles.error}>
              {err[0]}
            </div>
          ))}
        </div>
      </div>
      {errorKeys[0] === "feature" ? (
        <div className={styles.close}>
          {"Visit our"} <NavLink onClick={closeModal} to="/faq">{"FAQ page"}</NavLink>{" "}
          {"for more info on planned features"}
        </div>
      ) : (
        <div className={styles.close}>
          {`Please `}
          {
            <button className={styles.white} onClick={closeModal}>
              close this window
            </button>
          }
          {` and try again`}
        </div>
      )}
    </main>
  );
}
