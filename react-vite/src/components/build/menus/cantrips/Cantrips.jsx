// Files
import styles from "./Cantrips.module.css";
// Functions/Components
import { getBuildClassArray, getCantripsArray } from "../../../../redux/build";
// Packages
import { useSelector } from "react-redux";
import { BsFillStarFill } from "react-icons/bs";
import { IKImage } from "imagekitio-react";

export default function CantripsComponent() {
  const Cantrips = useSelector((state) => state.static.cantrips);
  const modifier = useSelector(getBuildClassArray)[0].modifier.toUpperCase();
  const selectedCantrips = useSelector(getCantripsArray);
  const selectedCantripsObject = useSelector(
    (state) => state.builds.current.cantrips
  );

  return (
    <>
      <div className={styles.title}>Cantrips</div>
      <p className={styles.modifier} title="Spell Casting Modifier">
        <BsFillStarFill size="11" /> {modifier.slice(0, 3)}
      </p>
      <p className={styles.introContainer}>
        <div className={styles.introTitle}>Select Cantrips</div>
        <div className={styles.instructions}>
          {`Change your cantrip selection by choosing from the spell list below.
          Cantrips don't use spell slots and can be cast at will.`}
        </div>
      </p>
      <div className={styles.selected}>Selected</div>
      <div className={styles.selectedList}>
        {selectedCantrips.map((cantrip) => (
          <IKImage
            key={cantrip.cantrip_id}
            title={`${Cantrips[cantrip.cantrip_id].name}`}
            className={styles.cantripImg}
            loading="lazy"
            path={`cantrip_icons/${Cantrips[cantrip.cantrip_id].name}.png`}
          />
        ))}
      </div>
      <div className={styles.available}>Available</div>
      <div className={styles.availableList}>
        {Object.values(Cantrips).map((cantrip) => (
          <IKImage
            key={cantrip.id}
            title={`${cantrip.name}`}
            className={
              selectedCantripsObject[cantrip.id]
                ? styles.chosenCantripImg
                : styles.cantripImg
            }
            loading="lazy"
            path={`cantrip_icons/${cantrip.name}.png`}
          />
        ))}
      </div>
    </>
  );
}
