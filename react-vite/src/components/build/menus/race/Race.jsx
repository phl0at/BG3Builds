//Files
import styles from "./Race.module.css";
import { Images } from "../../../images";
//Functions/Components
import { setRace } from "../../../../redux/build";
//Packages
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function RaceComponent({ currentBuild }) {
  const dispatch = useDispatch();
  const Races = useSelector((state) => state.static.races);
  const [errors, setErrors] = useState({});

  const onClick = (e, race) => {
    e.preventDefault();
    setErrors({});
    if (currentBuild.origin === 7 || currentBuild.origin === 8) {
      dispatch(setRace(race));
    } else {
      setErrors({ error: "Cannot change the race of an Origin character" });
    }
  };

  return (
    <>
      {
        <>
          <div className={styles.title}>Race</div>
          <div className={styles.raceList}>
            <div className={styles.race}>
              <img
                onClick={(e) => onClick(e, 1)}
                src={Images.races["Elf"]}
                className={
                  currentBuild.race === 1
                    ? styles.selected_raceImg
                    : styles.raceImg
                }
              ></img>
              Elf
            </div>
            <div className={styles.race}>
              <img
                onClick={(e) => onClick(e, 2)}
                src={Images.races["Tiefling"]}
                className={
                  currentBuild.race === 2
                    ? styles.selected_raceImg
                    : styles.raceImg
                }
              ></img>
              Tiefling
            </div>
            <div className={styles.race}>
              <img
                onClick={(e) => onClick(e, 3)}
                src={Images.races["Drow"]}
                className={
                  currentBuild.race === 3
                    ? styles.selected_raceImg
                    : styles.raceImg
                }
              ></img>
              Drow
            </div>
            <div className={styles.race}>
              <img
                onClick={(e) => onClick(e, 4)}
                src={Images.races["Human"]}
                className={
                  currentBuild.race === 4
                    ? styles.selected_raceImg
                    : styles.raceImg
                }
              ></img>
              Human
            </div>
            <div className={styles.race}>
              <img
                onClick={(e) => onClick(e, 5)}
                src={Images.races["Githyanki"]}
                className={
                  currentBuild.race === 5
                    ? styles.selected_raceImg
                    : styles.raceImg
                }
              ></img>
              Githyanki
            </div>
            <div className={styles.race}>
              <img
                onClick={(e) => onClick(e, 6)}
                src={Images.races["Dwarf"]}
                className={
                  currentBuild.race === 6
                    ? styles.selected_raceImg
                    : styles.raceImg
                }
              ></img>
              Dwarf
            </div>
            <div className={styles.race}>
              <img
                onClick={(e) => onClick(e, 7)}
                src={Images.races["Halfelf"]}
                className={
                  currentBuild.race === 7
                    ? styles.selected_raceImg
                    : styles.raceImg
                }
              ></img>
              Half-Elf
            </div>
            <div className={styles.race}>
              <img
                onClick={(e) => onClick(e, 8)}
                src={Images.races["Halfling"]}
                className={
                  currentBuild.race === 8
                    ? styles.selected_raceImg
                    : styles.raceImg
                }
              ></img>
              Halfling
            </div>
            <div className={styles.race}>
              <img
                onClick={(e) => onClick(e, 9)}
                src={Images.races["Gnome"]}
                className={
                  currentBuild.race === 9
                    ? styles.selected_raceImg
                    : styles.raceImg
                }
              ></img>
              Gnome
            </div>
            <div className={styles.race}>
              <img
                onClick={(e) => onClick(e, 10)}
                src={Images.races["Dragonborn"]}
                className={
                  currentBuild.race === 10
                    ? styles.selected_raceImg
                    : styles.raceImg
                }
              ></img>
              Dragonborn
            </div>
            <div className={styles.race}>
              <img
                onClick={(e) => onClick(e, 11)}
                src={Images.races["Halforc"]}
                className={
                  currentBuild.race === 11
                    ? styles.selected_raceImg
                    : styles.raceImg
                }
              ></img>
              Half-Orc
            </div>
          </div>
          <div className={styles.select}>
            <div className={styles.name}>{Races[currentBuild.race].name}</div>
            <div className={styles.description}>
              {Races[currentBuild.race].description}
            </div>
          </div>
          <div className={styles.error}>{errors && errors.error}</div>
        </>
      }
    </>
  );
}
