//Files
import styles from "./Parent.module.css";
//Functions/Components
import { setBackground, setOrigin, setRace, setAbilities } from "../../../redux/build";
import { thunkPreloadData } from "../../../redux/static";
import Navigation from "../NavigationComponent";
import BuildComponent from "../BuildComponent/Build";
import EquipmentComponent from "../EquipComponent/Equipment";
import InfoComponent from "../InfoComponent";
//Packages
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";

export default function ParentPage() {
  const dispatch = useDispatch();
  const [activeMenu, setActiveMenu] = useState("Origin");

  useEffect(() => {
    dispatch(setOrigin(8));
    dispatch(setRace(1));
    dispatch(setBackground(1));
    dispatch(setAbilities())
    dispatch(thunkPreloadData());
  }, []);

  return (
    <main className={styles.main}>
      <Navigation setActiveMenu={setActiveMenu} activeMenu={activeMenu} />
      <BuildComponent activeMenu={activeMenu} />
      <EquipmentComponent />
      <InfoComponent />
    </main>
  );
}
