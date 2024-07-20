//Files
import styles from "./Navigation.module.css";
//Functions/Components
//Packages
import { CiSquareRemove, CiStop1 } from "react-icons/ci";

function Navigation({ setActiveMenu, activeMenu }) {
  return (
    <main className={styles.main}>
      <div className={styles.title}>Build Menus</div>
      <div>
        <button
          className={
            activeMenu === "Origin" ? styles.menuItemSelected : styles.menuItem
          }
          onClick={(e) => {
            e.preventDefault();
            setActiveMenu("Origin");
          }}
        >
          {activeMenu === "Origin" ? (
            <CiSquareRemove size="24" />
          ) : (
            <CiStop1 size="24" />
          )}
          Origin
        </button>
      </div>
      <div>
        <button
          className={
            activeMenu === "Race" ? styles.menuItemSelected : styles.menuItem
          }
          onClick={(e) => {
            e.preventDefault();
            setActiveMenu("Race");
          }}
        >
          {activeMenu === "Race" ? (
            <CiSquareRemove size="24" />
          ) : (
            <CiStop1 size="24" />
          )}
          Race
        </button>
      </div>
      <div>
        <button
          className={
            activeMenu === "Background"
              ? styles.menuItemSelected
              : styles.menuItem
          }
          onClick={(e) => {
            e.preventDefault();
            setActiveMenu("Background");
          }}
        >
          {activeMenu === "Background" ? (
            <CiSquareRemove size="24" />
          ) : (
            <CiStop1 size="24" />
          )}
          Background
        </button>
      </div>
      <div>
        <button
          className={
            activeMenu === "Class" ? styles.menuItemSelected : styles.menuItem
          }
          onClick={(e) => {
            e.preventDefault();
            setActiveMenu("Class");
          }}
        >
          {activeMenu === "Class" ? (
            <CiSquareRemove size="24" />
          ) : (
            <CiStop1 size="24" />
          )}
          Class
        </button>
      </div>
      <div>
        <button
          className={
            activeMenu === "Abilities"
              ? styles.menuItemSelected
              : styles.menuItem
          }
          onClick={(e) => {
            e.preventDefault();
            setActiveMenu("Abilities");
          }}
        >
          {activeMenu === "Abilities" ? (
            <CiSquareRemove size="24" />
          ) : (
            <CiStop1 size="24" />
          )}
          Abilities
        </button>
      </div>
    </main>
  );
}

export default Navigation;
