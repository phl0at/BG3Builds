//Files
import styles from "./Abilities.module.css";
import { Images } from "../../../../images";
//Functions/Components
import {
  lowerAbility,
  raiseAbility,
  setBonus,
  clearBonus,
} from "../../../../../redux/build";

//Packages
import { useDispatch } from "react-redux";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

export function Ability({ name, statVal, plus_1, plus_2, points, setPoints }) {
  const dispatch = useDispatch();
  const titleCaseStat = name[0].toUpperCase() + name.slice(1);
  const bonusOne = plus_1 === name;
  const bonusTwo = plus_2 === name;

  const minusDisabled = () => {
    let disabled = false;
    if (bonusOne & (statVal === 9)) {
      disabled = true;
    } else if (bonusTwo & (statVal === 10)) {
      disabled = true;
    } else if (statVal === 8) {
      disabled = true;
    }
    return disabled;
  };

  const plusDisabled = () => {
    let disabled = true;
    if (bonusOne & (statVal < 16)) {
      disabled = false;
    } else if (bonusTwo & (statVal < 17)) {
      disabled = false;
    } else if (statVal < 15) {
      disabled = false;
    } else if ((statVal > 12) & (points < 2)) {
      disabled = true;
    }
    return disabled;
  };
  const clickLower = (e, type, val) => {
    e.preventDefault();
    if ((val < 14) & !bonusTwo & !bonusOne) {
      setPoints(points + 1);
      return dispatch(lowerAbility(type));
    } else if ((val > 13) & !bonusTwo & !bonusOne) {
      setPoints(points + 2);
      return dispatch(lowerAbility(type));
    } else if ((val < 15) & bonusOne) {
      setPoints(points + 1);
      return dispatch(lowerAbility(type));
    } else if ((val > 14) & bonusOne) {
      setPoints(points + 2);
      return dispatch(lowerAbility(type));
    } else if ((val < 16) & bonusTwo) {
      setPoints(points + 1);
      return dispatch(lowerAbility(type));
    } else if ((val > 15) & bonusTwo) {
      setPoints(points + 2);
      return dispatch(lowerAbility(type));
    }
  };
  
  const clickRaise = (e, type, val) => {
    e.preventDefault();
    if ((val < 13) & !bonusTwo & !bonusOne) {
      setPoints(points - 1);
      return dispatch(raiseAbility(type));
    } else if ((val > 12) & !bonusTwo & !bonusOne) {
      setPoints(points - 2);
      return dispatch(raiseAbility(type));
    } else if ((val < 15) & bonusTwo) {
      setPoints(points - 1);
      return dispatch(raiseAbility(type));
    } else if ((val > 14) & bonusTwo) {
      setPoints(points - 2);
      return dispatch(raiseAbility(type));
    } else if ((val < 14) & bonusOne) {
      setPoints(points - 1);
      return dispatch(raiseAbility(type));
    } else if ((val > 13) & bonusOne) {
      setPoints(points - 2);
      return dispatch(raiseAbility(type));
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
            disabled={minusDisabled() || points > 26}
            className={
              minusDisabled() || points > 26 ? styles.disabled : styles.enabled
            }
            onClick={(e) => clickLower(e, name, statVal)}
          >
            <CiCircleMinus size="35" />
          </button>
          <div className={styles.num}>{statVal}</div>
          <button
            disabled={plusDisabled() || points < 1}
            className={
              plusDisabled() || points < 1 ? styles.disabled : styles.enabled
            }
            onClick={(e) => clickRaise(e, name, statVal)}
          >
            <CiCirclePlus size="35" />
          </button>
        </div>
        <div className={styles.bonuses}>
          <button
            onClick={(e) => clickPlusTwo(e, name)}
            className={plus_2 === name ? styles.plusSelected : styles.plus}
          ></button>
          <button
            onClick={(e) => clickPlusOne(e, name)}
            className={plus_1 === name ? styles.plusSelected : styles.plus}
          ></button>
        </div>
      </div>
    </div>
  );
}
