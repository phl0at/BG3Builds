//Files
import styles from "./Info.module.css";
//Functions/Components
import OpenModalButton from "../../Modal";
import LoginFormModal from "../../Auth/LoginFormModal";
import SignupFormModal from "../../Auth/SignupFormModal";
//Packages
import { useDispatch, useSelector } from "react-redux";
import { thunkLogin, thunkLogout } from "../../../redux/session";

export default function InfoComponent() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);

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
  };

  return (
    <main className={styles.main}>
      <div className={styles.infoPanel}>
        <div className={styles.title}>Information</div>
      </div>
      <div className={styles.userBar}>
        <div className={styles.left}>
        {user && <button className={styles.logout} onClick={logout}>Log Out</button>}
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
              <button className={styles.demo} onClick={onClick}>Demo Features</button>
            </>
          )}
        </div>
        <div className={styles.right}>
          <button
            className={styles.calcButton}
            onClick={(e) => alert("Feature coming soon!")}
          >
            Calculate Effectiveness
          </button>
        </div>
      </div>
    </main>
  );
}
