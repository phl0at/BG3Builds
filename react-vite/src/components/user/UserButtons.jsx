// Files
import styles from "./UserButtons.module.css";
// Functions/Components
import { thunkLogout } from "../../redux/session";
import OpenModalButton from "../modals";
import LoginFormModal from "../modals/login";
import SignupFormModal from "../modals/signup";
// Packages
import { useState } from "react";
import { useLocation, useParams, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PulseLoader } from "react-spinners";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export default function UserButtons() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { buildId } = useParams();
  const [awaitLogin, setAwaitLogin] = useState(false);
  const currentUser = useSelector((state) => state.session.user);
  const currentBuildName = useSelector((state) => state.builds.current.name);
  const loadingUser = (awaitLogin === true) & (currentUser === null);

  const logout = async (e) => {
    e.preventDefault();
    setAwaitLogin(true);
    const loggedOut = await dispatch(thunkLogout());
    if (loggedOut) {
      setAwaitLogin(false);
    }
  };

  if (pathname === "/")
    return (
      <div className={styles.links}>
        <NavLink to="https://linkedin.com/in/phl0at">
          <AiFillLinkedin color="#e4c274" size="30" />
        </NavLink>

        <NavLink to="https://github.com/phl0at/BG3Builds">
          <AiFillGithub color="#e4c274" size="30" />
        </NavLink>
      </div>
    );

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
          {loadingUser ? (
            <PulseLoader color="#e4c274" />
          ) : currentUser != null ? (
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
                modalComponent={
                  <LoginFormModal
                    loading={loadingUser}
                    setLoading={setAwaitLogin}
                  />
                }
              />
              <OpenModalButton
                className={styles.button}
                buttonText={"Sign up"}
                modalComponent={
                  <SignupFormModal
                    loading={loadingUser}
                    setLoading={setAwaitLogin}
                  />
                }
              />
            </>
          )}
        </div>
        <div className={styles.links}>
          <NavLink to="https://linkedin.com/in/phl0at">
            <AiFillLinkedin color="#e4c274" size="30" />
          </NavLink>

          <NavLink to="https://github.com/phl0at/BG3Builds">
            <AiFillGithub color="#e4c274" size="30" />
          </NavLink>
        </div>
      </div>
    </main>
  );
}
