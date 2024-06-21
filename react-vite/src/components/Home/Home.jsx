import styles from "./Home.module.css";
import { NavLink } from "react-router-dom";

export default function HomePage() {

  return (
    <main className={styles.main}>
      <NavLink to="/build" >Start Building!</NavLink>
    </main>
  );
}
