//Files
import styles from "./Build.module.css";
//Functions/Components
import OriginComponent from "./Menus/OriginMenu/Origin";
import RaceComponent from "./Menus/RaceMenu/Race";
import ClassComponent from "./Menus/ClassMenu/Class"
import BackgroundComponent from "./Menus/BackgroundMenu/Background";
//Packages
import { useSelector } from "react-redux";
import AbilitiesComponent from "./Menus/AbilitiesMenu/Abilities";

export default function BuildComponent({ activeMenu }) {
  const currentBuild = useSelector((state) => state.builds.current);

  return (
    <main className={styles.main}>
      {activeMenu === "Origin" && (
        <OriginComponent currentBuild={currentBuild} />
      )}
      {activeMenu === "Race" && <RaceComponent currentBuild={currentBuild} />}
      {activeMenu === "Class" && <ClassComponent currentBuild={currentBuild} />}
      {activeMenu === "Background" && <BackgroundComponent currentBuild={currentBuild} />}
      {activeMenu === "Abilities" && <AbilitiesComponent currentBuild={currentBuild} />}
    </main>
  );
}
