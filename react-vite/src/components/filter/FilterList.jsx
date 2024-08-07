// Files
import styles from "./FilterList.module.css";
// Functions/Components
import { Category, UserFilter } from "./Categories";
// Packages
import { useSelector } from "react-redux";
import { useState } from "react";
import { CiUndo } from "react-icons/ci";

export default function FilterBuildComponent({ filters, setFilters }) {
  const currentUser = useSelector((state) => state.session.user);
  const [selectedItem, setSelectedItem] = useState({});
  const types = ["origins", "races", "backgrounds", "classes"];

  return (
    <main className={styles.main}>
      <div className={styles.title}>
        Filters
        {Object.values(filters).find((val) => val != null) && (
          <button
            className={styles.clear}
            onClick={(e) => {
              e.preventDefault();
              setFilters({});
              setSelectedItem({});
            }}
          >
            <CiUndo size="30" />
          </button>
        )}
      </div>
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
          {types.map((type, i) => (
            <Category
              key={i}
              type={type}
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              filters={filters}
              setFilters={setFilters}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
