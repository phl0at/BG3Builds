// Files
import styles from "./UserButtons.module.css";
// Functions/Components
import { thunkLogin, thunkLogout } from "../../redux/session";
// Packages
import { useState, lazy, Suspense } from "react";
import { useLocation, useParams, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PulseLoader } from "react-spinners";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const OpenModalButton = lazy(() => import("../modals"));
const LoginFormModal = lazy(() => import("../modals/login"));
const SignupFormModal = lazy(() => import("../modals/signup"));

export default function UserButtons() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { buildId } = useParams();
  const [awaitLogin, setAwaitLogin] = useState(false);
  const currentUser = useSelector((state) => state.session.user);
  const currentBuildName = useSelector((state) => state.builds.current.name);
  const loadingUser = awaitLogin & !currentUser;

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
          {loadingUser === true && (
            <PulseLoader
              color="#e4c274"
              size="10px"
              className={styles.loggingIn}
            />
          )}
          {currentUser != null && (
            <button
              id={styles.logout}
              className={styles.button}
              onClick={logout}
            >
              Log Out
            </button>
          )}
          {currentUser === null && (
            <Suspense fallback={<PulseLoader color="#e4c274" />}>
              <>
                <OpenModalButton
                  className={styles.button}
                  buttonText={"Log In"}
                  modalComponent={
                    <Suspense fallback={<PulseLoader color="#e4c274" />}>
                      <LoginFormModal setLoading={setAwaitLogin} />
                    </Suspense>
                  }
                />
                <OpenModalButton
                  className={styles.button}
                  buttonText={"Sign up"}
                  modalComponent={
                    <Suspense fallback={<PulseLoader color="#e4c274" />}>
                      <SignupFormModal setLoading={setAwaitLogin} />
                    </Suspense>
                  }
                />
                <button className={styles.button} onClick={onClick}>
                  Demo Login
                </button>
              </>
            </Suspense>
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
