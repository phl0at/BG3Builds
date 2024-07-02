//Files
import styles from "./ViewParent.module.css";
//Functions/Components
import ViewBuildsComponent from "./ViewComponent";
import FilterBuildComponent from "./FilterComponent";
//Packages
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { thunkGetAllBuilds } from "../../../../redux/build";

export default function ViewParentPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(thunkGetAllBuilds());
  }, []);

  return (
    <main className={styles.main}>
      <FilterBuildComponent />
      <ViewBuildsComponent />
    </main>
  );
}
