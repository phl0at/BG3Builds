// Files
import styles from "./Info.module.css";
// Functions/Components
import OpenModalButton from "../modals";
import LoginFormModal from "../modals/login";
import SignupFormModal from "../modals/signup";
import { thunkLogin, thunkLogout } from "../../redux/session";
// Packages
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export function UserButtons({ currentUser, setLoading }) {
  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const onClick = (e) => {
    e.preventDefault();
    
    setLoading(true);

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
    <>
      {currentUser ? (
        <button id={styles.logout} className={styles.button} onClick={logout}>
          Log Out
        </button>
      ) : (
        <>
          <OpenModalButton
            className={styles.button}
            buttonText={"Log In"}
            modalComponent={<LoginFormModal setLoading={setLoading} />}
          />
          <OpenModalButton
            className={styles.button}
            buttonText={"Sign up"}
            modalComponent={<SignupFormModal setLoading={setLoading} />}
          />
          <button className={styles.button} onClick={onClick}>
            Demo Features
          </button>
        </>
      )}
    </>
  );
}
