//Files
import styles from "./Info.module.css";
import { Images } from "../../../images";
//Functions/Components
import OpenModalButton from "../../../Modal";
import LoginFormModal from "../../../Auth/LoginFormModal";
import SignupFormModal from "../../../Auth/SignupFormModal";
import SaveBuildModal from "../../Pages/CreatePage/SaveModal";
import UpdateBuildModal from "../../Pages/EditPage/UpdateModal";
import DeleteBuildModal from "./DeleteModal/DeleteModal";
import { thunkLogin, thunkLogout } from "../../../../redux/session";
//Packages
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  CiTrash,
  CiFloppyDisk,
  CiShare2,
  CiAlignBottom,
  CiBoxList,
} from "react-icons/ci";

export default function InfoComponent({ points }) {
  const dispatch = useDispatch();
  const { buildId } = useParams();
  const navigateTo = useNavigate();
  const user = useSelector((state) => state.session.user);
  const currentBuild = useSelector((state) => state.builds.current);
  const build_classes = useSelector(
    (state) => state.builds.current?.build_classes
  );
  const Backgrounds = useSelector((state) => state.static.backgrounds);
  const Origins = useSelector((state) => state.static.origins);
  const Races = useSelector((state) => state.static.races);

  const attributes = [
    "strength",
    "dexterity",
    "constitution",
    "intelligence",
    "wisdom",
    "charisma",
  ];

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
          <div className={styles.infoPanel}>
            <div className={styles.title}>Information</div>
            <div className={styles.infoClassHead}>
              {currentBuild.build_classes.length ? (
                <img src={Images.classes[currentBuild.build_classes[0].name]} />
              ) : (
                "No classes"
              )}
            </div>
            <div className={styles.infoBody}>
              <div className={styles.infoName}>
                {buildId ? currentBuild.name : null}
              </div>
              <div className={styles.infoAttributes}>
                {attributes.map((att) => {
                  const cont = `${att[0].toUpperCase()}${att.slice(1, 3)}`;
                  return (
                    <div key={att} className={styles.stat}>
                      <div className={styles.orange}>{cont}</div>
                      <div>{currentBuild[att]}</div>
                    </div>
                  );
                })}
              </div>
              <div className={styles.infoClasses}>
                {build_classes.map((bc) => (
                  <div className={styles.infoClass} key={bc.class_id}>
                    <img
                      title={bc.name}
                      className={styles.listImage}
                      src={Images.classes[bc.name]}
                    />
                    <div>{bc.level}</div>
                  </div>
                ))}
              </div>
              <div className={styles.infoCharacter}>
                <div className={styles.infoCharL}>
                  <div>Origin: {Origins[currentBuild.origin].name}</div>
                  <div>Character Name: {currentBuild.character_name}</div>
                </div>
                <div className={styles.infoCharR}>
                  <div>
                    <div>| Race: {Races[currentBuild.race].name}</div>
                    <div>
                      | Background: {Backgrounds[currentBuild.background].name}
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                    buttonText={<CiFloppyDisk size="30" />}
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
                      buttonText={<CiTrash size="30" />}
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
                <CiAlignBottom size="40" />
              </button>
            </div>
            <div className={styles.userInfo}>
              <button
                id={styles.calButton}
                className={styles.button}
                title="Browse Other Builds"
                onClick={viewBuilds}
              >
                <CiBoxList size="40" />
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
