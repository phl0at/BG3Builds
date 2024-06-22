//Files
import styles from "./Race.module.css";
import { Images } from "../../../../images";
//Functions/Components
import { setRace } from "../../../../../redux/build";
//Packages
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function RaceComponent({ currentBuild }) {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});

  const onClick = (e, race) => {
    e.preventDefault();
    setErrors({});
    if (
      currentBuild.origin === "Custom" ||
      currentBuild.origin === "DarkUrge"
    ) {
      dispatch(setRace(race));
    } else {
      setErrors({ error: "Cannot change the race of an Origin character" });
    }
  };

  return (
    <>
      <div className={styles.title}>Race</div>
      <div className={styles.raceList}>
        <div className={styles.race}>
          <img
            onClick={(e) => onClick(e, "Elf")}
            src={Images.races["Elf"]}
            className={styles.raceImg}
          ></img>
          Elf
        </div>
        <div className={styles.race}>
          <img
            onClick={(e) => onClick(e, "Tiefling")}
            src={Images.races["Tiefling"]}
            className={styles.raceImg}
          ></img>
          Tiefling
        </div>
        <div className={styles.race}>
          <img
            onClick={(e) => onClick(e, "Drow")}
            src={Images.races["Drow"]}
            className={styles.raceImg}
          ></img>
          Drow
        </div>
        <div className={styles.race}>
          <img
            onClick={(e) => onClick(e, "Human")}
            src={Images.races["Human"]}
            className={styles.raceImg}
          ></img>
          Human
        </div>
        <div className={styles.race}>
          <img
            onClick={(e) => onClick(e, "Githyanki")}
            src={Images.races["Githyanki"]}
            className={styles.raceImg}
          ></img>
          Githyanki
        </div>
        <div className={styles.race}>
          <img
            onClick={(e) => onClick(e, "Dwarf")}
            src={Images.races["Dwarf"]}
            className={styles.raceImg}
          ></img>
          Dwarf
        </div>
        <div className={styles.race}>
          <img
            onClick={(e) => onClick(e, "Halfelf")}
            src={Images.races["Halfelf"]}
            className={styles.raceImg}
          ></img>
          Half-Elf
        </div>
        <div className={styles.race}>
          <img
            onClick={(e) => onClick(e, "Halfling")}
            src={Images.races["Halfling"]}
            className={styles.raceImg}
          ></img>
          Halfling
        </div>
        <div className={styles.race}>
          <img
            onClick={(e) => onClick(e, "Gnome")}
            src={Images.races["Gnome"]}
            className={styles.raceImg}
          ></img>
          Gnome
        </div>
        <div className={styles.race}>
          <img
            onClick={(e) => onClick(e, "Dragonborn")}
            src={Images.races["Dragonborn"]}
            className={styles.raceImg}
          ></img>
          Dragonborn
        </div>
        <div className={styles.race}>
          <img
            onClick={(e) => onClick(e, "Halforc")}
            src={Images.races["Halforc"]}
            className={styles.raceImg}
          ></img>
          Half-Orc
        </div>
      </div>
      <div className={styles.select}>{currentBuild.race}</div>
      <div className={styles.error}>{errors && errors.error}</div>
    </>
  );
}
