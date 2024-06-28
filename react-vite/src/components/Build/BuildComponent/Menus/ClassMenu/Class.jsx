//Files
import styles from "./Class.module.css";
import { Images } from "../../../../images";
//Functions/Components
import { addBuildClass, setClass } from "../../../../../redux/build";
import OpenModalButton from "../../../../Modal";
import ResetClassesModal from "./ResetModal";
//Packages
import { useDispatch, useSelector } from "react-redux";
import { CiUndo } from "react-icons/ci";

export default function ClassComponent({ currentBuild }) {
  const notMaxLevel = !currentBuild.level || currentBuild.level < 12;
  const dispatch = useDispatch();
  const Classes = useSelector((state) => state.static.classes);
  const buildClasses = useSelector(
    (state) => state.builds.current.build_classes
  );

  const clickClass = (e, _class) => {
    e.preventDefault();
    dispatch(setClass(_class));
  };

  const clickAddClass = (e, _class, sub_class) => {
    e.preventDefault();
    const newClass = {
      class_id: _class.class_id,
      name: _class.name,
      sub_class,
    };
    dispatch(addBuildClass(newClass));
  };

  return (
    <>
      {Classes && (
        <>
          <div className={styles.title}>Class</div>
          <div className={styles.classList}>
            <div className={styles.class}>
              <img
                onClick={(e) => clickClass(e, 1)}
                src={Images.classes["Barbarian"]}
                className={
                  currentBuild?.class === 1
                    ? styles.selected_classImg
                    : styles.classImg
                }
              ></img>
              Barbarian
            </div>
            <div className={styles.class}>
              <img
                onClick={(e) => clickClass(e, 2)}
                src={Images.classes["Bard"]}
                className={
                  currentBuild?.class === 2
                    ? styles.selected_classImg
                    : styles.classImg
                }
              ></img>
              Bard
            </div>
            <div className={styles.class}>
              <img
                onClick={(e) => clickClass(e, 3)}
                src={Images.classes["Cleric"]}
                className={
                  currentBuild?.class === 3
                    ? styles.selected_classImg
                    : styles.classImg
                }
              ></img>
              Cleric
            </div>
            <div className={styles.class}>
              <img
                onClick={(e) => clickClass(e, 4)}
                src={Images.classes["Druid"]}
                className={
                  currentBuild?.class === 4
                    ? styles.selected_classImg
                    : styles.classImg
                }
              ></img>
              Druid
            </div>
            <div className={styles.class}>
              <img
                onClick={(e) => clickClass(e, 5)}
                src={Images.classes["Fighter"]}
                className={
                  currentBuild?.class === 5
                    ? styles.selected_classImg
                    : styles.classImg
                }
              ></img>
              Fighter
            </div>
            <div className={styles.class}>
              <img
                onClick={(e) => clickClass(e, 6)}
                src={Images.classes["Monk"]}
                className={
                  currentBuild?.class === 6
                    ? styles.selected_classImg
                    : styles.classImg
                }
              ></img>
              Monk
            </div>
            <div className={styles.class}>
              <img
                onClick={(e) => clickClass(e, 7)}
                src={Images.classes["Paladin"]}
                className={
                  currentBuild?.class === 7
                    ? styles.selected_classImg
                    : styles.classImg
                }
              ></img>
              Paladin
            </div>
            <div className={styles.class}>
              <img
                onClick={(e) => clickClass(e, 8)}
                src={Images.classes["Ranger"]}
                className={
                  currentBuild?.class === 8
                    ? styles.selected_classImg
                    : styles.classImg
                }
              ></img>
              Ranger
            </div>
            <div className={styles.class}>
              <img
                onClick={(e) => clickClass(e, 9)}
                src={Images.classes["Rogue"]}
                className={
                  currentBuild?.class === 9
                    ? styles.selected_classImg
                    : styles.classImg
                }
              ></img>
              Rogue
            </div>
            <div className={styles.class}>
              <img
                onClick={(e) => clickClass(e, 10)}
                src={Images.classes["Sorcerer"]}
                className={
                  currentBuild?.class === 10
                    ? styles.selected_classImg
                    : styles.classImg
                }
              ></img>
              Sorcerer
            </div>
            <div className={styles.class}>
              <img
                onClick={(e) => clickClass(e, 11)}
                src={Images.classes["Warlock"]}
                className={
                  currentBuild?.class === 11
                    ? styles.selected_classImg
                    : styles.classImg
                }
              ></img>
              Warlock
            </div>
            <div className={styles.class}>
              <img
                onClick={(e) => clickClass(e, 12)}
                src={Images.classes["Wizard"]}
                className={
                  currentBuild?.class === 12
                    ? styles.selected_classImg
                    : styles.classImg
                }
              ></img>
              Wizard
            </div>
          </div>
          <div className={styles.select}>
            <div className={styles.nameSection}>
              {currentBuild.class && (
                <>
                  {Classes[currentBuild.class]?.name}
                  {notMaxLevel && (
                    <button
                      className={styles.addButton}
                      onClick={(e) =>
                        clickAddClass(e, Classes[currentBuild.class], null)
                      }
                    >
                      Add Class
                    </button>
                  )}
                </>
              )}
              {buildClasses[0] && (
                <OpenModalButton
                  className={styles.reset}
                  buttonText={<CiUndo size="40" />}
                  modalComponent={<ResetClassesModal />}
                />
              )}
            </div>
            <div className={styles.description}>
              {Classes[currentBuild.class]?.description}
            </div>
          </div>
          <div className={styles.buildClassList}>
            {buildClasses &&
              buildClasses.map((_class) => {
                const titleCase =
                  _class.name[0].toUpperCase() + _class.name.slice(1);
                return (
                  <div key={_class.class_id} className={styles.buildClass}>
                    <img
                      className={styles.classImg}
                      src={Images.classes[titleCase]}
                    />
                    {`${_class.name}: ${_class.level}`}
                    {_class.sub_class && `Subclass: ${_class.sub_class}`}
                  </div>
                );
              })}
          </div>
        </>
      )}
    </>
  );
}
