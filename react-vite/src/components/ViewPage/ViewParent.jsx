//Files
import styles from "./ViewParent.module.css";
//Functions/Components
import ViewBuildsComponent from "../ViewComponent";
import FilterBuildComponent from "../FilterComponent";
//Packages
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { thunkGetAllBuilds } from "../../redux/build";
import { thunkPreloadData } from "../../redux/static";

export default function ViewParentPage() {
  const dispatch = useDispatch();
  const builds = useSelector((state) => state.builds);
  const Origins = useSelector((state) => state.static.origins);

  useEffect(() => {
    dispatch(thunkGetAllBuilds());
    if (!Origins) {
      dispatch(thunkPreloadData());
    }
  }, []);

  if (!builds || !Origins) return "";

  return (
    <main className={styles.main}>
      <FilterBuildComponent />
      <ViewBuildsComponent />
    </main>
  );
}
