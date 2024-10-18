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

  function onClick(e, _class, sub_class) {
    e.preventDefault();
    const updatedClass = { ..._class };
    updatedClass.sub_class = sub_class;
    dispatch(action("build/setSubClass", updatedClass));
  }

  if (!selectedClassInBuild.sub_class) {
    return (
      <div className={styles.subClass}>
        {levelOneSubClasses[selectedClassInBuild.name] &&
          selectedClassInBuild.level >= 1 && (
            <>
              <div className={styles.subTitle}>Choose a Sub Class</div>
              <div className={styles.subButtonsContainer}>
                {levelOneSubClasses[selectedClassInBuild.name].map(
                  (sub_class) => {
                    return (
                      <button
                        key={sub_class.name}
                        className={styles.subButton}
                        onClick={(e) =>
                          onClick(e, selectedClassInBuild, sub_class.name)
                        }
                      >
                        <IKImage
                          path={`sc_icons/${selectedClassInBuild.name}/${sub_class.name}.png`}
                          className={styles.subImg}
                        />
                        {sub_class.name}
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
                  (sub_class) => {
                    return (
                      <button
                        key={sub_class.name}
                        className={styles.subButton}
                        onClick={(e) =>
                          onClick(e, selectedClassInBuild, sub_class.name)
                        }
                      >
                        <IKImage
                          path={`sc_icons/${selectedClassInBuild.name}/${sub_class.name}.png`}
                          className={styles.subImg}
                        />
                        {sub_class.name}
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
                  (sub_class) => {
                    return (
                      <button
                        key={sub_class.name}
                        className={styles.subButton}
                        onClick={(e) =>
                          onClick(e, selectedClassInBuild, sub_class.name)
                        }
                      >
                        <IKImage
                          path={`sc_icons/${selectedClassInBuild.name}/${sub_class.name}.png`}
                          className={styles.subImg}
                          sub_class
                        />
                        {sub_class.name}
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
          <div width="25px"></div>
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
