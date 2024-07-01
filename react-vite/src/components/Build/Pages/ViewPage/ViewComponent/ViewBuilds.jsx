//Files
import styles from "./ViewBuilds.module.css";
//Functions/Components
//Packages
import { useSelector } from "react-redux";
export default function ViewBuildsComponent() {
  const allBuilds = useSelector((state) => state.builds);

  return (
    <main className={styles.main}>
      <div className={styles.title}>BG3Builds</div>
      <div className={styles.scroll}>
        <div className={styles.buildsList}></div>
      </div>
    </main>
  );
}
