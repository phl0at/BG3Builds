//Files
import styles from "./DeleteModal.module.css";
//Functions/Components
import { useModal } from "../../../context/Modal";
import ErrorModal from "../error/ErrorModal";
//Packages
import { CiCircleCheck, CiCircleRemove } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function DeleteModal({ thunk, title, id }) {
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const { closeModal, setModalContent } = useModal();

  const deleteClick = async (e) => {
    e.preventDefault();

    const serverResponse = await dispatch(thunk(id));

    if (!serverResponse.status === 200) {
      setModalContent(<ErrorModal errors={serverResponse} />);
    } else {
      if (title === "BUILD") {
        navigateTo("/create");
      }
      closeModal();
    }
  };

  const cancel = (e) => {
    e.preventDefault();
    closeModal();
  };

  return (
    <main className={styles.main}>
      <span className={styles.title}>{`DELETE ${title}`}</span>
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
