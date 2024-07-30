// Files
import styles from "../Info.module.css";
// Functions/Components
import { getBuildClassArray } from "../../../redux/build";
// Packages
import { useSelector } from "react-redux";
import { CiChat2, CiSquarePlus } from "react-icons/ci";
import { useParams, NavLink } from "react-router-dom";

export default function Information({ setDisplay }) {
  const { buildId } = useParams();
  const build_classes = useSelector(getBuildClassArray);
  const currentBuild = useSelector((state) => state.builds.current);
  const Backgrounds = useSelector((state) => state.static.backgrounds);
  const Races = useSelector((state) => state.static.races);

  const abilities = [
    "strength",
    "dexterity",
    "constitution",
    "intelligence",
    "wisdom",
    "charisma",
  ];

  return (
    <>
      <div className={styles.header}>
        <div className={styles.headerButton}>
          {buildId && (
            <button
              onClick={(e) => {
                e.preventDefault();
                setDisplay("Comments");
              }}
              title="Comments"
              className={styles.button}
            >
              <CiChat2 size="48" />
            </button>
          )}
        </div>
        <div className={styles.title}>Information</div>
        <div className={styles.headerButton}>
          {buildId && (
            <NavLink
              title="Create build"
              className={styles.toCreate}
              to="/create"
            >
              <CiSquarePlus size="50" />
            </NavLink>
          )}
        </div>
      </div>
      <div className={styles.mainClass}>
        {build_classes[0] && (
          <img
            src={`https://ik.imagekit.io/phl0at/images/class_icons/${build_classes[0].name}.png?updatedAt=1722366962678`}
          />
        )}
      </div>
      <div className={styles.infoBody}>
        <div className={styles.infoAttributes}>
          {abilities.map((ability) => {
            const cont = `${ability[0].toUpperCase()}${ability.slice(1, 3)}`;
            return (
              <div key={ability} className={styles.stat}>
                <div className={styles.orange}>{cont}</div>
                <div>{currentBuild[ability]}</div>
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
                src={`https://ik.imagekit.io/phl0at/images/class_icons/${_class.name}.png?updatedAt=1722366962678`}
              />
              <div>{_class.level}</div>
            </div>
          ))}
        </div>
        <div className={styles.infoCharacter}>
          <div className={styles.char}>{currentBuild.character_name}</div>|
          <div className={styles.char}>{Races[currentBuild.race].name}</div>|
          <div className={styles.char}>
            {Backgrounds[currentBuild.background].name}
          </div>
        </div>
      </div>
    </>
  );
}
