// Files
import styles from "./Cantrips.module.css";
// Functions/Components
// Packages
export default function CantripsComponent() {
  return (
    <>
      <div className={styles.title}>Cantrips</div>
      <p>{`<casting modifier>`}</p>
      <p className={styles.introContainer}>
        <div className={styles.introTitle}>Select Cantrips</div>
        <div className={styles.instructions}>
          Change your cantrip selection by choosing from the spell list below.
          Cantrips don't use spell slots and can be cast at will.
        </div>
      </p>
      <div className={styles.selected}>Selected</div>
      <div className={styles.selectedList}>{`<selected cantrips list>`}</div>
      <div className={styles.available}>Available</div>
      <div className={styles.availableList}>{`<available cantrips list>`}</div>
    </>
  );
}
