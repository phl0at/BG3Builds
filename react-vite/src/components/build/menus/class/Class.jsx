//Files
import styles from "../../Build.module.css";
//Functions/Components
import { getBuildClassArray, action } from "../../../../redux/build";
import OpenModalButton from "../../../modals";
import ResetClassesModal from "./reset";
//Packages
import { useDispatch, useSelector } from "react-redux";
import { CiUndo } from "react-icons/ci";
import { IKImage } from "imagekitio-react";

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
      modifier: _class.modifier,
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
        <div className={styles.spacer}></div>
      </div>
      <div className={styles.list}>
        {Object.values(Classes).map((_class) => (
          <div
            onClick={(e) => clickClass(e, _class.class_id)}
            key={_class.class_id}
            className={styles.item}
          >
            <IKImage
              loading="lazy"
              path={`class_icons/${_class.name}.png`}
              id={styles.classImg}
              className={
                currentClass === _class.class_id
                  ? styles.selected_img
                  : styles.img
              }
            />
            {_class.name}
          </div>
        ))}
      </div>
      <div className={styles.select}>
        <div className={styles.name}>
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
                id={styles.bcImg}
                src={`https://ik.imagekit.io/phl0at/images/class_icons/${_class.name}.png`}
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
