//Files
import styles from "./Class.module.css";
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
  const currentClass = useSelector((state) => state.builds.current.class);
  const Classes = useSelector((state) => state.static.classes);
  const notMaxLevel = !currentLevel || currentLevel < 12;

  const clickClass = (e, classId) => {
    e.preventDefault();
    dispatch(action("build/setClass", classId));
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
          {buildClasses.length > 0 && (
            <OpenModalButton
              buttonText={<CiUndo size="40" />}
              modalComponent={<ResetClassesModal />}
            />
          )}
        </div>
        <div className={styles.title}>Class</div>
      </div>
      <div className={styles.classList}>
        {Object.values(Classes).map((_class) => (
          <div key={_class.class_id} className={styles.class}>
            <img
              loading="lazy"
              onClick={(e) => clickClass(e, _class.class_id)}
              src={`https://ik.imagekit.io/phl0at/images/class_icons/${_class.name}.png?updatedAt=1722366962678`}
              className={
                currentClass === _class.class_id
                  ? styles.selected_classImg
                  : styles.classImg
              }
            ></img>
            {_class.name}
          </div>
        ))}
      </div>
      <div className={styles.select}>
        <div className={styles.nameSection}>
          {currentClass && (
            <>
              {Classes[currentClass]?.name}
              {notMaxLevel && (
                <button
                  className={styles.addButton}
                  onClick={(e) => clickAddClass(e, Classes[currentClass], null)}
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
          return (
            <div key={_class.class_id} className={styles.buildClass}>
              <img
                loading="lazy"
                className={styles.classImg}
                src={`https://ik.imagekit.io/phl0at/images/class_icons/${_class.name}.png?updatedAt=1722366962678`}
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
