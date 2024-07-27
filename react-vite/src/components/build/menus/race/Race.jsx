//Files
import styles from "./Race.module.css";
import { Images } from "../../../images";
//Functions/Components
import { action } from "../../../../redux/build";
import { useModal } from "../../../../context/Modal";
import ErrorModal from "../../../modals/error/ErrorModal";
//Packages
import { useDispatch, useSelector } from "react-redux";

export default function RaceComponent() {
  const dispatch = useDispatch();
  const { setModalContent } = useModal();
  const currentOrigin = useSelector((state) => state.builds.current.origin);
  const currentRace = useSelector((state) => state.builds.current.race);
  const Races = useSelector((state) => state.static.races);

  const onClick = (e, race) => {
    e.preventDefault();
    if (currentOrigin === 7 || currentOrigin === 8) {
      dispatch(action("build/setRace", race));
    } else {
      setModalContent(
        <ErrorModal
          errors={{
            FAQ: ["Cannot change an Origin Characters race"],
          }}
        />
      );
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
                  currentRace === 1 ? styles.selected_raceImg : styles.raceImg
                }
              ></img>
              Elf
            </div>
            <div className={styles.race}>
              <img
                onClick={(e) => onClick(e, 2)}
                src={Images.races["Tiefling"]}
                className={
                  currentRace === 2 ? styles.selected_raceImg : styles.raceImg
                }
              ></img>
              Tiefling
            </div>
            <div className={styles.race}>
              <img
                onClick={(e) => onClick(e, 3)}
                src={Images.races["Drow"]}
                className={
                  currentRace === 3 ? styles.selected_raceImg : styles.raceImg
                }
              ></img>
              Drow
            </div>
            <div className={styles.race}>
              <img
                onClick={(e) => onClick(e, 4)}
                src={Images.races["Human"]}
                className={
                  currentRace === 4 ? styles.selected_raceImg : styles.raceImg
                }
              ></img>
              Human
            </div>
            <div className={styles.race}>
              <img
                onClick={(e) => onClick(e, 5)}
                src={Images.races["Githyanki"]}
                className={
                  currentRace === 5 ? styles.selected_raceImg : styles.raceImg
                }
              ></img>
              Githyanki
            </div>
            <div className={styles.race}>
              <img
                onClick={(e) => onClick(e, 6)}
                src={Images.races["Dwarf"]}
                className={
                  currentRace === 6 ? styles.selected_raceImg : styles.raceImg
                }
              ></img>
              Dwarf
            </div>
            <div className={styles.race}>
              <img
                onClick={(e) => onClick(e, 7)}
                src={Images.races["Halfelf"]}
                className={
                  currentRace === 7 ? styles.selected_raceImg : styles.raceImg
                }
              ></img>
              Half-Elf
            </div>
            <div className={styles.race}>
              <img
                onClick={(e) => onClick(e, 8)}
                src={Images.races["Halfling"]}
                className={
                  currentRace === 8 ? styles.selected_raceImg : styles.raceImg
                }
              ></img>
              Halfling
            </div>
            <div className={styles.race}>
              <img
                onClick={(e) => onClick(e, 9)}
                src={Images.races["Gnome"]}
                className={
                  currentRace === 9 ? styles.selected_raceImg : styles.raceImg
                }
              ></img>
              Gnome
            </div>
            <div className={styles.race}>
              <img
                onClick={(e) => onClick(e, 10)}
                src={Images.races["Dragonborn"]}
                className={
                  currentRace === 10 ? styles.selected_raceImg : styles.raceImg
                }
              ></img>
              Dragonborn
            </div>
            <div className={styles.race}>
              <img
                onClick={(e) => onClick(e, 11)}
                src={Images.races["Halforc"]}
                className={
                  currentRace === 11 ? styles.selected_raceImg : styles.raceImg
                }
              ></img>
              Half-Orc
            </div>
          </div>
          <div className={styles.select}>
            <div className={styles.name}>{Races[currentRace].name}</div>
            <div className={styles.description}>
              {Races[currentRace].description}
            </div>
          </div>
        </>
      }
    </>
  );
}
