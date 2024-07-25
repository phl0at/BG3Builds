//Files
import styles from "./Abilities.module.css";
import { Images } from "../../../images";
//Functions/Components
import { action, setBonus, clearBonus } from "../../../../redux/build";
import { useModal } from "../../../../context/Modal";
import ErrorModal from "../../../modals/error/ErrorModal";
//Packages
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

export function Ability({
  name,
  abilityVal,
  plus_1,
  plus_2,
  points,
  setPoints,
}) {
  const dispatch = useDispatch();
  const { setModalContent } = useModal();
  const [clicks, setClicks] = useState(abilityVal - 8);
  const titleCaseStat = name[0].toUpperCase() + name.slice(1);

  useEffect(() => {
    // An ability can only be clicked/increased 7 times.
    // This will track the number of increases by setting the # of clicks
    // to the ability's current value, minus its base value.
    // The base value changes depending on whether a +1 or +2 bonus is applied to the ability.
    if (plus_2 === name) {
      setClicks(abilityVal - 10);
    } else if (plus_1 === name) {
      setClicks(abilityVal - 9);
    } else {
      setClicks(abilityVal - 8);
    }
  }, [abilityVal]);


  // The first 5 increases to an ability cost 1 point and the last two cost 2 points.
  // These two functions ensure the correct amount of ability
  // points are added or subtracted based on how many times
  // an ability has been clicked/increased.
  const clickLower = (e, type) => {
    e.preventDefault();
    if (clicks < 6) {
      setPoints(points + 1);
      dispatch(action("build/lowerAbility", type));
    } else {
      setPoints(points + 2);
      dispatch(action("build/lowerAbility", type));
    }
  };

  const clickRaise = (e, type) => {
    e.preventDefault();
    if (clicks < 5) {
      setPoints(points - 1);
      dispatch(action("build/raiseAbility", type));
    } else if ((clicks >= 5) & (points > 1)) {
      setPoints(points - 2);
      dispatch(action("build/raiseAbility", type));
    } else {
      // Throw an error if the user tries increasing an ability
      // that's been increased 5 times already.
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
        <img className={styles.statImg} src={Images.abilities[titleCaseStat]} />
        <div className={styles.name}>{titleCaseStat}</div>
      </div>
      <div className={styles.values}>
        <div className={styles.valueContainer}>
          <button
            disabled={clicks < 1 || points > 26}
            className={
              clicks < 1 || points > 26 ? styles.disabled : styles.enabled
            }
            onClick={(e) => clickLower(e, name)}
          >
            <CiCircleMinus size="35" />
          </button>
          <div className={styles.num}>{abilityVal}</div>
          <button
            disabled={clicks > 6 || points < 1}
            className={
              clicks > 6 || points < 1 ? styles.disabled : styles.enabled
            }
            onClick={(e) => clickRaise(e, name)}
          >
            <CiCirclePlus size="35" />
          </button>
        </div>
        <div className={styles.bonuses}>
          <button
            onClick={(e) => clickPlusTwo(e, name)}
            className={plus_2 == name ? styles.plusSelected : styles.plus}
          ></button>
          <button
            onClick={(e) => clickPlusOne(e, name)}
            className={plus_1 == name ? styles.plusSelected : styles.plus}
          ></button>
        </div>
      </div>
    </div>
  );
}
