//Files
import styles from "./Build.module.css";
//Functions/Components
import Navigation from "../../components/build/navigation";
import BuildComponent from "../../components/build";
import EquipmentComponent from "../../components/equipment";
import InfoComponent from "../../components/info";
//Packages
import { useState } from "react";

export default function BuildPage() {
  const [activeMenu, setActiveMenu] = useState("Origin");

  return (
    <>
      <main className={styles.main}>
        <Navigation setActiveMenu={setActiveMenu} activeMenu={activeMenu} />
        <BuildComponent setActiveMenu={setActiveMenu} activeMenu={activeMenu} />
        <EquipmentComponent />
        <InfoComponent />
      </main>
    </>
  );
}
