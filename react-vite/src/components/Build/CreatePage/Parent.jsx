//Files
import styles from "./Parent.module.css";
//Functions/Components
import {
  setOrigin,
  setRace,
  setClass,
} from "../../../redux/build";
import Navigation from "../NavigationComponent";
import BuildComponent from "../BuildComponent/Build";
//Packages
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { thunkPreloadData } from "../../../redux/static";

export default function ParentPage() {
  const dispatch = useDispatch();
  const [activeMenu, setActiveMenu] = useState("Origin");
  useEffect(() => {
    dispatch(setOrigin("Custom"));
    dispatch(setRace("Elf"));
    dispatch(thunkPreloadData());
  }, []);

  return (
    <main className={styles.main}>
      <Navigation setActiveMenu={setActiveMenu} />
      <BuildComponent activeMenu={activeMenu} />
    </main>
  );
}
