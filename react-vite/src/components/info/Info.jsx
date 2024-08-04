//Files
import styles from "./Info.module.css";
//Functions/Components
import { BuildButtons, NavButtons } from "./Button";
import AboutBuild from "./about";
import Comments from "./comments";
//Packages
import { useState } from "react";
import { useSelector } from "react-redux";

export default function InfoComponent() {
  const currentUser = useSelector((state) => state.session.user);
  const [display, setDisplay] = useState("Comments");

  return (
    <main className={styles.main}>
      <div className={styles.infoPanel}>
        {display === "Info" && (
          <AboutBuild display={display} setDisplay={setDisplay} />
        )}
        {display === "Comments" && (
          <Comments display={display} setDisplay={setDisplay} />
        )}
      </div>
      <div className={styles.buttonPanel}>
        {currentUser && <BuildButtons />}
        <NavButtons />
      </div>
    </main>
  );
}
