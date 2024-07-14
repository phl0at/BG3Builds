// Files
import styles from "../Info.module.css";
// Functions/Components
import {
  thunkDeleteComment,
  thunkEditComment,
} from "../../../redux/build";
// Packages
import { useState } from "react";
import { useDispatch } from "react-redux";
import { CiTrash, CiEdit } from "react-icons/ci";

export function Message({ message, currUser }) {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [editMessage, setEditMessage] = useState(message.message);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(thunkEditComment({ id: message.id, message: editMessage }));
    setEditMode(false);
  };

  const onDelete = (e) => {
    e.preventDefault();
    dispatch(thunkDeleteComment(message.id));
  };

  return (
    <>
      <div className={styles.message}>
        {editMode ? (
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
        ) : (
          message.message
        )}
      </div>
      {currUser?.id === message.user_id && (
        <div className={styles.commentButtons}>
          <button
            onClick={(e) => {
              e.preventDefault();
              setEditMode(!editMode);
            }}
            className={styles.button}
          >
            <CiEdit size="18" />
          </button>
          <button onClick={onDelete} className={styles.button}>
            <CiTrash size="18" />
          </button>
        </div>
      )}
    </>
  );
}
