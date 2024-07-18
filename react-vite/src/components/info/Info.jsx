//Files
import styles from "./Info.module.css";
//Functions/Components
import Information from "./information";
import Comments from "./comments";
import OpenModalButton from "../modals";
import SaveBuildModal from "../modals/save";
import UpdateBuildModal from "../modals/update";
import DeleteBuildModal from "./delete/DeleteModal";
import ErrorModal from "../modals/error/ErrorModal";

import { useModal } from "../../context/Modal";
//Packages
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";
import {
  CiTrash,
  CiFloppyDisk,
  CiShare2,
  CiCalculator2,
  CiBoxList,
  CiCircleInfo,
  CiChat2,
} from "react-icons/ci";
import { UserButtons } from "./helper";

export default function InfoComponent({ points }) {
  const { setModalContent } = useModal();
  const { buildId } = useParams();
  const navigateTo = useNavigate();
  const currentUser = useSelector((state) => state.session.user);
  const currentBuild = useSelector((state) => state.builds.current);
  const [display, setDisplay] = useState("Info");
  const [loading, setLoading] = useState(false);

  const viewBuilds = (e) => {
    e.preventDefault();
    navigateTo("/browse");
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
                  onClick={() =>
                    setModalContent(
                      <ErrorModal
                        errors={{
                          feature: ["This feature is still under development"],
                        }}
                      />
                    )
                  }
                >
                  <CiShare2 size="30" />
                </button>
                {currentUser && (
                  <OpenModalButton
                    buttonText={<CiFloppyDisk size="27" />}
                    className={styles.button}
                    title="Save"
                    modalComponent={
                      currentUser.id === currentBuild.user_id ? (
                        <UpdateBuildModal points={points} />
                      ) : (
                        <SaveBuildModal points={points} />
                      )
                    }
                  />
                )}
                {currentUser &&
                  (currentUser.id === currentBuild.user_id ? (
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
                onClick={() =>
                  setModalContent(
                    <ErrorModal
                      errors={{
                        feature: ["This feature is still under development"],
                      }}
                    />
                  )
                }
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
              {loading & !currentUser ? (
                <ClipLoader color="#e4c274" className={styles.loggingIn} />
              ) : (
                <UserButtons
                  currentUser={currentUser}
                  setLoading={setLoading}
                />
              )}
            </div>
          </div>
        </>
      )}
    </main>
  );
}
