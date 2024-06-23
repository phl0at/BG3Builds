//Files
import styles from "./Parent.module.css";
//Functions/Components
import {
  setBackground,
  setOrigin,
  setRace,
} from "../../../redux/build";
import Navigation from "../NavigationComponent";
import BuildComponent from "../BuildComponent/Build";
import { thunkPreloadData } from "../../../redux/static";
//Packages
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";

export default function ParentPage() {
  const dispatch = useDispatch();
  const [activeMenu, setActiveMenu] = useState("Origin");

  useEffect(() => {
    dispatch(setOrigin(8));
    dispatch(setRace(1));
    dispatch(setBackground(1))
    dispatch(thunkPreloadData());
  }, []);

  return (
    <main className={styles.main}>
      <Navigation setActiveMenu={setActiveMenu} />
      <BuildComponent activeMenu={activeMenu} />
    </main>
  );
}
