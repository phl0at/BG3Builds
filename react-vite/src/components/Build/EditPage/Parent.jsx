//Files
import styles from "./Parent.module.css";
//Functions/Components
import Navigation from "../NavigationComponent";
import BuildComponent from "../BuildComponent/Build";
//Packages
import { useState, } from "react";
import { useParams } from "react-router-dom";

export default function ParentPage() {
  const [activeMenu, setActiveMenu] = useState("Origin");
  const { buildId } = useParams()

  return (
    <main className={styles.main}>
      <Navigation setActiveMenu={setActiveMenu} />
      <BuildComponent activeMenu={activeMenu} />
    </main>
  );
}
