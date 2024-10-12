// Files
import styles from "./Cantrips.module.css";
// Functions/Components
import Tooltip from "./Tooltip";
import {
  getBuildClassArray,
  getCantripsArray,
  action,
} from "../../../../redux/build";
// Packages
import { useSelector, useDispatch } from "react-redux";
import { BsFillStarFill } from "react-icons/bs";
import { IKImage } from "imagekitio-react";

export default function CantripsComponent() {
  const dispatch = useDispatch();
  const modifier = useSelector(getBuildClassArray)[0].modifier.toUpperCase();
  const Cantrips = useSelector((state) => state.static.cantrips);
  const cantripPoints = useSelector(
    (state) => state.builds.current.cantripPoints
  );
  const availableCantrips = useSelector(
    (state) => state.builds.current.availableCantrips
  );
  const cantripsArray = Array.from(availableCantrips);
  const selectedCantrips = useSelector(getCantripsArray);
  const selectedCantripsObject = useSelector(
    (state) => state.builds.current.cantrips
  );

  const addCantrip = (id) => {
    if (cantripPoints > 0) {
      dispatch(action("build/addCantrip", Cantrips[id]));
    }
  };

  const removeCantrip = (id) => {
    dispatch(action("build/removeCantrip", id));
  };

  return (
    <>
      <div className={styles.title}>Cantrips</div>
      <div className={styles.modifier} title="Spell Casting Modifier">
        <BsFillStarFill size="11" /> {modifier.slice(0, 3)}
      </div>
      <div className={styles.introContainer}>
        <div className={styles.introTitle}>Select Cantrips</div>
        <div className={styles.instructions}>
          {`Change your cantrip selection by choosing from the spell list below.
          Cantrips don't use spell slots and can be cast at will.`}
        </div>
      </div>
      <div className={styles.selected}>Selected</div>
      <div className={styles.selectedList}>
        {selectedCantrips.map((cantrip) => (
          <Tooltip key={cantrip.id} cantrip={Cantrips[cantrip.id]}>
            <IKImage
              onClick={() => removeCantrip(cantrip.id)}
              className={styles.cantripImg}
              // loading="lazy"
              path={`cantrip_icons/${Cantrips[cantrip.id].name}.png`}
            />
          </Tooltip>
        ))}
      </div>
      <div className={styles.available}>Available</div>
      <div className={styles.availableList}>
        {cantripsArray.map((id) => (
          <Tooltip key={id} cantrip={Cantrips[id]}>
            <IKImage
              onClick={() =>
                selectedCantripsObject[id] ? removeCantrip(id) : addCantrip(id)
              }
              className={
                selectedCantripsObject[id]
                  ? styles.chosenCantripImg
                  : styles.cantripImg
              }
              // loading="lazy"
              path={`cantrip_icons/${Cantrips[id].name}.png`}
            />
          </Tooltip>
        ))}
      </div>
    </>
  );
}
