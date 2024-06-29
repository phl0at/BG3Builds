//Files
import styles from "./Info.module.css";
//Functions/Components
import OpenModalButton from "../../Modal";
import LoginFormModal from "../../Auth/LoginFormModal";
import SignupFormModal from "../../Auth/SignupFormModal";
import SaveBuildModal from "../CreatePage/SaveModal";
import UpdateBuildModal from "../EditPage/UpdateModal";
import { thunkLogin, thunkLogout } from "../../../redux/session";
//Packages
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function InfoComponent({ points }) {
  const dispatch = useDispatch();
  // const { buildId } = useParams();
  const navigateTo = useNavigate();
  const user = useSelector((state) => state.session.user);
  const currentBuild = useSelector((state) => state.builds.current);

  const onClick = (e) => {
    e.preventDefault();
    dispatch(
      thunkLogin({
        email: "demo@aa.com",
        password: "password",
      })
    );
  };

  const logout = (e) => {
    e.preventDefault();
    dispatch(thunkLogout());
    navigateTo("/");
  };

  return (
    <main className={styles.main}>
      <div className={styles.infoPanel}>
        <div className={styles.title}>Information</div>
      </div>
      <div className={styles.userBar}>
        <div className={styles.buildButtons}>
          {user &&
            (user.id === currentBuild?.user_id ? (
              <OpenModalButton
                buttonText={"Update"}
                className={styles.saveButton}
                modalComponent={<UpdateBuildModal points={points} />}
              />
            ) : (
              <OpenModalButton
                buttonText={"Save"}
                className={styles.saveButton}
                modalComponent={<SaveBuildModal points={points} />}
              />
            ))}
          <button
            className={styles.calcButton}
            onClick={() => alert("Feature coming soon!")}
          >
            Share
          </button>
          <button
            className={styles.calcButton}
            onClick={() => alert("Feature coming soon!")}
          >
            Calculate
          </button>
        </div>
        <div className={styles.userButtons}>
          {user && (
            <button className={styles.logout} onClick={logout}>
              Log Out
            </button>
          )}
          {!user && (
            <>
              <OpenModalButton
                className={styles.login}
                buttonText={"Log In"}
                modalComponent={<LoginFormModal />}
              />
              <OpenModalButton
                className={styles.signup}
                buttonText={"Sign up"}
                modalComponent={<SignupFormModal />}
              />
              <button className={styles.demo} onClick={onClick}>
                Demo Features
              </button>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
