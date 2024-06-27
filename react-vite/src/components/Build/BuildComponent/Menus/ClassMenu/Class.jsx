//Files
import styles from "./Class.module.css";
import { Images } from "../../../../images";
//Functions/Components
import {
  addBuildClass,
  getBuildClassArray,
  setClass,
} from "../../../../../redux/build";
//Packages
import { useDispatch, useSelector } from "react-redux";
import { CiCircleRemove } from "react-icons/ci";
import OpenModalButton from "../../../../Modal";

export default function ClassComponent({ currentBuild }) {
  const dispatch = useDispatch();
  const Classes = useSelector((state) => state.static.classes);
  const buildClasses = useSelector(getBuildClassArray);

  const onClick = (e, _class) => {
    e.preventDefault();
    dispatch(setClass(_class));
  };

  const clickAddClass = (e, _class, sub_class) => {
    e.preventDefault();
    let newClass = {
      id: _class.id,
      name: _class.name,
      level: 1,
      sub_class,
    };
    buildClasses.forEach((existingClass) => {
      if (existingClass.id === _class.id) {
        newClass = {
          id: _class.id,
          name: _class.name,
          level: (existingClass.level += 1),
          sub_class,
        };
      }
    });
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
                onClick={(e) => onClick(e, 1)}
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
                onClick={(e) => onClick(e, 2)}
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
                onClick={(e) => onClick(e, 3)}
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
                onClick={(e) => onClick(e, 4)}
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
                onClick={(e) => onClick(e, 5)}
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
                onClick={(e) => onClick(e, 6)}
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
                onClick={(e) => onClick(e, 7)}
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
                onClick={(e) => onClick(e, 8)}
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
                onClick={(e) => onClick(e, 9)}
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
                onClick={(e) => onClick(e, 10)}
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
                onClick={(e) => onClick(e, 11)}
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
                onClick={(e) => onClick(e, 12)}
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
                  <button
                    className={styles.addButton}
                    onClick={(e) =>
                      clickAddClass(e, Classes[currentBuild.class], null)
                    }
                  >
                    Add Class
                  </button>
                </>
              )}
              {buildClasses[0] && (
                <OpenModalButton
                  modalComponent={""}
                  className={styles.reset}
                  buttonText={<CiCircleRemove color="red" size="30" />}
                />
              )}
            </div>
            <div className={styles.description}>
              {Classes[currentBuild.class]?.description}
            </div>
          </div>
          <div className={styles.buildClassList}>
            {buildClasses.map((_class) => {
              if (_class.id > 0) {
                const titleCase =
                  _class.name[0].toUpperCase() + _class.name.slice(1);
                return (
                  <div key={_class.id} className={styles.buildClass}>
                    <img
                      className={styles.classImg}
                      src={Images.classes[titleCase]}
                    />
                    {`${_class.name} level: ${_class.level}`}
                    {_class.sub_class && `Subclass: ${_class.sub_class}`}
                  </div>
                );
              }
            })}
          </div>
        </>
      )}
    </>
  );
}
