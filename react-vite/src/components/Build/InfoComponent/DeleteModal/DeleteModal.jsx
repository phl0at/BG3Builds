//Files
import styles from "./DeleteModal.module.css";
//Functions/Components
import { thunkDeleteBuild } from "../../../../redux/build";
import { useModal } from "../../../../context/Modal";
//Packages
import { CiCircleCheck, CiCircleRemove } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function DeleteBuildModal() {
  const { closeModal } = useModal();
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const currentBuildId = useSelector((state) => state.builds.current.id);

  const deleteClick = async (e) => {
    e.preventDefault();
    const deleted = await dispatch(thunkDeleteBuild(currentBuildId));
    if (deleted) {
      navigateTo("/create");
      closeModal();
    } else {
      alert("Try again!")
    }
  };
  const cancel = (e) => {
    e.preventDefault();
    closeModal();
  };

  return (
    <main className={styles.main}>
      <span className={styles.title}>DELETE BUILD</span>
      <span className={styles.confirm}>Are you sure?</span>
      <div className={styles.buttons}>
        <button onClick={deleteClick}>
          <CiCircleCheck className={styles.delete} size="30" />
        </button>
        <button onClick={cancel}>
          <CiCircleRemove className={styles.cancel} size="30" />
        </button>
      </div>
    </main>
  );
}
