import styles from "../Info.module.css";

import { useState } from "react";

export function EditMessage({ message }) {
  const [editMessage, setEditMessage] = useState(message.message);

  const onSubmit = (e) => {
    e.preventDefault();
    alert("coming soon");
  };

  return (
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
  );
}
