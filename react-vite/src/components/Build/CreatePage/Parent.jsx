//Files
import styles from "./Parent.module.css";
//Functions/Components
import {
  setOrigin,
  setRace,
  setClass,
  thunkGetAllClasses,
} from "../../../redux/build";
import Navigation from "../NavigationComponent";
import BuildComponent from "../BuildComponent/Build";
//Packages
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";

export default function ParentPage() {
  const dispatch = useDispatch();
  const [activeMenu, setActiveMenu] = useState("Origin");
  useEffect(() => {
    dispatch(setOrigin("Custom"));
    dispatch(setRace("Elf"));
    dispatch(thunkGetAllClasses());
  }, []);

  return (
    <main className={styles.main}>
      <Navigation setActiveMenu={setActiveMenu} />
      <BuildComponent activeMenu={activeMenu} />
    </main>
  );
}
