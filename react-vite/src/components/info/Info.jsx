//Files
import styles from "./Info.module.css";
//Functions/Components
import Information from "./information";
import Comments from "./comments";
import OpenModalButton from "../modals";
import SaveBuildModal from "../modals/save";
import UpdateBuildModal from "../modals/update";
import DeleteBuildModal from "../modals/delete";
import ShareModal from "../modals/share/";
import ErrorModal from "../modals/error/";
import { useModal } from "../../context/Modal";
import { exportCode } from "../modals/share/helper";
//Packages
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { GiDiceTwentyFacesTwenty } from "react-icons/gi";
import {
  CiTrash,
  CiFloppyDisk,
  CiBoxList,
  CiExport,
  CiImport,
} from "react-icons/ci";

export default function InfoComponent({ currentBuild, points, setPoints }) {
  const currentUser = useSelector((state) => state.session.user);
  const navigateTo = useNavigate();
  const { buildId } = useParams();
  const { setModalContent } = useModal();
  const [display, setDisplay] = useState("Info");
  const code = exportCode(currentBuild);

  return (
    <main className={styles.main}>
      {currentBuild && (
        <>
          <div className={styles.infoPanel}>
            {display === "Info" && (
              <Information
                setDisplay={setDisplay}
                currentBuild={currentBuild}
              />
            )}
            {display === "Comments" && <Comments setDisplay={setDisplay} />}
          </div>
          <div className={styles.userBar}>
            {currentUser && (
              <>
                <div className={styles.buildButtonsContainer1}>
                  <OpenModalButton
                    buttonText={<CiFloppyDisk size="27" />}
                    id={styles.fade}
                    className={styles.buildButton1}
                    title="Save"
                    modalComponent={
                      currentUser.id === currentBuild.user_id ? (
                        <UpdateBuildModal points={points} />
                      ) : (
                        <SaveBuildModal points={points} />
                      )
                    }
                  />
                  {currentUser.id === currentBuild.user_id && (
                    <OpenModalButton
                      buttonText={<CiTrash size="27" />}
                      id={styles.fade}
                      className={styles.buildButton1}
                      title="Delete"
                      modalComponent={<DeleteBuildModal />}
                    />
                  )}
                </div>
                <div className={styles.buildButtonsContainer1}>
                  <button
                    id={styles.fade}
                    className={styles.buildButton1}
                    title={buildId ? "Export" : "Import"}
                    onClick={() =>
                      setModalContent(
                        <ShareModal
                          code={buildId ? code : ""}
                          setPoints={setPoints}
                        />
                      )
                    }
                  >
                    {buildId ? <CiExport size="32" /> : <CiImport size="32" />}
                  </button>
                  <button
                    id={styles.fade}
                    className={styles.buildButton1}
                    title="Calculate"
                    onClick={() =>
                      setModalContent(
                        <ErrorModal
                          errors={{
                            FAQ: ["This feature is still under development"],
                          }}
                        />
                      )
                    }
                  >
                    <GiDiceTwentyFacesTwenty size="32" />
                  </button>
                </div>
              </>
            )}

            <div
              className={
                currentUser
                  ? styles.buildButtonsContainer1
                  : styles.buildButtonsContainer2
              }
            >
              <button
                id={styles.fade}
                className={
                  currentUser ? styles.buildButton1 : styles.buildButton2
                }
                title="Browse Other Builds"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo("/browse");
                }}
              >
                <CiBoxList size="32" />
              </button>

              <button
                id={styles.fade}
                className={
                  currentUser ? styles.buildButton1 : styles.buildButton2
                }
                title="FAQ Page"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo("/faq");
                }}
              >
                ?
              </button>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
