//Files
import styles from "./Abilities.module.css";
import { Images } from "../../../images";
//Functions/Components
import {
  action,
  setBonus,
  clearBonus,
} from "../../../../redux/build";
import { useModal } from "../../../../context/Modal";
import ErrorModal from "../../../modals/error/ErrorModal";
//Packages
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { NavLink } from "react-router-dom";

export function Ability({
  name,
  abilityVal,
  plus_1,
  plus_2,
  points,
  setPoints,
}) {
  const dispatch = useDispatch();
  const { setModalContent } = useModal()
  const [clicks, setClicks] = useState(abilityVal - 8);
  const titleCaseStat = name[0].toUpperCase() + name.slice(1);
  const bonusOne = plus_1 === name;
  const bonusTwo = plus_2 === name;

  useEffect(() => {
    bonusTwo
      ? setClicks(abilityVal - 10)
      : bonusOne
      ? setClicks(abilityVal - 9)
      : setClicks(abilityVal - 8);
  }, [abilityVal]);

  const clickLower = (e, type) => {
    e.preventDefault();
    setPoints(clicks < 6 ? points + 1 : points + 2);
    dispatch(action("build/lowerAbility", type));
  };

  const clickRaise = (e, type) => {
    e.preventDefault();
    if(clicks < 5){
      setPoints(points - 1)
      dispatch(action("build/raiseAbility", type));
    } else if (clicks >= 5 & points > 1){
      setPoints(points - 2)
      dispatch(action("build/raiseAbility", type));
    } else {
      setModalContent(
        <ErrorModal
          errors={{
            points: ["Increasing this ability requires 2 points."],
          }}
        />
      );
    }
  };

  const clickPlusTwo = (e, ability) => {
    e.preventDefault();
    plus_2 === ability
      ? dispatch(clearBonus("plus_2", ability))
      : plus_1 != ability
      ? dispatch(setBonus("plus_2", ability))
      : null;
  };

  const clickPlusOne = (e, ability) => {
    e.preventDefault();
    plus_1 === ability
      ? dispatch(clearBonus("plus_1", ability))
      : plus_2 != ability
      ? dispatch(setBonus("plus_1", ability))
      : null;
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
