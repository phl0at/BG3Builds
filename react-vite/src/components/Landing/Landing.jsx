import styles from "./Landing.module.css";
import { NavLink } from "react-router-dom";

export default function LandingPage() {

  return (
    <main className={styles.main}>
      <NavLink to="/create" >Start Building!</NavLink>
    </main>
  );
}
