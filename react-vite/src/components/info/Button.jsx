// Files
import styles from "./Info.module.css";
// Functions/Components
import OpenModalButton from "../modals";
import SaveBuildModal from "../modals/save";
import UpdateBuildModal from "../modals/update";
import DeleteBuildModal from "../modals/delete";
import ShareModal from "../modals/share/";
import ErrorModal from "../modals/error/";
import { exportCode } from "../modals/share/helper";
import { useModal } from "../../context/Modal";
//Packages
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { GiDiceTwentyFacesTwenty } from "react-icons/gi";
import {
  CiTrash,
  CiFloppyDisk,
  CiExport,
  CiImport,
  CiBoxList,
  CiSquareAlert,
  CiSquarePlus,
  CiChat2,
} from "react-icons/ci";

export function CreateButton({ setDisplay }) {
  const navigateTo = useNavigate();

  const onClick = (e) => {
    e.preventDefault();
    setDisplay("Info");
    navigateTo("/create");
  };

  return (
    <div className={styles.headerButton}>
      <button
        title="Create build"
        className={styles.toCreate}
        onClick={onClick}
      >
        <CiSquarePlus size="50" />
      </button>
    </div>
  );
}

export function DisplayButton({ display, setDisplay }) {
  return (
    <div className={styles.headerButton}>
      <button
        onClick={(e) => {
          e.preventDefault();
          setDisplay((prev) => (prev === "Info" ? "Comments" : "Info"));
        }}
        title={display === "Info" ? "Information" : "Comments"}
        className={styles.button}
      >
        {display === "Info" && <CiChat2 size="50" />}
        {display === "Comments" && <CiSquareAlert size="48" />}
      </button>
    </div>
  );
}

export function BuildButtons() {
  const { buildId } = useParams();
  const { setModalContent } = useModal();
  const currentUser = useSelector((state) => state.session.user);
  const currentBuild = useSelector((state) => state.builds.current);
  const isBuildOwner = currentUser.id === currentBuild.user_id;
  const code = exportCode(currentBuild);

  return (
    <>
      <div className={styles.buildButtonsContainer1}>
        <OpenModalButton
          buttonText={<CiFloppyDisk size="27" />}
          id={styles.fade}
          className={styles.buildButton1}
          title="Save"
          modalComponent={
            isBuildOwner ? <UpdateBuildModal /> : <SaveBuildModal />
          }
        />
        {isBuildOwner && (
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
            setModalContent(<ShareModal code={buildId ? code : ""} />)
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
  );
}

export function NavButtons() {
  const currentUser = useSelector((state) => state.session.user);
  const navigateTo = useNavigate();

  return (
    <div
      className={
        currentUser
          ? styles.buildButtonsContainer1
          : styles.buildButtonsContainer2
      }
    >
      <button
        id={styles.fade}
        className={currentUser ? styles.buildButton1 : styles.buildButton2}
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
        className={currentUser ? styles.buildButton1 : styles.buildButton2}
        title="FAQ Page"
        onClick={(e) => {
          e.preventDefault();
          navigateTo("/faq");
        }}
      >
        ?
      </button>
    </div>
  );
}
