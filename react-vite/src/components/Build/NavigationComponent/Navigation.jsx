import styles from "./Navigation.module.css";

function Navigation({ setActiveMenu }) {
  return (
    <main className={styles.main}>
      <div className={styles.menuItem}>
        <button
          onClick={(e) => {
            e.preventDefault();
            setActiveMenu("Origin");
          }}
        >
          Origin
        </button>
      </div>
      <div className={styles.menuItem}>
        <button
          onClick={(e) => {
            e.preventDefault();
            setActiveMenu("Race");
          }}
        >
          Race
        </button>
      </div>
      <div className={styles.menuItem}>
        <button
          onClick={(e) => {
            e.preventDefault();
            setActiveMenu("Class");
          }}
        >
          Class
        </button>
      </div>
      <div className={styles.menuItem}>
        <button
          onClick={(e) => {
            e.preventDefault();
            setActiveMenu("Background");
          }}
        >
          Background
        </button>
      </div>
      <div className={styles.menuItem}>
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
