//Files
import styles from "./Parent.module.css";
//Functions/Components
import { thunkGetBuild } from "../../../redux/build";
import { thunkPreloadData } from "../../../redux/static";
import Navigation from "../NavigationComponent";
import BuildComponent from "../BuildComponent/Build";
import EquipmentComponent from "../EquipComponent/Equipment";
import InfoComponent from "../InfoComponent";
//Packages
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ParentPage() {
  const { buildId } = useParams();
  const dispatch = useDispatch();
  const Equipment = useSelector((state) => state.static.equipment);
  const [activeMenu, setActiveMenu] = useState("Origin");
  const [points, setPoints] = useState(0);
  useEffect(() => {
    dispatch(thunkPreloadData());
  }, []);

  useEffect(() => {
    if (Equipment) {
      dispatch(thunkGetBuild(Equipment, buildId));
    }
  }, [Equipment]);

  return (
    <main className={styles.main}>
      <Navigation setActiveMenu={setActiveMenu} activeMenu={activeMenu} />
      <BuildComponent
        points={points}
        setPoints={setPoints}
        activeMenu={activeMenu}
      />
      <EquipmentComponent Equipment={Equipment} />
      <InfoComponent buildId={buildId} Equipment={Equipment} />
    </main>
  );
}
