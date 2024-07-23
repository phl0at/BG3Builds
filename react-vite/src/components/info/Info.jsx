//Files
import styles from "./Info.module.css";
//Functions/Components
import Information from "./information";
import Comments from "./comments";
import OpenModalButton from "../modals";
import SaveBuildModal from "../modals/save";
import UpdateBuildModal from "../modals/update";
import DeleteBuildModal from "../modals/delete";
import ErrorModal from "../modals/error/ErrorModal";
import { useModal } from "../../context/Modal";
//Packages
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { GiDiceTwentyFacesTwenty } from "react-icons/gi";
import { CiTrash, CiFloppyDisk, CiShare2, CiBoxList } from "react-icons/ci";

export default function InfoComponent({ currentBuild, points }) {
  const currentUser = useSelector((state) => state.session.user);
  const navigateTo = useNavigate();
  const { setModalContent } = useModal();
  const [display, setDisplay] = useState("Info");

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
                    title="Import/Export"
                    onClick={() =>
                      setModalContent(
                        <ErrorModal
                          errors={{
                            FAQ: [
                              "This feature is still under development",
                            ],
                          }}
                        />
                      )
                    }
                  >
                    <CiShare2 size="30" />
                  </button>
                  <button
                    id={styles.fade}
                    className={styles.buildButton1}
                    title="Calculate"
                    onClick={() =>
                      setModalContent(
                        <ErrorModal
                          errors={{
                            FAQ: [
                              "This feature is still under development",
                            ],
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
