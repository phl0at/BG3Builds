//Files
import { NavLink } from "react-router-dom";
import styles from "./ViewBuilds.module.css";
//Functions/Components
import { getBuildsArray } from "../../redux/build";
//Packages
import { useState } from "react";
import { useSelector } from "react-redux";
import { CiLogin } from "react-icons/ci";
import { SelectedBuildPanel } from "./helper";

export default function ViewBuildsComponent() {

  const allBuildsArr = useSelector(getBuildsArray);
  const [selected, setSelected] = useState(null);
  const allUsers = useSelector((state) => state.users);
  const selectedBuild = useSelector((state) => state.builds[selected]);
  const Backgrounds = useSelector((state) => state.static.backgrounds);
  const Origins = useSelector((state) => state.static.origins);
  const Races = useSelector((state) => state.static.races);

  const onClick = (e, id) => {
    e.preventDefault();
    setSelected(id);
  };

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <div className={styles.title}>BG3Builds</div>
        <NavLink title="Create build" className={styles.navButton} to="/create">
          <CiLogin size="40" />
        </NavLink>
      </div>
      <div className={styles.scroll}>
        <div className={styles.buildsList}>
          {allBuildsArr.map((build, i) => {
              return (
                <button
                  key={build.id}
                  onClick={(e) => onClick(e, build.id)}
                  className={
                    selected === build.id ? styles.select : styles.build
                  }
                >
                  <>
                    <div className={styles.buildName}>{build.name}</div>
                    <div className={styles.owner}>
                     {`Created By: ${allUsers[build.user_id]?.username}`}
                    </div>
                    <div
                      className={styles.buildComments}
                    >{`Comments: ${build.comments.length}`}</div>
                    <div key={i} className={styles.buildClassList}>
                      {build.build_classes.map((bc) => {
                        return (
                          <div
                            key={bc.class_id}
                            className={styles.buildClass}
                          >{`| ${bc.level} ${bc.name}`}</div>
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
            <SelectedBuildPanel
              setSelected={setSelected}
              build={selectedBuild}
              Backgrounds={Backgrounds}
              Origins={Origins}
              Races={Races}
            />
          </>
        )}
      </div>
    </main>
  );
}
