// Files
import styles from "../Info.module.css";
// Functions/Components
import { EditMenu } from "./EditMenu";
import { EditMessage } from "./EditMessage";
// Packages
import { useState } from "react";
import { useSelector } from "react-redux";
import { BsThreeDots } from "react-icons/bs";

export function Message({ message }) {
  const currentUser = useSelector((state) => state.session.user);
  const [editDisplay, setEditDisplay] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editMessage, setEditMessage] = useState(message.message);

  return (
    <>
      <div className={styles.comment}>
        <div className={styles.userName}>{message.user_name}</div>
        {!editMode ? (
          <div className={styles.message}>{message.message}</div>
        ) : (
          <EditMessage
            id={message.id}
            editMessage={editMessage}
            setEditMessage={setEditMessage}
            setEditMode={setEditMode}
          />
        )}
        <div className={styles.dots}>
          {currentUser?.id === message.user_id && (
            <BsThreeDots
              size="25"
              onClick={() => setEditDisplay((prev) => !prev)}
            />
          )}
        </div>
        {editDisplay && (
          <EditMenu
            id={message.id}
            setEditMode={setEditMode}
            setEditDisplay={setEditDisplay}
          />
        )}
      </div>
    </>
  );
}
