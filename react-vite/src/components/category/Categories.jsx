// Files
import styles from "./Categories.module.css";
// Functions/Components
import { CiSquareRemove, CiStop1 } from "react-icons/ci";
// Packages

export default function CategoryComponent({ category, setCategory }) {
  return (
    <main className={styles.main}>
      <div className={styles.title}>Categories</div>
      <div className={styles.categoryContainer}>
        <div>
          <button
            className={
              category === "Characters"
                ? styles.selectedCategory
                : styles.category
            }
            onClick={(e) => {
              e.preventDefault();
              setCategory("Characters");
            }}
          >
            {category === "Characters" ? (
              <CiSquareRemove size="24" />
            ) : (
              <CiStop1 size="24" />
            )}
            Characters
          </button>
        </div>
        <div>
          <button
            className={
              category === "Classes" ? styles.selectedCategory : styles.category
            }
            onClick={(e) => {
              e.preventDefault();
              setCategory("Classes");
            }}
          >
            {category === "Classes" ? (
              <CiSquareRemove size="24" />
            ) : (
              <CiStop1 size="24" />
            )}
            Classes
          </button>
        </div>
        <div>
          <button
            className={
              category === "Abilities"
                ? styles.selectedCategory
                : styles.category
            }
            onClick={(e) => {
              e.preventDefault();
              setCategory("Abilities");
            }}
          >
            {category === "Abilities" ? (
              <CiSquareRemove size="24" />
            ) : (
              <CiStop1 size="24" />
            )}
            Abilities
          </button>
        </div>
        <div>
          <button
            className={
              category === "Equipment"
                ? styles.selectedCategory
                : styles.category
            }
            onClick={(e) => {
              e.preventDefault();
              setCategory("Equipment");
            }}
          >
            {category === "Equipment" ? (
              <CiSquareRemove size="24" />
            ) : (
              <CiStop1 size="24" />
            )}
            Equipment
          </button>
        </div>
        <div>
          <button
            className={
              category === "Features"
                ? styles.selectedCategory
                : styles.category
            }
            onClick={(e) => {
              e.preventDefault();
              setCategory("Features");
            }}
          >
            {category === "Features" ? (
              <CiSquareRemove size="24" />
            ) : (
              <CiStop1 size="24" />
            )}
            Site Features
          </button>
        </div>
      </div>
    </main>
  );
}
