//Files
import styles from "./EditParent.module.css";
//Functions/Components
import { thunkGetBuild } from "../../redux/build";
import { thunkPreloadData } from "../../redux/static";
import Navigation from "../../components/navigation";
import BuildComponent from "../../components/build";
import EquipmentComponent from "../../components/equipment";
import InfoComponent from "../../components/info";
//Packages
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";


export default function EditParentPage() {
  const { buildId } = useParams();
  const dispatch = useDispatch();
  const currentBuild = useSelector((state) => state.builds.current);
  const Origins = useSelector((state) => state.static.origins);
  const [activeMenu, setActiveMenu] = useState("Origin");
  const [points, setPoints] = useState(0);

  useEffect(() => {
    dispatch(thunkPreloadData());
    dispatch(thunkGetBuild(buildId));
  }, []);


  if (!currentBuild || !Origins)  {
    return (
      <main className={styles.loading}>
        <ClipLoader color="rgb(101, 71, 42)" size="100" />
      </main>
    );
  }

    return (
      <main className={styles.main}>
        <div className={styles.title}>{currentBuild.name}</div>
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
