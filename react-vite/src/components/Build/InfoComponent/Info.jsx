//Files
import styles from "./Info.module.css";
//Functions/Components
//Packages

export default function InfoComponent() {
  return (
    <main className={styles.main}>
      <div className={styles.infoPanel}>
        <div className={styles.title}>Information</div>
      </div>
      <div className={styles.userBar}></div>
    </main>
  );
}
