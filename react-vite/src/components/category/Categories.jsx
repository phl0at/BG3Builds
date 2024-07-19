import styles from "./Categories.module.css";
import { CiSquareChevRight } from "react-icons/ci";

export default function CategoryComponent({ category, setCategory }) {
  return (
    <main className={styles.main}>
      <div className={styles.title}>Categories</div>
      <div className={styles.categoryContainer}>
        <div
          className={
            category === "Characters"
              ? styles.selectedCategory
              : styles.category
          }
        >
          <div className={styles.pointer}>
            {category === "Characters" && <CiSquareChevRight size="24" />}
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              setCategory("Characters");
            }}
          >
            Characters
          </button>
        </div>
        <div
          className={
            category === "Abilities" ? styles.selectedCategory : styles.category
          }
        >
          <div className={styles.pointer}>
            {category === "Abilities" && <CiSquareChevRight size="24" />}
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              setCategory("Abilities");
            }}
          >
            Abilities
          </button>
        </div>
        <div
          className={
            category === "Classes" ? styles.selectedCategory : styles.category
          }
        >
          <div className={styles.pointer}>
            {category === "Classes" && <CiSquareChevRight size="24" />}
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              setCategory("Classes");
            }}
          >
            Classes
          </button>
        </div>
        <div
          className={
            category === "Equipment" ? styles.selectedCategory : styles.category
          }
        >
          <div className={styles.pointer}>
            {category === "Equipment" && <CiSquareChevRight size="24" />}
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              setCategory("Equipment");
            }}
          >
            Equipment
          </button>
        </div>
        <div
          className={
            category === "Features" ? styles.selectedCategory : styles.category
          }
        >
          <div className={styles.pointer}>
            {category === "Features" && <CiSquareChevRight size="24" />}
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              setCategory("Features");
            }}
          >
            Site Features
          </button>
        </div>
      </div>
    </main>
  );
}
