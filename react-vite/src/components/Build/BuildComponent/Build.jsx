//Files
import styles from "./Build.module.css";
//Functions/Components
import OriginComponent from "./Menus/OriginMenu/Origin";
import RaceComponent from "./Menus/RaceMenu/Race";
import ClassComponent from "./Menus/ClassMenu/Class"
//Packages
import { useSelector } from "react-redux";

export default function BuildComponent({ activeMenu }) {
  const currentBuild = useSelector((state) => state.builds.current);

  return (
    <main className={styles.main}>
      {activeMenu === "Origin" && (
        <OriginComponent currentBuild={currentBuild} />
      )}
      {activeMenu === "Race" && <RaceComponent currentBuild={currentBuild} />}
      {activeMenu === "Class" && <ClassComponent currentBuild={currentBuild} />}
    </main>
  );
}
