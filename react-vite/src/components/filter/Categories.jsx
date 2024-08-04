import { useState } from "react";
import styles from "./FilterList.module.css";
import {
  CiSquareChevRight,
  CiSquareChevDown,
  CiStop1,
  CiSquareRemove,
} from "react-icons/ci";
import { useSelector } from "react-redux";

export function UserFilter({ type, filters, setFilters }) {
  const label = type[0].toUpperCase() + type.slice(1);

  return (
    <>
      <div>
        <button
          className={styles.filter}
          onClick={(e) => {
            e.preventDefault();
            setFilters((prev) =>
              filters[type]
                ? { ...prev, [type]: null }
                : { ...prev, [type]: true }
            );
          }}
        >
          {filters[type] ? <CiSquareRemove size="24" /> : <CiStop1 size="24" />}
          {label}
        </button>
      </div>
    </>
  );
}

export function Category({
  type,
  selectedItem,
  setSelectedItem,
  filters,
  setFilters,
}) {
  const [show, setShow] = useState(false);
  const label = type[0].toUpperCase() + type.slice(1);
  const filterOption = useSelector((state) => state.static[type]);

  return (
    <>
      <div>
        <button
          className={styles.filter}
          onClick={(e) => {
            e.preventDefault();
            setShow(!show);
          }}
        >
          {show ? (
            <CiSquareChevDown size="24" />
          ) : (
            <CiSquareChevRight size="24" />
          )}
          {label}
        </button>
      </div>

      <div className={show ? styles.list : styles.hidden}>
        {Object.values(filterOption).map((element, i) => {
          const elId = element.class_id ? "class_id" : "id";
          return (
            <div key={i}>
              <button
                className={
                  selectedItem[type] === element.name
                    ? styles.selected
                    : styles.listItem
                }
                onClick={(e) => {
                  e.preventDefault();
                  setFilters((prev) =>
                    filters[type] === element[elId]
                      ? { ...prev, [type]: null }
                      : { ...prev, [type]: element[elId] }
                  );
                  setSelectedItem((prev) =>
                    selectedItem[type] === element.name
                      ? { ...prev, [type]: null }
                      : { ...prev, [type]: element.name }
                  );
                }}
              >
                {element.name}
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
