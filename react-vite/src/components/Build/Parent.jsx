//Files
import styles from "./Parent.module.css";
import Navigation from "./NavigationComponent";
import BuildComponent from "./BuildComponent/Build";
//Packages
import { useDispatch } from "react-redux";
import { useState } from "react";
//Thunks


export default function ParentPage() {
//   const dispatch = useDispatch();
  const [activeMenu, setActiveMenu] = useState("Origin")



  return (
    <main className={styles.main}>
      <Navigation setActiveMenu={setActiveMenu} />
      <BuildComponent activeMenu={activeMenu} />
    </main>
  );
}
