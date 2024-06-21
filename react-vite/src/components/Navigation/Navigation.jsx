import styles from "./Navigation.module.css";

function Navigation() {
  return (
    <ul className={styles.navBar}>
      <li>
        <button>Origin</button>
      </li>
      <li>
        <button>Race</button>
      </li>
      <li>
        <button>Class</button>
      </li>
      <li>
        <button>Background</button>
      </li>
      <li>
        <button>Abilities</button>
      </li>
    </ul>
  );
}

export default Navigation;
