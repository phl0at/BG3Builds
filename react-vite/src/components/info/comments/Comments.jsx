// Files
import styles from "../Info.module.css";
// Functions/Components
import { Message } from "./helper";
import { getCommentsArray, thunkCreateComment } from "../../../redux/build";
import { thunkGetAllUsers } from "../../../redux/users";
import { useModal } from "../../../context/Modal";
import ErrorModal from "../../modals/error/ErrorModal";
// Packages
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, NavLink } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { CiSquareAlert, CiSquarePlus } from "react-icons/ci";

export default function Comments({ setDisplay }) {
  const dispatch = useDispatch();
  const { buildId } = useParams();
  const { setModalContent } = useModal();
  const comments = useSelector(getCommentsArray);
  const allUsers = useSelector((state) => state.users);
  const currentUser = useSelector((state) => state.session.user);
  const usersLoaded = Object.values(allUsers).length;
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    if (!usersLoaded) dispatch(thunkGetAllUsers());
  }, []);

  if (!usersLoaded)
    return <ClipLoader color="#e4c274" className={styles.loading} />;

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
                <Message message={message} />
              </div>
            );
          })}
        </div>
      </div>
      <form className={styles.form} type="submit" onSubmit={onSubmit}>
        {currentUser && (
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
