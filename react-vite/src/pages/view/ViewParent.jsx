//Files
import styles from "./ViewParent.module.css";
//Functions/Components
import ViewBuildsComponent from "../../components/view";
import FilterBuildComponent from "../../components/filter";
//Packages
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { thunkGetAllBuilds } from "../../redux/build";
import { thunkPreloadData } from "../../redux/static";

export default function ViewParentPage() {
  const dispatch = useDispatch();
  const builds = useSelector((state) => state.builds);
  const staticData = useSelector((state) => state.static);

  useEffect(() => {
    dispatch(thunkGetAllBuilds());
    if (!staticData) {
      dispatch(thunkPreloadData());
    }
  }, []);

  if (!builds || !staticData) return "";

  return (
    <main className={styles.main}>
      <FilterBuildComponent />
      <ViewBuildsComponent />
    </main>
  );
}
