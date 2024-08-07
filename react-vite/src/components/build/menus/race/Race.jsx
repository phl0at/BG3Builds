//Files
import styles from "../../Build.module.css";
//Functions/Components
import { action } from "../../../../redux/build";
import { useModal } from "../../../../context/Modal";
import ErrorModal from "../../../modals/error/ErrorModal";
//Packages
import { useDispatch, useSelector } from "react-redux";
import { IKImage } from "imagekitio-react";

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
          <div className={styles.list}>
            {Object.values(Races).map((race) => (
              <div
                onClick={(e) => onClick(e, race.id)}
                key={race.id}
                className={styles.item}
              >
                <IKImage
                  path={`race_icons/${race.name}.png`}
                  id={styles.raceImg}
                  className={
                    currentRace === race.id ? styles.selected_img : styles.img
                  }
                />
                {race.name}
              </div>
            ))}
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
