//Files
import styles from "./Class.module.css";
import { Images } from "../../../images";
//Functions/Components
import { getBuildClassArray, action } from "../../../../redux/build";
import OpenModalButton from "../../../modals";
import ResetClassesModal from "./reset";
//Packages
import { useDispatch, useSelector } from "react-redux";
import { CiUndo } from "react-icons/ci";

export default function ClassComponent() {
  const dispatch = useDispatch();
  const buildClasses = useSelector(getBuildClassArray);
  const currentLevel = useSelector((state) => state.builds.current.level);
  const currentClass = useSelector(state=>state.builds.current.class)
  const Classes = useSelector((state) => state.static.classes);
  const notMaxLevel = !currentLevel || currentLevel < 12;

  const clickClass = (e, _class) => {
    e.preventDefault();
    dispatch(action("build/setClass", _class));
  };

  const clickAddClass = (e, _class, sub_class) => {
    e.preventDefault();
    const newClass = {
      class_id: _class.class_id,
      name: _class.name,
      sub_class,
    };
    dispatch(action("build/addBuildClass", newClass));
  };

  return (
    <>
      <div className={styles.header}>
        <div className={styles.reset}>
          {buildClasses.length ? (
            <OpenModalButton
              buttonText={<CiUndo size="40" />}
              modalComponent={<ResetClassesModal />}
            />
          ) : null}
        </div>
        <div className={styles.title}>Class</div>
      </div>
      <div className={styles.classList}>
        <div className={styles.class}>
          <img
            onClick={(e) => clickClass(e, 1)}
            src={Images.classes["Barbarian"]}
            className={
              currentClass === 1
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
              currentClass === 2
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
              currentClass === 3
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
              currentClass === 4
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
              currentClass === 5
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
              currentClass === 6
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
              currentClass === 7
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
              currentClass === 8
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
              currentClass === 9
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
              currentClass === 10
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
              currentClass === 11
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
              currentClass === 12
                ? styles.selected_classImg
                : styles.classImg
            }
          ></img>
          Wizard
        </div>
      </div>
      <div className={styles.select}>
        <div className={styles.nameSection}>
          {currentClass && (
            <>
              {Classes[currentClass]?.name}
              {notMaxLevel && (
                <button
                  className={styles.addButton}
                  onClick={(e) =>
                    clickAddClass(e, Classes[currentClass], null)
                  }
                >
                  Add Class
                </button>
              )}
            </>
          )}
        </div>
        <div className={styles.description}>
          {Classes[currentClass]?.description}
        </div>
      </div>
      <div className={styles.buildClassList}>
        {buildClasses.map((_class) => {
          const titleCase = _class.name[0].toUpperCase() + _class.name.slice(1);
          return (
            <div key={_class.class_id} className={styles.buildClass}>
              <img
                className={styles.classImg}
                src={Images.classes[titleCase]}
              />
              {`${_class.name}: ${_class.level}`}
              {/* {_class.sub_class && `Subclass: ${_class.sub_class}`} */}
            </div>
          );
        })}
      </div>
    </>
  );
}
