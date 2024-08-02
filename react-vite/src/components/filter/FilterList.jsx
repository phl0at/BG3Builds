// Files
import styles from "./FilterList.module.css";
// Functions/Components
import { Category, UserFilter } from "./Categories";
// Packages
import { useSelector } from "react-redux";
import { useState } from "react";

export default function FilterBuildComponent({ filters, setFilters }) {
  const currentUser = useSelector((state) => state.session.user);
  const [showOrigins, setShowOrigins] = useState(false);
  const [showRaces, setShowRaces] = useState(false);
  const [showBackgrounds, setShowBackgrounds] = useState(false);
  const [showClasses, setShowClasses] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  return (
    <main className={styles.main}>
      <div className={styles.title}>Filters</div>
      <div className={styles.filterContainer}>
        <div>
          {currentUser && (
            <>
              <UserFilter
                type="owned"
                filters={filters}
                setFilters={setFilters}
              />
              <UserFilter
                type="favorites"
                filters={filters}
                setFilters={setFilters}
              />
            </>
          )}
          <Category
            type={"origins"}
            show={showOrigins}
            setShow={setShowOrigins}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
            filters={filters}
            setFilters={setFilters}
          />
          <Category
            type={"races"}
            show={showRaces}
            setShow={setShowRaces}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
            filters={filters}
            setFilters={setFilters}
          />
          <Category
            type={"backgrounds"}
            show={showBackgrounds}
            setShow={setShowBackgrounds}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
            filters={filters}
            setFilters={setFilters}
          />
          <Category
            type={"classes"}
            show={showClasses}
            setShow={setShowClasses}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
            filters={filters}
            setFilters={setFilters}
          />
        </div>
        <div className={styles.clear}>
          {Object.values(filters).find((val) => val != null) && (
            <button
              className={styles.button}
              onClick={(e) => {
                e.preventDefault();
                setFilters({});
                setSelectedItem({});
                setShowOrigins(false);
                setShowRaces(false);
                setShowBackgrounds(false);
                setShowClasses(false);
              }}
            >
              Clear Filters
            </button>
          )}
        </div>
        <div></div>
      </div>
    </main>
  );
}
