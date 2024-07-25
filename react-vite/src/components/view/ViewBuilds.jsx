//Files
import styles from "./ViewBuilds.module.css";
//Functions/Components
import { getBuildsArray } from "../../redux/build";
import { SelectedBuildPanel } from "./BuildInfoPanel";
import { filteredBuilds } from "./helper";
//Packages
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { CiSquarePlus } from "react-icons/ci";
import { AiFillHeart } from "react-icons/ai";

export default function ViewBuildsComponent({ filters, setFilters }) {
  const [selected, setSelected] = useState(null);
  const allBuildsArr = useSelector(getBuildsArray);
  const allUsers = useSelector((state) => state.users);
  const selectedBuild = useSelector((state) => state.builds[selected]);
  const Backgrounds = useSelector((state) => state.static.backgrounds);
  const Origins = useSelector((state) => state.static.origins);
  const Races = useSelector((state) => state.static.races);
  const currentUser = useSelector((state) => state.session.user);
  const buildsArr = filteredBuilds(allBuildsArr, filters, currentUser);

  useEffect(() => {
    if (!currentUser) {
      const newFilters = { ...filters };
      delete newFilters["owned"];
      // delete newFilters["favorites"];
      setFilters({ ...newFilters });
    }
  }, [currentUser]);

  const onClick = (e, id) => {
    e.preventDefault();
    setSelected(id);
  };

  return (
    <main className={styles.main}>
      <div className={styles.body}>
        <div className={styles.scroll}>
          <div className={styles.buildsList}>
            {buildsArr.length ? (
              buildsArr.map((build, i) => {
                return (
                  <button
                    key={build.id}
                    onClick={(e) => onClick(e, build.id)}
                    className={
                      selected === build.id ? styles.select : styles.build
                    }
                  >
                    <>
                      {/* {currentUser && currentUser.favorites[build.id] ? (
                        <AiFillHeart className={styles.favorited} size="17" />
                      ) : null} */}

                      <div className={styles.buildName}>{build.name}</div>

                      <div className={styles.owner}>
                        {`Created By: ${allUsers[build.user_id]?.username}`}
                      </div>

                      <div className={styles.buildComments}>{`Comments: ${
                        Object.values(build.comments).length
                      }`}</div>

                      <div key={i} className={styles.buildClassList}>
                        {Object.values(build.build_classes).map((_class) => {
                          return (
                            <div
                              key={_class.class_id}
                              className={styles.buildClass}
                            >{`| ${_class.level} ${_class.name}`}</div>
                          );
                        })}
                      </div>
                    </>
                  </button>
                );
              })
            ) : (
              <div className={styles.noBuilds}>
                <div className={styles.sorry}>{`Sorry, adventurer!`}</div>
                <div className={styles.message}>
                  {Object.keys(filters) != "owned"
                    ? `It looks like there are currently no builds with that ${Object.keys(
                        filters
                      )}.`
                    : "You haven't created any builds yet."}
                  <div>
                    {`Head over to the `}
                    <NavLink to="/create">Create Build Page</NavLink>
                    {" to make one!"}
                  </div>
                </div>
              </div>
            )}
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
        <div className={styles.navButton}>
          <NavLink
            title="Create build"
            className={styles.toCreate}
            to="/create"
          >
            <CiSquarePlus size="50" />
          </NavLink>
        </div>
      </div>
    </main>
  );
}
