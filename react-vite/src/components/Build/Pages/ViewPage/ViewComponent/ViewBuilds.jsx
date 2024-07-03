//Files
import { NavLink } from "react-router-dom";
import styles from "./ViewBuilds.module.css";
//Functions/Components
import { getBuildsArray } from "../../../../../redux/build";
import { thunkPreloadData } from "../../../../../redux/static";
//Packages
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CiLogin } from "react-icons/ci";
import { SelectedBuildPanel } from "./helper";

export default function ViewBuildsComponent() {
  const dispatch = useDispatch();
  const allBuildsArr = useSelector(getBuildsArray);
  const [selected, setSelected] = useState(null);
  const selectedBuild = useSelector((state) => state.builds[selected]);
  const Equipment = useSelector((state) => state.static.equipment);
  const Backgrounds = useSelector((state) => state.static.backgrounds);
  const Origins = useSelector((state) => state.static.origins);
  const Races = useSelector((state) => state.static.races);

  useEffect(() => {
    if (!Equipment) {
      dispatch(thunkPreloadData());
    }
  }, [Equipment, dispatch]);

  const onClick = (e, id) => {
    e.preventDefault();
    setSelected(id);
  };

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <div className={styles.title}>BG3Builds</div>
        <NavLink
          title="Create build"
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
                  key={build.id}
                  onClick={(e) => onClick(e, build.id)}
                  className={
                    selected === build.id ? styles.select : styles.build
                  }
                >
                  <>
                    <div className={styles.buildName}>{build.name}</div>
                    <div className={styles.buildClass}>
                      Classes: |
                      {build.build_classes.map((bc) => {
                        return ` ${bc.level} ${bc.name} |`;
                      })}
                    </div>
                    <div
                      className={styles.buildComments}
                    >{`Comments: ${build.comments?.length}`}</div>
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
