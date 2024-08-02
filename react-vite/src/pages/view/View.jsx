//Files
import styles from "./View.module.css";
//Functions/Components
import ViewBuildsComponent from "../../components/view";
import FilterBuildComponent from "../../components/filter";
import { thunkGetAllBuilds } from "../../redux/build";
//Packages
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";


export default function ViewPage() {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({});

  useEffect(() => {
    dispatch(thunkGetAllBuilds());
  }, [dispatch]);


  return (
    <main className={styles.main}>
      <FilterBuildComponent filters={filters} setFilters={setFilters} />
      <ViewBuildsComponent filters={filters} setFilters={setFilters} />
    </main>
  );
}
