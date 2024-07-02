//Files
import { NavLink } from "react-router-dom";
import styles from "./ViewBuilds.module.css";
//Functions/Components
import { getBuildsArray } from "../../../../../redux/build";
//Packages
import { useSelector } from "react-redux";
import { CiLogin } from "react-icons/ci";

export default function ViewBuildsComponent() {
  const allBuilds = useSelector(getBuildsArray);

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
          {allBuilds &&
            allBuilds.map((build) => {
              console.log(build)
              return (
                <NavLink to={`/build/${build.id}`} className={styles.build}>
                  <div>
                    {build.name}
                    {build.build_classes.map((_class) => {
                      return `${_class.name}${_class.level}`;
                    })}
                  </div>
                </NavLink>
              );
            })}
        </div>
      </div>
    </main>
  );
}
