// Files
import styles from "./ErrorModal.module.css";
// Functions/Components
import { useModal } from "../../../context/Modal";
// Packages
import { NavLink } from "react-router-dom";
import { IKImage } from "imagekitio-react";

export default function ErrorModal({ errors }) {
  const errorMessages = Object.values(errors);
  const errorKeys = Object.keys(errors);
  const { closeModal } = useModal();
  const linkToFAQ = errorKeys[0] === "FAQ";

  return (
    <main className={styles.main}>
      <div className={styles.imgContainer}>
        <IKImage
          loading="lazy"
          className={styles.sadowheart}
          path={"error_icon/Sadowheart.png"}
        />
      </div>

      <div className={styles.title}>
        {"The Lady Shar has denied your request"}
      </div>

      <p className={styles.message}>
        {
          "By her grace, she has blessed you with guidance to correct your errors...this time."
        }
      </p>

      <div className={styles.errors}>
        <div className={styles.list}>
          {errorMessages.map((err, i) => (
            <div key={i} className={styles.error}>
              {typeof err == Array ? err[0] : err}
            </div>
          ))}
        </div>
      </div>

      {linkToFAQ && (
        <div className={styles.close}>
          {`Visit the `}
          <NavLink onClick={closeModal} to="/faq">
            {`FAQ page`}
          </NavLink>
          {` for more details`}
        </div>
      )}

      {!linkToFAQ && (
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
