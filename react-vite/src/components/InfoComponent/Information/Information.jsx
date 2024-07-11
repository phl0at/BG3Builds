// Files
import styles from "../Info.module.css";
import { Images } from "../../images";
// Functions/Components
// Packages
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Information({ currentBuild }) {
  const buildId = useParams();
  const build_classes = useSelector(
    (state) => state.builds.current?.build_classes
  );
  const Backgrounds = useSelector((state) => state.static.backgrounds);
  const Origins = useSelector((state) => state.static.origins);
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
        {currentBuild.build_classes.length ? (
          <img src={Images.classes[currentBuild.build_classes[0].name]} />
        ) : (
          "No classes"
        )}
      </div>
      <div className={styles.infoBody}>
        <div className={styles.infoName}>
          {buildId ? currentBuild.name : null}
        </div>
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
          {build_classes.map((bc) => (
            <div className={styles.infoClass} key={bc.class_id}>
              <img
                title={bc.name}
                className={styles.listImage}
                src={Images.classes[bc.name]}
              />
              <div>{bc.level}</div>
            </div>
          ))}
        </div>
        <div className={styles.infoCharacter}>
          <div className={styles.infoCharL}>
            <div>Name: {currentBuild.character_name}</div>
            <div>Origin: {Origins[currentBuild.origin].name}</div>
          </div>
          <div className={styles.infoCharR}>
            <div>
              <div>| Race: {Races[currentBuild.race].name}</div>
              <div>
                | Background: {Backgrounds[currentBuild.background].name}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
