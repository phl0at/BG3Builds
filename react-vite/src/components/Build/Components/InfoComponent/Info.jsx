//Files
import styles from "./Info.module.css";
//Functions/Components
import Information from "./Information";
import Comments from "./Comments";
import OpenModalButton from "../../../Modal";
import LoginFormModal from "../../../Auth/LoginFormModal";
import SignupFormModal from "../../../Auth/SignupFormModal";
import SaveBuildModal from "../../Pages/CreatePage/SaveModal";
import UpdateBuildModal from "../../Pages/EditPage/UpdateModal";
import DeleteBuildModal from "./DeleteModal/DeleteModal";
import { thunkLogin, thunkLogout } from "../../../../redux/session";
//Packages
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  CiTrash,
  CiFloppyDisk,
  CiShare2,
  CiCalculator2,
  CiBoxList,
  CiCircleInfo,
  CiChat2,
} from "react-icons/ci";

export default function InfoComponent({ points }) {
  const dispatch = useDispatch();
  const { buildId } = useParams();
  const navigateTo = useNavigate();
  const user = useSelector((state) => state.session.user);
  const currentBuild = useSelector((state) => state.builds.current);
  const [display, setDisplay] = useState("Info");

  const viewBuilds = (e) => {
    e.preventDefault();
    navigateTo("/browse");
  };

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
      {currentBuild && (
        <>
          {buildId && (
            <>
              <div className={styles.infoToggle}>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setDisplay("Info");
                  }}
                  title="Information"
                  className={styles.button}
                >
                  <CiCircleInfo size="33" />
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setDisplay("Comments");
                  }}
                  title="Comments"
                  className={styles.button}
                >
                  <CiChat2 size="33" />
                </button>
              </div>
            </>
          )}
          <div className={styles.infoPanel}>
            {display === "Info" && <Information currentBuild={currentBuild} />}
            {display === "Comments" && <Comments currentBuild={currentBuild} />}
          </div>
          <div className={styles.userBar}>
            <div className={styles.buildButtonsContainer}>
              <div className={styles.buildButtons}>
                <button
                  className={styles.button}
                  title="Import/Export"
                  onClick={() => alert("Feature coming soon!")}
                >
                  <CiShare2 size="30" />
                </button>
                {user && (
                  <OpenModalButton
                    buttonText={<CiFloppyDisk size="27" />}
                    className={styles.button}
                    title="Save"
                    modalComponent={
                      user.id === currentBuild.user_id ? (
                        <UpdateBuildModal points={points} />
                      ) : (
                        <SaveBuildModal points={points} />
                      )
                    }
                  />
                )}
                {user &&
                  (user.id === currentBuild.user_id ? (
                    <OpenModalButton
                      buttonText={<CiTrash size="27" />}
                      className={styles.button}
                      title="Delete"
                      modalComponent={<DeleteBuildModal />}
                    />
                  ) : null)}
              </div>
              <button
                id={styles.calButton}
                className={styles.button}
                title="Calculate"
                onClick={() => alert("Feature coming soon!")}
              >
                <CiCalculator2 size="32" />
              </button>
            </div>
            <div className={styles.userInfo}>
              <button
                id={styles.calButton}
                className={styles.button}
                title="Browse Other Builds"
                onClick={viewBuilds}
              >
                <CiBoxList size="32" />
              </button>
            </div>
            <div className={styles.userButtons}>
              {user && (
                <button
                  id={styles.logout}
                  className={styles.button}
                  onClick={logout}
                >
                  Log Out
                </button>
              )}
              {!user && (
                <>
                  <OpenModalButton
                    className={styles.button}
                    buttonText={"Log In"}
                    modalComponent={<LoginFormModal />}
                  />
                  <OpenModalButton
                    className={styles.button}
                    buttonText={"Sign up"}
                    modalComponent={<SignupFormModal />}
                  />
                  <button className={styles.button} onClick={onClick}>
                    Demo Features
                  </button>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </main>
  );
}
