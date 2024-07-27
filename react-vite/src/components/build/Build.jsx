//Files
import styles from "./Build.module.css";
//Functions/Components
import OriginComponent from "./menus/origins/Origin";
import RaceComponent from "./menus/race/Race";
import ClassComponent from "./menus/class/Class";
import BackgroundComponent from "./menus/backgrounds/Background";
//Packages
import AbilitiesComponent from "./menus/abilities/Abilities";

export default function BuildComponent({ activeMenu }) {

  return (
    <main className={styles.main}>
      {activeMenu === "Origin" && <OriginComponent />}
      {activeMenu === "Race" && <RaceComponent />}
      {activeMenu === "Class" && <ClassComponent />}
      {activeMenu === "Background" && <BackgroundComponent />}
      {activeMenu === "Abilities" && <AbilitiesComponent />}
    </main>
  );
}
