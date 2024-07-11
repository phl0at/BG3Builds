// Files
import styles from "../Info.module.css";
// Functions/Components
import { Message } from "./helper";
import { thunkCreateComment } from "../../../redux/build";
import { thunkGetAllUsers } from "../../../redux/users";
// Packages
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

export default function Comments() {
  const dispatch = useDispatch();
  const { buildId } = useParams();
  const [newComment, setNewComment] = useState("");
  const comments = useSelector((state) => state.builds.current.comments);
  const allUsers = useSelector((state) => state.users);
  const currUser = useSelector((state) => state.session.user);
  const existingComment = comments.find(
    (comment) => comment.user_id === currUser?.id
  );

  useEffect(() => {
    if (!Object.values(allUsers).length) dispatch(thunkGetAllUsers());
  }, []);

  if (!Object.values(allUsers).length) return "Loading...";

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(thunkCreateComment(buildId, { message: newComment }));
    setNewComment("");
  };
  return (
    <>
      <div className={styles.title}>Comments</div>
      <div className={styles.scroll}>
        <div className={styles.commentsList}>
          {comments.map((message) => {
            return (
              <div key={message.user_id} className={styles.comment}>
                <div className={styles.userName}>
                  {allUsers[message.user_id].username}
                </div>
                <Message message={message} currUser={currUser} />
              </div>
            );
          })}
        </div>
      </div>
      <form type="submit" onSubmit={onSubmit}>
        {/* {!existingComment && */}
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
        {/* } */}
      </form>
    </>
  );
}
