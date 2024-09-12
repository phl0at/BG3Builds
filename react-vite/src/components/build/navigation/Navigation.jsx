//Files
import styles from "./Navigation.module.css";
//Functions/Components
//Packages
import { CiSquareRemove, CiStop1 } from "react-icons/ci";
import { useSelector } from "react-redux";

function Navigation({ setActiveMenu, activeMenu }) {
  const cantripPoints = useSelector(
    (state) => state.builds.current.cantripPoints
  );
  const chosenCantrips = useSelector((state) => state.builds.current.cantrips);

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
      <div>
        {cantripPoints > 0 ||
          (chosenCantrips > 0 && (
            <button
              className={
                activeMenu === "Cantrips"
                  ? styles.menuItemSelected
                  : styles.menuItem
              }
              onClick={(e) => {
                e.preventDefault();
                setActiveMenu("Cantrips");
              }}
            >
              {activeMenu === "Cantrips" ? (
                <CiSquareRemove size="24" />
              ) : (
                <CiStop1 size="24" />
              )}
              Cantrips
            </button>
          ))}
      </div>
    </main>
  );
}

export default Navigation;
