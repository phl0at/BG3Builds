//Files
import styles from "./ResetModal.module.css";
//Functions/Components
import { useModal } from "../../../../../context/Modal";
import { resetAbilities } from "../../../../../redux/build";
//Packages
import { CiCircleCheck, CiCircleRemove } from "react-icons/ci";
import { useDispatch } from "react-redux";

export default function ResetAbilitiesModal({ setPoints }) {
  const { closeModal } = useModal();
  const dispatch = useDispatch();

  const reset = (e) => {
    e.preventDefault();
    dispatch(resetAbilities());
    setPoints(27);
    closeModal();
  };
  const cancel = (e) => {
    e.preventDefault();
    closeModal();
  };

  return (
    <main className={styles.main}>
      <span className={styles.title}>RESETTING ABILITIES</span>
      <span className={styles.confirm}>Are you sure?</span>
      <div className={styles.buttons}>
        <button onClick={reset}>
          <CiCircleCheck className={styles.reset} size="30" />
        </button>
        <button onClick={cancel}>
          <CiCircleRemove className={styles.cancel} size="30" />
        </button>
      </div>
    </main>
  );
}
