import styles from "./FilterBuilds.module.css";
import { useSelector } from "react-redux";

export default function FilterBuildComponent({ filters, setFilters }) {
  const currentUser = useSelector((state) => state.session.user);

  const apply = (e) => {
    e.preventDefault();
    setFilters({ ...filters, applied: true });
    console.log(filters);
  };

  const clear = (e) => {
    e.preventDefault();
    setFilters({});
  };

  return (
    <main className={styles.main}>
      <div className={styles.title}>Filters</div>
      <div className={styles.filtersContainer}>
        <div className={styles.myBuilds}>
          {currentUser && (
            <>
              <button
                disabled={filters["applied"]}
                className={
                  filters["owned"]
                    ? styles.ownedButtonSelected
                    : styles.ownedButton
                }
                onClick={(e) => {
                  e.preventDefault();
                  setFilters({ ...filters, owned: !filters["owned"] });
                }}
              />
              Owned
            </>
          )}
        </div>
        <div className={styles.myFavorites}>
          <button
            disabled={filters["applied"]}
            className={
              filters["favorites"]
                ? styles.ownedButtonSelected
                : styles.ownedButton
            }
            onClick={(e) => {
              e.preventDefault();
              setFilters({ ...filters, favorites: !filters["favorites"] });
            }}
          />
          Favorites
        </div>
        <div className={styles.classes}></div>

        <div className={styles.apply}>
          <button className={styles.button} onClick={apply}>
            Apply Filters
          </button>
          <button className={styles.button} onClick={clear}>
            Clear Filters
          </button>
        </div>
      </div>
    </main>
  );
}
