//Files
import styles from "../../Build.module.css";
//Packages
import { lazy, Suspense, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CiUndo } from "react-icons/ci";
import { IKImage } from "imagekitio-react";

//Functions/Components
import ErrorModal from "../../../modals/error/ErrorModal";
import { useModal } from "../../../../context/Modal";
import { action } from "../../../../redux/build";
import OpenModalButton from "../../../modals";
import ResetClassesModal from "./reset";
const SubClass = lazy(() => import("./SubClass"));

export default function ClassComponent() {
  const dispatch = useDispatch();
  const Classes = useSelector((state) => state.static.classes);
  const buildLevel = useSelector((state) => state.builds.current.level);
  const [selectedClass, setSelectedClass] = useState(1);
  const { setModalContent } = useModal();
  const selectedClassInBuild = useSelector(
    (state) => state.builds.current.build_classes[selectedClass]
  );
  const notMaxLevel = !buildLevel || buildLevel < 12;

  const clickClass = (e, id) => {
    e.preventDefault();
    setSelectedClass(id);
  };

  const clickAddClass = (e, _class) => {
    e.preventDefault();
    if (selectedClassInBuild?.mustPickSC === true) {
      setModalContent(
        <ErrorModal errors={{ FAQ: ["You have a pending Sub Class choice"] }} />
      );
    } else {
      const newClass = {
        class_id: _class.class_id,
        name: _class.name,
        modifier: _class.modifier,
      };
      dispatch(action("build/addBuildClass", newClass));
    }
  };

  return (
    <>
      <div className={styles.header}>
        <div className={styles.reset}>
          {buildLevel > 0 && (
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
                selectedClass === _class.class_id
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
          <div className={styles.levels}>
            <div className={styles.classLevel}>
              {`${Classes[selectedClass].name}: ${
                selectedClassInBuild ? selectedClassInBuild.level : 0
              } `}
            </div>
            <div
              className={styles.charLevel}
            >{`Total: ${buildLevel} / 12`}</div>
          </div>
          {notMaxLevel && (
            <button
              className={styles.button}
              onClick={(e) => clickAddClass(e, Classes[selectedClass], null)}
            >
              {selectedClassInBuild ? "Add Level" : "Add Class"}
            </button>
          )}
        </div>
        <div className={styles.description}>
          {Classes[selectedClass]?.description}
        </div>
        {selectedClassInBuild && (
          <Suspense fallback="">
            <SubClass
              key={selectedClassInBuild.name}
              selectedClass={selectedClass}
            />
          </Suspense>
        )}
      </div>
    </>
  );
}
