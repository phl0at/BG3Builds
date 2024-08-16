//Files
import styles from "./Build.module.css";
//Functions/Components
//Packages
import { lazy, Suspense } from "react";
import { PulseLoader } from "react-spinners";

export default function BuildComponent({ activeMenu }) {
  const OriginComponent = lazy(() => import("./menus/origins"));
  const RaceComponent = lazy(() => import("./menus/race"));
  const BackgroundComponent = lazy(() => import("./menus/backgrounds"));
  const ClassComponent = lazy(() => import("./menus/class"));
  const AbilitiesComponent = lazy(() => import("./menus/abilities"));



  return (
    <main className={styles.main}>
      <Suspense fallback={<PulseLoader className={styles.load} color="#e4c274" size="20px" />}>
        {activeMenu === "Origin" && <OriginComponent />}
        {activeMenu === "Race" && <RaceComponent />}
        {activeMenu === "Class" && <ClassComponent />}
        {activeMenu === "Background" && <BackgroundComponent />}
        {activeMenu === "Abilities" && <AbilitiesComponent />}
      </Suspense>
    </main>
  );
}
