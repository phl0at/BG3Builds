//Files
import styles from "./Race.module.css";
//Functions/Components
import { action } from "../../../../redux/build";
import { useModal } from "../../../../context/Modal";
import ErrorModal from "../../../modals/error/ErrorModal";
//Packages
import { Suspense } from "react";
import { FadeLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import { IKImage } from "imagekitio-react";
const urlEndpoint = "https://ik.imagekit.io/phl0at/images/race_icons/";

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
            {Object.values(Races).map((race) => (
              <div key={race.id} className={styles.race}>
                <Suspense fallback={<FadeLoader />}>
                  <IKImage
                    loading="lazy"
                    onClick={(e) => onClick(e, race.id)}
                    urlEndpoint={urlEndpoint}
                    path={`${race.name}.png`}
                    className={
                      currentRace === race.id
                        ? styles.selected_raceImg
                        : styles.raceImg
                    }
                  />
                </Suspense>
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
