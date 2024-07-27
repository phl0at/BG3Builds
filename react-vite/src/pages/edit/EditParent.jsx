//Files
import styles from "./EditParent.module.css";
//Functions/Components
import { thunkGetBuild } from "../../redux/build";
import { thunkPreloadData } from "../../redux/static";
import Navigation from "../../components/build/navigation";
import BuildComponent from "../../components/build";
import EquipmentComponent from "../../components/equipment";
import InfoComponent from "../../components/info";
//Packages
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";

export default function EditParentPage() {
  const { buildId } = useParams();
  const dispatch = useDispatch();
  const currentBuild = useSelector((state) => state.builds.current);
  const currentUser = useSelector((state) => state.session.user);
  const Origins = useSelector((state) => state.static.origins);
  const [activeMenu, setActiveMenu] = useState("Origin");

  useEffect(() => {
    if (!Origins) {
      dispatch(thunkPreloadData());
    }
  }, [dispatch]);

  useEffect(() => {
    dispatch(thunkGetBuild(buildId));
  }, [currentUser]);

  if (!currentBuild || !Origins) {
    return (
      <main className={styles.loading}>
        <ClipLoader color="#e4c274" size="100px" />
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <Navigation setActiveMenu={setActiveMenu} activeMenu={activeMenu} />
      <BuildComponent activeMenu={activeMenu} />
      <EquipmentComponent />
      <InfoComponent />
    </main>
  );
}
