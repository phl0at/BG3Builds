//Files
import styles from "./View.module.css";
//Functions/Components
import ViewBuildsComponent from "../../components/view";
import FilterBuildComponent from "../../components/filter";
import { getBuildsArray, thunkGetAllBuilds } from "../../redux/build";
//Packages
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";

export default function ViewPage() {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({});
  const builds = useSelector(getBuildsArray);

  useEffect(() => {
    dispatch(thunkGetAllBuilds());
  }, [dispatch]);

  if (!builds.length) {
    return (
      <main className={styles.loading}>
        <ClipLoader color="#e4c274" size="100px" />
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <FilterBuildComponent filters={filters} setFilters={setFilters} />
      <ViewBuildsComponent filters={filters} setFilters={setFilters} />
    </main>
  );
}
