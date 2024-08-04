import styles from "../Info.module.css";
import ErrorModal from "../../modals/error";
import { thunkEditComment } from "../../../redux/build";
import { useModal } from "../../../context/Modal";
import { useDispatch } from "react-redux";

export function EditMessage({ id, setEditMode, editMessage, setEditMessage }) {
  const { setModalContent } = useModal();
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    if ((editMessage.trim().length > 0) & (editMessage.length < 140)) {
      dispatch(thunkEditComment({ id, message: editMessage }));
    } else {
      setModalContent(
        <ErrorModal
          errors={{
            error: [
              "Comments may not be longer than 140 characters and must include valid text",
            ],
          }}
        />
      );
    }
    setEditMode(false);
  };

  return (
    <div className={styles.edit}>
      <form type="submit" onSubmit={onSubmit}>
        <input
          value={editMessage}
          onChange={(e) => {
            e.preventDefault();
            setEditMessage(e.target.value);
          }}
          className={styles.textBox}
          placeholder="Edit your message"
          type="text"
          required
        />
      </form>
      <button
        className={styles.cancel}
        onClick={(e) => {
          e.preventDefault;
          setEditMode(false);
        }}
      >
        Cancel
      </button>
    </div>
  );
}
