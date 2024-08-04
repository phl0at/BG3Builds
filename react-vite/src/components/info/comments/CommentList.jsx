import { NewMessage } from "./NewMessage";
// Files
import styles from "../Info.module.css";
// Functions/Components
import { Message } from "./Message";
import { getCommentsArray } from "../../../redux/build";
// Packages
import { useSelector } from "react-redux";
import { CreateButton, DisplayButton } from "../Button";

export default function Comments({ display, setDisplay }) {
  const comments = useSelector(getCommentsArray);
  const currentUser = useSelector((state) => state.session.user);

  return (
    <>
      <div className={styles.header}>
        <DisplayButton display={display} setDisplay={setDisplay} />
        <div className={styles.title}>Comments</div>
        <CreateButton display={display} setDisplay={setDisplay} />
      </div>
      <div className={styles.scroll}>
        <div className={styles.commentsList}>
          {comments.length < 1 && (
            <div className={styles.noComment}>No Comments</div>
          )}
          {comments.map((message) => (
            <Message key={message.id} message={message} />
          ))}
        </div>
      </div>
      {currentUser && <NewMessage />}
    </>
  );
}
