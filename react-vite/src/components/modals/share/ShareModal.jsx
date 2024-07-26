// Files
import styles from "./ShareModal.module.css";
// Functions/Components
import { BuildCodeGenerator } from "./helper";
// Packages

export default function ShareModal({ currentBuild }) {
  const code = BuildCodeGenerator(currentBuild);

  return (
    <main className={styles.main}>
      <div className={styles.title}>Export Code</div>
      <div className={styles.codeContainer}>
        {currentBuild && <p className={styles.code}>{code}</p>}
      </div>
    </main>
  );
}
