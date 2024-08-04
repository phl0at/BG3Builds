// Files
import styles from "../Info.module.css";
// Functions/Components
import { useModal } from "../../../context/Modal";
import { thunkCreateComment } from "../../../redux/build";
import ErrorModal from "../../modals/error";
// Packages
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

export function NewMessage() {
  const { buildId } = useParams();
  const { setModalContent } = useModal();
  const dispatch = useDispatch();
  const [newComment, setNewComment] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim().length) {
      dispatch(thunkCreateComment(buildId, { message: newComment }));
      setNewComment("");
    } else {
      setModalContent(
        <ErrorModal
          errors={{
            error: ["Comments must include valid text"],
          }}
        />
      );
    }
  };

  return (
    <form className={styles.form} type="submit" onSubmit={onSubmit}>
      <input
        value={newComment}
        onChange={(e) => {
          e.preventDefault();
          setNewComment(e.target.value);
        }}
        className={styles.textBox}
        placeholder="Leave a comment!"
        type="text"
        required
      />
    </form>
  );
}
