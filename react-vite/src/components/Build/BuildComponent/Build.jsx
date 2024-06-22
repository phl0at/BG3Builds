import styles from "./Build.module.css";
import OriginComponent from "./Menus/OriginMenu/Origin";

export default function BuildComponent({ activeMenu }) {
  return (
    <main className={styles.main}>
      {activeMenu === "Origin" && <OriginComponent />}
    </main>
  );
}
