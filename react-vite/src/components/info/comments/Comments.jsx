// Files
import styles from "../Info.module.css";
// Functions/Components
import { Message } from "./helper";
import { getCommentsArray, thunkCreateComment } from "../../../redux/build";
import { thunkGetAllUsers } from "../../../redux/users";
// Packages
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, NavLink } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { CiSquareAlert, CiSquarePlus } from "react-icons/ci";

export default function Comments({ setDisplay }) {
  const dispatch = useDispatch();
  const { buildId } = useParams();
  const [newComment, setNewComment] = useState("");
  const comments = useSelector(getCommentsArray);
  const allUsers = useSelector((state) => state.users);
  const currUser = useSelector((state) => state.session.user);
  const usersLoaded = Object.values(allUsers).length;

  useEffect(() => {
    if (!usersLoaded) dispatch(thunkGetAllUsers());
  }, []);

  if (!usersLoaded)
    return <ClipLoader color="#e4c274" className={styles.loading} />;

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(thunkCreateComment(buildId, { message: newComment }));
    setNewComment("");
  };
  return (
    <>
      <div className={styles.header}>
        <div className={styles.headerButton}>
          {buildId && (
            <button
              onClick={(e) => {
                e.preventDefault();
                setDisplay("Info");
              }}
              title="Information"
              className={styles.button}
            >
              <CiSquareAlert size="50" />
            </button>
          )}
        </div>
        <div className={styles.title}>Comments</div>
        <div className={styles.headerButton}>
          <NavLink
            title="Create build"
            className={styles.toCreate}
            to="/create"
          >
            <CiSquarePlus size="50" />
          </NavLink>
        </div>
      </div>
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
      <form className={styles.form} type="submit" onSubmit={onSubmit}>
        {currUser && (
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
        )}
      </form>
    </>
  );
}
