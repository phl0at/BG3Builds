//Files
import styles from "./EditParent.module.css";
//Functions/Components
import { thunkGetBuild } from "../../../../redux/build";
import { thunkPreloadData } from "../../../../redux/static";
import Navigation from "../../Components/NavigationComponent";
import BuildComponent from "../../Components/BuildComponent";
import EquipmentComponent from "../../Components/EquipComponent/Equipment";
import InfoComponent from "../../Components/InfoComponent";
//Packages
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function EditParentPage() {
  const { buildId } = useParams();
  const dispatch = useDispatch();
  const currentBuild = useSelector((state) => state.builds.current);
  const [activeMenu, setActiveMenu] = useState("Origin");
  const [points, setPoints] = useState(0);

  useEffect(() => {
    dispatch(thunkPreloadData());
  }, []);

  useEffect(() => {
    if (!currentBuild) dispatch(thunkGetBuild(buildId));
  }, [currentBuild]);

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
