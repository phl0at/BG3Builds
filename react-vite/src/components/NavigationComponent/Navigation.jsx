//Files
import styles from "./Navigation.module.css";
//Functions/Components
//Packages
import { CiPaperplane } from "react-icons/ci";

function Navigation({ setActiveMenu, activeMenu }) {

  return (
    <main className={styles.main}>
      <div
        className={
          activeMenu === "Origin" ? styles.menuItemSelected : styles.menuItem
        }
      >
        <div className={styles.navArrow}>
          {activeMenu === "Origin" && <CiPaperplane size="15" />}
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            setActiveMenu("Origin");
          }}
        >
          Origin
        </button>
      </div>
      <div
        className={
          activeMenu === "Race" ? styles.menuItemSelected : styles.menuItem
        }
      >
        <div className={styles.navArrow}>
          {activeMenu === "Race" && <CiPaperplane />}
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            setActiveMenu("Race");
          }}
        >
          Race
        </button>
      </div>
      <div
        className={
          activeMenu === "Background"
            ? styles.menuItemSelected
            : styles.menuItem
        }
      >
        <div className={styles.navArrow}>
          {activeMenu === "Background" && <CiPaperplane />}
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            setActiveMenu("Background");
          }}
        >
          Background
        </button>
      </div>
      <div
        className={
          activeMenu === "Class" ? styles.menuItemSelected : styles.menuItem
        }
      >
        <div className={styles.navArrow}>
          {activeMenu === "Class" && <CiPaperplane />}
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            setActiveMenu("Class");
          }}
        >
          Class
        </button>
      </div>
      <div
        className={
          activeMenu === "Abilities" ? styles.menuItemSelected : styles.menuItem
        }
      >
        <div className={styles.navArrow}>
          {activeMenu === "Abilities" && <CiPaperplane />}
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            setActiveMenu("Abilities");
          }}
        >
          Abilities
        </button>
      </div>
    </main>
  );
}

export default Navigation;
