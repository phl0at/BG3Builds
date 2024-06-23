//Files
import styles from "./Class.module.css";
import { Images } from "../../../../images";
//Functions/Components
import { setClass } from "../../../../../redux/build";
//Packages
import { useDispatch, useSelector } from "react-redux";

export default function ClassComponent({ currentBuild }) {
  const dispatch = useDispatch();
  const Classes = useSelector((state) => state.static.classes);

  const onClick = (e, _class) => {
    e.preventDefault();
    dispatch(setClass(_class));
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
                className={styles.classImg}
              ></img>
              Barbarian
            </div>
            <div className={styles.class}>
              <img
                onClick={(e) => onClick(e, 2)}
                src={Images.classes["Bard"]}
                className={styles.classImg}
              ></img>
              Bard
            </div>
            <div className={styles.class}>
              <img
                onClick={(e) => onClick(e, 3)}
                src={Images.classes["Cleric"]}
                className={styles.classImg}
              ></img>
              Cleric
            </div>
            <div className={styles.class}>
              <img
                onClick={(e) => onClick(e, 4)}
                src={Images.classes["Druid"]}
                className={styles.classImg}
              ></img>
              Druid
            </div>
            <div className={styles.class}>
              <img
                onClick={(e) => onClick(e, 5)}
                src={Images.classes["Fighter"]}
                className={styles.classImg}
              ></img>
              Fighter
            </div>
            <div className={styles.class}>
              <img
                onClick={(e) => onClick(e, 6)}
                src={Images.classes["Monk"]}
                className={styles.classImg}
              ></img>
              Monk
            </div>
            <div className={styles.class}>
              <img
                onClick={(e) => onClick(e, 7)}
                src={Images.classes["Paladin"]}
                className={styles.classImg}
              ></img>
              Paladin
            </div>
            <div className={styles.class}>
              <img
                onClick={(e) => onClick(e, 8)}
                src={Images.classes["Ranger"]}
                className={styles.classImg}
              ></img>
              Ranger
            </div>
            <div className={styles.class}>
              <img
                onClick={(e) => onClick(e, 9)}
                src={Images.classes["Rogue"]}
                className={styles.classImg}
              ></img>
              Rogue
            </div>
            <div className={styles.class}>
              <img
                onClick={(e) => onClick(e, 10)}
                src={Images.classes["Sorcerer"]}
                className={styles.classImg}
              ></img>
              Sorcerer
            </div>
            <div className={styles.class}>
              <img
                onClick={(e) => onClick(e, 11)}
                src={Images.classes["Warlock"]}
                className={styles.classImg}
              ></img>
              Warlock
            </div>
            <div className={styles.class}>
              <img
                onClick={(e) => onClick(e, 12)}
                src={Images.classes["Wizard"]}
                className={styles.classImg}
              ></img>
              Wizard
            </div>
          </div>
          <div className={styles.select}>
            <div className={styles.name}>
              {Classes[currentBuild.class]?.name}
            </div>
            <div className={styles.description}>
              {Classes[currentBuild.class]?.description}
            </div>
          </div>
        </>
      )}
    </>
  );
}
