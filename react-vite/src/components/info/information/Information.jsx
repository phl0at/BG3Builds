// Files
import styles from "../Info.module.css";
import { Images } from "../../images";
// Functions/Components
// Packages
import { useSelector } from "react-redux";
import { getBuildClassArray } from "../../../redux/build";

export default function Information({ currentBuild }) {
  const build_classes = useSelector(getBuildClassArray);
  const Backgrounds = useSelector((state) => state.static.backgrounds);
  const Races = useSelector((state) => state.static.races);

  const attributes = [
    "strength",
    "dexterity",
    "constitution",
    "intelligence",
    "wisdom",
    "charisma",
  ];

  return (
    <>
      <div className={styles.title}>Information</div>
      <div className={styles.infoClassHead}>
        {build_classes[0] && (
          <img src={Images.classes[build_classes[0].name]} />
        )}
      </div>
      <div className={styles.infoBody}>
        <div className={styles.infoAttributes}>
          {attributes.map((att) => {
            const cont = `${att[0].toUpperCase()}${att.slice(1, 3)}`;
            return (
              <div key={att} className={styles.stat}>
                <div className={styles.orange}>{cont}</div>
                <div>{currentBuild[att]}</div>
              </div>
            );
          })}
        </div>
        <div className={styles.infoClasses}>
          {build_classes.map((_class) => (
            <div className={styles.infoClass} key={_class.class_id}>
              <img
                title={_class.name}
                className={styles.listImage}
                src={Images.classes[_class.name]}
              />
              <div>{_class.level}</div>
            </div>
          ))}
        </div>
        <div className={styles.infoCharacter}>
          <div className={styles.char}>{currentBuild.character_name}</div>
          |<div className={styles.char}>{Races[currentBuild.race].name}</div>
          |<div className={styles.char}>{Backgrounds[currentBuild.background].name}</div>
        </div>
      </div>
    </>
  );
}
