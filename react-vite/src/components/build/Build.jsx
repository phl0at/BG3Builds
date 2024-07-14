//Files
import styles from "./Build.module.css";
//Functions/Components
import OriginComponent from "./menus/origins/Origin";
import RaceComponent from "./menus/race/Race";
import ClassComponent from "./menus/class/Class"
import BackgroundComponent from "./menus/backgrounds/Background";
//Packages
import { useSelector } from "react-redux";
import AbilitiesComponent from "./menus/abilities/Abilities";

export default function BuildComponent({ points, setPoints, activeMenu }) {
  const currentBuild = useSelector((state) => state.builds.current);

  return (
    <main className={styles.main}>
      {activeMenu === "Origin" && (
        <OriginComponent currentBuild={currentBuild} />
      )}
      {activeMenu === "Race" && <RaceComponent currentBuild={currentBuild} />}
      {activeMenu === "Class" && <ClassComponent currentBuild={currentBuild} />}
      {activeMenu === "Background" && <BackgroundComponent currentBuild={currentBuild} />}
      {activeMenu === "Abilities" && <AbilitiesComponent points={points} setPoints={setPoints} currentBuild={currentBuild} />}
    </main>
  );
}
