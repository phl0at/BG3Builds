//Files
import styles from "./CreateParent.module.css";
//Functions/Components
import { setDefaults } from "../../../../redux/build";
import { thunkPreloadData } from "../../../../redux/static";
import Navigation from "../../Components/NavigationComponent";
import BuildComponent from "../../Components/BuildComponent";
import EquipmentComponent from "../../Components/EquipComponent";
import InfoComponent from "../../Components/InfoComponent";
//Packages
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

export default function CreateParentPage() {
  const dispatch = useDispatch();
  const [activeMenu, setActiveMenu] = useState("Origin");
  const currentBuild = useSelector((state) => state.builds.current);
  const Origins = useSelector((state) => state.static.origins);
  const [points, setPoints] = useState(27);

  useEffect(() => {
    dispatch(thunkPreloadData());
    dispatch(setDefaults());
  }, []);

  if (!currentBuild || !Origins) return "";

  return (
    <main className={styles.main}>
      <Navigation setActiveMenu={setActiveMenu} activeMenu={activeMenu} />
      <BuildComponent
        points={points}
        setPoints={setPoints}
        activeMenu={activeMenu}
      />
      <EquipmentComponent />
      <InfoComponent currentBuild={currentBuild} points={points} />
    </main>
  );
}
