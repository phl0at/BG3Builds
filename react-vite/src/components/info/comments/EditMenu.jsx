import styles from "../Info.module.css";
import { thunkDeleteComment } from "../../../redux/build";
import { useDispatch } from "react-redux";
import { CiTrash, CiEdit } from "react-icons/ci";

export function EditMenu({ id, setEditMode, setEditDisplay }) {
  const dispatch = useDispatch();

  const onDelete = (e) => {
    e.preventDefault();
    dispatch(thunkDeleteComment(id));
  };

  return (
    <div className={styles.commentButtons}>
      <button
        onClick={(e) => {
          e.preventDefault();
          setEditMode((prev) => !prev);
          setEditDisplay(false)
        }}
        className={styles.button}
      >
        Edit <CiEdit size="18" />
      </button>
      <button onClick={onDelete} className={styles.button}>
       Delete <CiTrash size="18" />
      </button>
    </div>
  );
}
