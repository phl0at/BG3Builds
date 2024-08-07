//Files
import styles from "./Info.module.css";
//Functions/Components
import { BuildButtons, NavButtons } from "./Button";
import AboutBuild from "./about";
import Comments from "./comments";
//Packages
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function InfoComponent() {
  const { buildId } = useParams();
  const currentUser = useSelector((state) => state.session.user);
  const [display, setDisplay] = useState("Info");

  useEffect(() => {
    setDisplay("Info");
  }, [buildId]);

  return (
    <main className={styles.main}>
      {display === "Info" && (
        <div className={styles.infoPanel}>
          <AboutBuild display={display} setDisplay={setDisplay} />
        </div>
      )}
      {display === "Comments" && (
        <div className={styles.commentsPanel}>
          <Comments display={display} setDisplay={setDisplay} />
        </div>
      )}
      <div className={styles.buttonPanel}>
        {currentUser && <BuildButtons />}
        <NavButtons />
      </div>
    </main>
  );
}
