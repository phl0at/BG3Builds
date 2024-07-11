//Files
import styles from "./ViewBuilds.module.css";
import { Images } from "../images";
//Functions/Components
//Packages
import { CiHeart, CiCircleRemove, CiLogout  } from "react-icons/ci";
import { NavLink } from "react-router-dom";

export function SelectedBuildPanel({
  build,
  setSelected,
  Backgrounds,
  Origins,
  Races,
}) {
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
      <div className={styles.selectedHeader}>
        <button
          className={styles.favorite}
          onClick={(e) => {
            e.preventDefault();
            alert("Feature coming soon!");
          }}
        >
          <CiHeart size="30" />
        </button>
        <div className={styles.selectedClassImg}>
          {build.build_classes.length ? (
            <img src={Images.classes[build.build_classes[0].name]} />
          ) : (
            "No classes"
          )}
        </div>
        <button
          className={styles.close}
          onClick={(e) => {
            e.preventDefault();
            setSelected(null);
          }}
        >
          <CiCircleRemove size="30" />
        </button>
      </div>
      <div className={styles.selectedBody}>
        <div
          className={styles.selectedName}
        >{`${build.name[0].toUpperCase()}${build.name.slice(1)}`}</div>
        <div className={styles.selectedAttributes}>
          {attributes.map((att) => {
            const cont = `${att[0].toUpperCase()}${att.slice(1, 3)}`;
            return (
              <div key={att} className={styles.stat}>
                <div className={styles.orange}>{cont}</div>
                <div>{build[att]}</div>
              </div>
            );
          })}
        </div>
        <div className={styles.selectedClasses}>
          {build.build_classes.map((bc) => (
            <div className={styles.selClass} key={bc.class_id}>
              <img
                title={bc.name}
                className={styles.listImage}
                src={Images.classes[bc.name]}
              />
              <div>{bc.level}</div>
            </div>
          ))}
        </div>
        <div className={styles.selectedCharacter}>
          <div className={styles.selectedCharL}>
            <div>Origin: {Origins[build.origin].name}</div>
            <div>Character Name: {build.character_name}</div>
          </div>
          <div className={styles.selectedCharR}>
            <div>
              <div>| Race: {Races[build.race].name}</div>
              <div>| Background: {Backgrounds[build.background].name}</div>
            </div>
          </div>
        </div>
        <NavLink title="Go to build" className={styles.navButton} to={`/build/${build.id}`}><CiLogout size="40" /></NavLink>
      </div>
    </>
  );
}
