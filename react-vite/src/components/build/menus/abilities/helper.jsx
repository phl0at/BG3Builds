//Files
import styles from "./Abilities.module.css";
//Functions/Components
import { action, setBonus, clearBonus } from "../../../../redux/build";
import { useModal } from "../../../../context/Modal";
import ErrorModal from "../../../modals/error/ErrorModal";
//Packages
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { IKImage } from "imagekitio-react";

const urlEndpoint = "https://ik.imagekit.io/phl0at/images/stat_icons/";

export function Ability({ ability }) {
  const dispatch = useDispatch();
  const { setModalContent } = useModal();
  const currentAbilityValue = useSelector(
    (state) => state.builds.current[ability]
  );
  const points = useSelector((state) => state.builds.current.points);
  const plus_1 = useSelector((state) => state.builds.current.plus_1);
  const plus_2 = useSelector((state) => state.builds.current.plus_2);
  const [clicks, setClicks] = useState(currentAbilityValue - 8);
  const titleCaseStat = ability[0].toUpperCase() + ability.slice(1);

  // An ability can only be clicked/increased 7 times.
  // This will track the number of increases by setting the # of clicks
  // to the ability's current value, minus its base value.
  // The base value changes depending on whether a +1 or +2 bonus is applied to the ability.
  useEffect(() => {
    if (plus_2 === ability) {
      setClicks(currentAbilityValue - 10);
    } else if (plus_1 === ability) {
      setClicks(currentAbilityValue - 9);
    } else {
      setClicks(currentAbilityValue - 8);
    }
  }, [currentAbilityValue]);

  // The first 5 increases to an ability cost 1 point and the last two cost 2 points.
  // These two functions ensure the correct amount of ability
  // points are added or subtracted based on how many times
  // an ability has been clicked/increased.
  const clickLower = (e, type) => {
    e.preventDefault();
    if (clicks < 6) {
      dispatch(action("build/raisePoints", 1));
      dispatch(action("build/lowerAbility", type));
    } else {
      dispatch(action("build/raisePoints", 2));
      dispatch(action("build/lowerAbility", type));
    }
  };

  const clickRaise = (e, type) => {
    e.preventDefault();
    if (clicks < 5) {
      dispatch(action("build/lowerPoints", 1));
      dispatch(action("build/raiseAbility", type));
    } else if ((clicks >= 5) & (points > 1)) {
      dispatch(action("build/lowerPoints", 2));
      dispatch(action("build/raiseAbility", type));
    } else {
      // Throw an error if the user tries increasing an ability
      // that's been increased 5 times but only 1 point remains.
      setModalContent(
        <ErrorModal
          errors={{
            FAQ: ["Increasing this ability requires 2 points"],
          }}
        />
      );
    }
  };

  // A user cannot set the +1 and +2 bonuses to the same ability.
  // These functions will only set a bonus on an ability that does not already
  // have a bonus applied to it.
  const clickPlusTwo = (e, ability) => {
    e.preventDefault();
    if (plus_2 === ability) {
      dispatch(clearBonus("plus_2", ability));
    } else if (plus_1 != ability) {
      dispatch(setBonus("plus_2", ability));
    }
  };

  const clickPlusOne = (e, ability) => {
    e.preventDefault();
    if (plus_1 === ability) {
      dispatch(clearBonus("plus_1", ability));
    } else if (plus_2 != ability) {
      dispatch(setBonus("plus_1", ability));
    }
  };

  return (
    <div className={styles.stat}>
      <div className={styles.label}>
        <IKImage
          loading="lazy"
          className={styles.statImg}
          urlEndpoint={urlEndpoint}
          path={`${titleCaseStat}.png`}
        />
        <div className={styles.name}>{titleCaseStat}</div>
      </div>
      <div className={styles.values}>
        <div className={styles.valueContainer}>
          <button
            disabled={clicks < 1 || points > 26}
            className={
              clicks < 1 || points > 26 ? styles.disabled : styles.enabled
            }
            onClick={(e) => clickLower(e, ability)}
          >
            <CiCircleMinus size="35" />
          </button>
          <div className={styles.num}>{currentAbilityValue}</div>
          <button
            disabled={clicks > 6 || points < 1}
            className={
              clicks > 6 || points < 1 ? styles.disabled : styles.enabled
            }
            onClick={(e) => clickRaise(e, ability)}
          >
            <CiCirclePlus size="35" />
          </button>
        </div>
        <div className={styles.bonuses}>
          <button
            onClick={(e) => clickPlusTwo(e, ability)}
            className={plus_2 === ability ? styles.plusSelected : styles.plus}
          ></button>
          <button
            onClick={(e) => clickPlusOne(e, ability)}
            className={plus_1 === ability ? styles.plusSelected : styles.plus}
          ></button>
        </div>
      </div>
    </div>
  );
}
