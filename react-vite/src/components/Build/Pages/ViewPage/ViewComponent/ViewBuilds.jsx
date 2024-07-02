//Files
import { NavLink } from "react-router-dom";
import styles from "./ViewBuilds.module.css";
import { Images } from "../../../../images";
//Functions/Components
import { getBuildsArray } from "../../../../../redux/build";
//Packages
import { useState } from "react";
import { useSelector } from "react-redux";
import { CiLogin, CiHeart } from "react-icons/ci";

export default function ViewBuildsComponent() {
  const allBuildsArr = useSelector(getBuildsArray);
  const [selected, setSelected] = useState(null);
  const selectedBuild = useSelector((state) => state.builds[selected]);

  const onClick = (e, id) => {
    e.preventDefault();
    setSelected(id);
  };

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <div className={styles.title}>BG3Builds</div>
        <NavLink
          title="Back to create!"
          className={styles.navButton}
          to="/create"
        >
          <CiLogin size="40" />
        </NavLink>
      </div>
      <div className={styles.scroll}>
        <div className={styles.buildsList}>
          {allBuildsArr &&
            allBuildsArr.map((build) => {
              return (
                <button
                  onClick={(e) => onClick(e, build.id)}
                  className={
                    selected === build.id ? styles.select : styles.build
                  }
                >
                  <>
                    <div className={styles.buildName}>{build.name}</div>
                    <div className={styles.classes}>
                      {build.build_classes.map((_class) => {
                        return (
                          <div key={_class.class_id}>{`${_class.name}`}</div>
                        );
                      })}
                    </div>
                  </>
                </button>
              );
            })}
        </div>
      </div>
      <div className={selected ? styles.selectedBuild : styles.hidden}>
        {selected && (
          <>
            <button
              className={styles.favorite}
              onClick={(e) => {
                e.preventDefault();
                alert("Feature coming soon!");
              }}
            >
              <CiHeart size="20" />
            </button>
            <div className={styles.selectedClassImg}>
              {selectedBuild.build_classes.length ? (
                <img
                  src={Images.classes[selectedBuild.build_classes[0].name]}
                />
              ) : (
                "No classes"
              )}
            </div>
            <div className={styles.attributes}>
              <div className={styles.stat}>
                <div>Str</div>
                <div>{selectedBuild.strength}</div>
              </div>
              <div className={styles.stat}>
                <div>Dex</div>
                <div>{selectedBuild.dexterity}</div>
              </div>
              <div className={styles.stat}>
                <div>Con</div>
                <div>{selectedBuild.constitution}</div>
              </div>
              <div className={styles.stat}>
                <div>Int</div>
                <div>{selectedBuild.intelligence}</div>
              </div>
              <div className={styles.stat}>
                <div>Wis</div>
                <div>{selectedBuild.wisdom}</div>
              </div>
              <div className={styles.stat}>
                <div>Cha</div>
                <div>{selectedBuild.charisma}</div>
              </div>
            </div>
            <div></div>
          </>
        )}
      </div>
    </main>
  );
}
