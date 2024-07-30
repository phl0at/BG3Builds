// Files
import styles from "./ErrorModal.module.css";
// Functions/Components
import { useModal } from "../../../context/Modal";
// Packages
import { NavLink } from "react-router-dom";

export default function ErrorModal({ errors }) {
  const errorMessages = Object.values(errors);
  const errorKeys = Object.keys(errors);
  const { closeModal } = useModal();
  const linkToFAQ = errorKeys[0] === "FAQ";

  return (
    <main className={styles.main}>
      <div className={styles.imgContainer}>
        <img
          loading="lazy"
          className={styles.sadowheart}
          src={"https://ik.imagekit.io/phl0at/images/error_icon/Sadowheart.png"}
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
              {err[0]}
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
