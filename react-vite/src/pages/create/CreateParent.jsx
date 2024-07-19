//Files
import styles from "./CreateParent.module.css";
//Functions/Components
import { action } from "../../redux/build";
import { thunkPreloadData } from "../../redux/static";
import Navigation from "../../components/navigation";
import BuildComponent from "../../components/build";
import EquipmentComponent from "../../components/equipment";
import InfoComponent from "../../components/info";
//Packages
import { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";

export default function CreateParentPage() {
  const dispatch = useDispatch();
  const currentBuild = useSelector((state) => state.builds.current);
  const Origins = useSelector((state) => state.static.origins);
  const [activeMenu, setActiveMenu] = useState("Origin");
  const [points, setPoints] = useState(27);

  useEffect(() => {
    dispatch(thunkPreloadData());
    dispatch(action("build/setDefault"));
  }, [dispatch]);

  if (!currentBuild || !Origins) {
    return (
      <main className={styles.loading}>
        <ClipLoader color="#e4c274" size="100px" />
      </main>
    );
  }

  return (
    <>
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
    </>
  );
}
