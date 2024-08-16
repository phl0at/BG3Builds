import { action } from "../../../../redux/build";
import {
  levelOneSubClasses,
  levelTwoSubClasses,
  levelThreeSubClasses,
} from "./allSubClasses";
import styles from "../../Build.module.css";
import { useSelector, useDispatch } from "react-redux";
import { IKImage } from "imagekitio-react";

export default function SubClass({ selectedClass }) {
  const dispatch = useDispatch();
  const selectedClassInBuild = useSelector(
    (state) => state.builds.current.build_classes[selectedClass]
  );
  const description = findDescription(selectedClassInBuild);

  function onClick(e, _class, subClass) {
    e.preventDefault();
    const updatedClass = { ..._class };
    updatedClass.sub_class = subClass;
    dispatch(action("build/setSubClass", updatedClass));
  }

  if (selectedClassInBuild.sub_class === undefined) {
    return (
      <div className={styles.subClass}>
        {levelOneSubClasses[selectedClassInBuild.name] &&
          selectedClassInBuild.level >= 1 && (
            <>
              <div className={styles.subTitle}>Choose a Sub Class</div>
              <div className={styles.subButtonsContainer}>
                {levelOneSubClasses[selectedClassInBuild.name].map(
                  (subClass) => {
                    return (
                      <button
                        key={subClass.name}
                        className={styles.subButton}
                        onClick={(e) =>
                          onClick(e, selectedClassInBuild, subClass.name)
                        }
                      >
                        <IKImage
                          path={`sc_icons/${selectedClassInBuild.name}/${subClass.name}.png`}
                          className={styles.subImg}
                        />
                        {subClass.name}
                      </button>
                    );
                  }
                )}
              </div>
            </>
          )}
        {levelTwoSubClasses[selectedClassInBuild.name] &&
          selectedClassInBuild.level >= 2 && (
            <>
              <div className={styles.subTitle}>Choose a Sub Class</div>
              <div className={styles.subButtonsContainer}>
                {levelTwoSubClasses[selectedClassInBuild.name].map(
                  (subClass) => {
                    return (
                      <button
                        key={subClass.name}
                        className={styles.subButton}
                        onClick={(e) =>
                          onClick(e, selectedClassInBuild, subClass.name)
                        }
                      >
                        <IKImage
                          path={`sc_icons/${selectedClassInBuild.name}/${subClass.name}.png`}
                          className={styles.subImg}
                        />
                        {subClass.name}
                      </button>
                    );
                  }
                )}
              </div>
            </>
          )}
        {levelThreeSubClasses[selectedClassInBuild.name] &&
          selectedClassInBuild.level >= 3 && (
            <>
              <div className={styles.subTitle}>Choose a Sub Class</div>
              <div className={styles.subButtonsContainer}>
                {levelThreeSubClasses[selectedClassInBuild.name].map(
                  (subClass) => {
                    return (
                      <button
                        key={subClass.name}
                        className={styles.subButton}
                        onClick={(e) =>
                          onClick(e, selectedClassInBuild, subClass.name)
                        }
                      >
                        <IKImage
                          path={`sc_icons/${selectedClassInBuild.name}/${subClass.name}.png`}
                          className={styles.subImg}
                        />
                        {subClass.name}
                      </button>
                    );
                  }
                )}
              </div>
            </>
          )}
      </div>
    );
  } else {
    return (
      <div className={styles.subClass}>
        <div className={styles.chosenSubClass}>
          <div className={styles.subTitle}>Sub Class</div>
          <div className={styles.subImgName}>
            <IKImage
              path={`sc_icons/${selectedClassInBuild.name}/${selectedClassInBuild.sub_class}.png`}
              className={styles.subImg}
            />
            {selectedClassInBuild.sub_class}
          </div>
          <button
            className={styles.button}
            onClick={(e) => onClick(e, selectedClassInBuild, undefined)}
          >
            Change
          </button>
        </div>
        <div className={styles.subDescription}>{description}</div>
        <br />
      </div>
    );
  }
}

function findDescription(_class) {
  // Since the sub classes are split into three different objects based on
  // which level their respective class acquires them, this function
  // receives the chosen sub class to then find and return its description from one of
  // the three objects
  return (
    levelOneSubClasses[_class.name]?.find(
      (subClass) => subClass.name === _class.sub_class
    )?.description ||
    levelTwoSubClasses[_class.name]?.find(
      (subClass) => subClass.name === _class.sub_class
    )?.description ||
    levelThreeSubClasses[_class.name]?.find(
      (subClass) => subClass.name === _class.sub_class
    )?.description
  );
}
