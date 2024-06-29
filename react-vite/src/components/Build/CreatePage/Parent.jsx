//Files
import styles from "./Parent.module.css";
//Functions/Components
import { setDefaults } from "../../../redux/build";
import { thunkPreloadData } from "../../../redux/static";
import Navigation from "../NavigationComponent";
import BuildComponent from "../BuildComponent/Build";
import EquipmentComponent from "../EquipComponent/Equipment";
import InfoComponent from "../InfoComponent";
//Packages
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

export default function ParentPage() {
  const dispatch = useDispatch();
  const [activeMenu, setActiveMenu] = useState("Origin");

  const [points, setPoints] = useState(27);

  useEffect(() => {
    dispatch(thunkPreloadData());
    dispatch(setDefaults());
  }, []);

  return (
    <main className={styles.main}>
      <Navigation setActiveMenu={setActiveMenu} activeMenu={activeMenu} />
      <BuildComponent
        points={points}
        setPoints={setPoints}
        activeMenu={activeMenu}
      />
      <EquipmentComponent />
      <InfoComponent points={points} />
    </main>
  );
}
