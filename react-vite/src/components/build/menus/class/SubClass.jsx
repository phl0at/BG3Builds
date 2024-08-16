import { action } from "../../../../redux/build";
import {
  levelOneSubClasses,
  levelTwoSubClasses,
  levelThreeSubClasses,
} from "./allSubClasses";
import styles from "../../Build.module.css";
import { useSelector, useDispatch } from "react-redux";

export default function SubClass() {
  const dispatch = useDispatch();
  const selectedClass = useSelector((state) => state.builds.current.class);
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
              <br />
              <div className={styles.subButtons}>
                {levelOneSubClasses[selectedClassInBuild.name].map(
                  (subClass) => {
                    return (
                      <button
                        key={subClass.name}
                        className={styles.button}
                        onClick={(e) =>
                          onClick(e, selectedClassInBuild, subClass.name)
                        }
                      >
                        <img className={styles.subImg} />
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
              <br />
              <div className={styles.subButtons}>
                {levelTwoSubClasses[selectedClassInBuild.name].map(
                  (subClass) => {
                    return (
                      <button
                        key={subClass.name}
                        className={styles.button}
                        onClick={(e) =>
                          onClick(e, selectedClassInBuild, subClass.name)
                        }
                      >
                        <img className={styles.subImg} />
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
              <br />
              <div className={styles.subButtons}>
                {levelThreeSubClasses[selectedClassInBuild.name].map(
                  (subClass) => {
                    return (
                      <button
                        key={subClass.name}
                        className={styles.button}
                        onClick={(e) =>
                          onClick(e, selectedClassInBuild, subClass.name)
                        }
                      >
                        <img className={styles.subImg} />
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
        <div className={styles.subTitle}>Sub Class</div>
        <button
          className={styles.button}
          onClick={(e) => onClick(e, selectedClassInBuild, undefined)}
        >
          Change
        </button>
        <div className={styles.chosenSubClass}>
          <div className={styles.subImgName}>
            <img className={styles.subImg} />
            {selectedClassInBuild.sub_class}
          </div>
          <div className={styles.subDescription}>{description}</div>
          <br />
        </div>
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
