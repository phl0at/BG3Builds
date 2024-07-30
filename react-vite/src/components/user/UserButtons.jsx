// Files
import styles from "./UserButtons.module.css";
// Functions/Components
import OpenModalButton from "../modals";
import LoginFormModal from "../modals/login";
import SignupFormModal from "../modals/signup";
import { thunkLogin, thunkLogout } from "../../redux/session";
// Packages
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PulseLoader } from "react-spinners";

export default function UserButtons() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { buildId } = useParams();
  const [awaitLogin, setAwaitLogin] = useState(false);
  const currentUser = useSelector((state) => state.session.user);
  const currentBuildName = useSelector((state) => state.builds.current.name);

  const onClick = (e) => {
    e.preventDefault();

    setAwaitLogin(true);

    dispatch(
      thunkLogin({
        email: "demo@aa.com",
        password: "password",
      })
    );
  };

  const logout = (e) => {
    e.preventDefault();
    setAwaitLogin(false);
    dispatch(thunkLogout());
  };

  if (pathname === "/") return "";

  return (
    <main className={styles.header}>
      <div className={styles.container}>
        <div className={styles.buildName}>
          {pathname === "/browse"
            ? "Browse"
            : pathname === "/create"
            ? "New Build"
            : pathname === `/build/${buildId}`
            ? currentBuildName
            : "FAQ"}
        </div>

        <div className={styles.userButtons}>
          {awaitLogin & !currentUser ? (
            <PulseLoader
              color="#e4c274"
              size="10px"
              className={styles.loggingIn}
            />
          ) : currentUser ? (
            <button
              id={styles.logout}
              className={styles.button}
              onClick={logout}
            >
              Log Out
            </button>
          ) : (
            <>
              <OpenModalButton
                className={styles.button}
                buttonText={"Log In"}
                modalComponent={<LoginFormModal setLoading={setAwaitLogin} />}
              />
              <OpenModalButton
                className={styles.button}
                buttonText={"Sign up"}
                modalComponent={<SignupFormModal setLoading={setAwaitLogin} />}
              />
              <button className={styles.button} onClick={onClick}>
                Demo Features
              </button>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
