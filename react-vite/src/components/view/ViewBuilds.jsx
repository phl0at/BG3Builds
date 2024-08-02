//Files
import styles from "./ViewBuilds.module.css";
//Functions/Components
// import { getBuildsArray } from "../../redux/build";
import { SelectedBuildPanel } from "./BuildInfoPanel";
import { filteredBuilds } from "../../utils/helper";
//Packages
import { useEffect, useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import { CiSquarePlus } from "react-icons/ci";
import { AiFillHeart } from "react-icons/ai";

export default function ViewBuildsComponent({ filters, setFilters }) {
  const [selected, setSelected] = useState(null);
  const selectedBuild = useSelector((state) => state.builds[selected]);
  const allUsers = useSelector((state) => state.users);
  const currentUser = useSelector((state) => state.session.user);
  const allBuilds = useSelector((state) => state.builds);
  const filtersApplied = Object.values(filters).find((val) => val != null)
  const buildsArr = useMemo(
    () => filteredBuilds(allBuilds, filters, currentUser),
    [allBuilds, filters, currentUser]
  );

  useEffect(() => {
    if (!currentUser) {
      const newFilters = { ...filters };
      delete newFilters["owned"];
      delete newFilters["favorites"];
      setFilters({ ...newFilters });
    }
  }, [currentUser]);

  const onClick = (e, id) => {
    e.preventDefault();
    setSelected(id);
  };

  if (
    (buildsArr.length < 1) &
    !filtersApplied
  ) {
    return (
      <main className={styles.main}>
        <div className={styles.scroll}>
          <PulseLoader className={styles.loading} color="#e4c274" size="20px" />
        </div>
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <div className={styles.body}>
        <div className={styles.scroll}>
          <div className={styles.buildsList}>
            {buildsArr != undefined &&
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
                      {currentUser && currentUser.favorites[build.id] ? (
                        <AiFillHeart className={styles.favorited} size="17" />
                      ) : null}

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
              })}
            {buildsArr.length < 1 && (
              <div className={styles.noBuilds}>
                <div className={styles.sorry}>{`Sorry, adventurer!`}</div>
                <div className={styles.message}>
                  {`There are no builds matching the current filters`}
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
              <SelectedBuildPanel build={selectedBuild} />
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
