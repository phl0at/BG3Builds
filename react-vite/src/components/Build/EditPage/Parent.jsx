//Files
import styles from "./Parent.module.css";
//Functions/Components
import { setCurrentBuild, thunkGetBuild } from "../../../redux/build";
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
  const currentBuild = useSelector((state) => state.builds.current);
  const [activeMenu, setActiveMenu] = useState("Origin");

  useEffect(() => {
    if (!currentBuild) {
      dispatch(thunkGetBuild(buildId));
    }
    dispatch(thunkPreloadData());
  }, []);

  return (
    <main className={styles.main}>
      <Navigation setActiveMenu={setActiveMenu} activeMenu={activeMenu} />
      <BuildComponent activeMenu={activeMenu} />
      <EquipmentComponent />
      <InfoComponent buildId={buildId} />
    </main>
  );
}
