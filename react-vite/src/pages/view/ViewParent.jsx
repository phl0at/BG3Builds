//Files
import styles from "./ViewParent.module.css";
//Functions/Components
import ViewBuildsComponent from "../../components/view";
import FilterBuildComponent from "../../components/filter";
import { thunkGetAllBuilds } from "../../redux/build";
import { thunkPreloadData } from "../../redux/static";
//Packages
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function ViewParentPage() {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({});
  const builds = useSelector((state) => state.builds);
  const staticData = useSelector((state) => state.static);

  useEffect(() => {
    dispatch(thunkGetAllBuilds());
    if (!staticData["classes"]) {
      dispatch(thunkPreloadData());
    }
  }, []);

  if (!builds || !staticData["classes"]) return "";

  return (
    <main className={styles.main}>
      <FilterBuildComponent filters={filters} setFilters={setFilters} />
      <ViewBuildsComponent filters={filters} />
    </main>
  );
}
