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
  const titleCaseStat = name[0].toUpperCase() + name.slice(1);
  const dispatch = useDispatch();

  const clickLower = (e, type, val) => {
    e.preventDefault();
    if (val > 8 && points < 27) {
      dispatch(lowerAbility(type));
      val < 14 ? setPoints(points + 1) : setPoints(points + 2);
    }
  };
  const clickRaise = (e, type, val) => {
    e.preventDefault();
    if (val < 15 && points > 0) {
      dispatch(raiseAbility(type));
      val < 13 ? setPoints(points - 1) : setPoints(points - 2);
    }
  };

  const clickPlusTwo = (e, ability) => {
    e.preventDefault();
    if (plus_2 === ability) {
      dispatch(clearBonus("plus_2"));
    } else if (plus_1 != ability) {
      dispatch(setBonus("plus_2", ability));
    }
  };

  const clickPlusOne = (e, ability) => {
    e.preventDefault();
    if (plus_1 === ability) {
      dispatch(clearBonus("plus_1"));
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
            disabled={statVal < 9}
            className={statVal < 9 ? styles.disabled : styles.enabled}
            onClick={(e) => clickLower(e, name, statVal)}
          >
            <CiCircleMinus size="35" />
          </button>
          <div className={styles.num}>
            {plus_1 === name
              ? statVal + 1
              : plus_2 === name
              ? statVal + 2
              : statVal}
          </div>
          <button
            disabled={statVal > 14}
            onClick={(e) => clickRaise(e, name, statVal)}
            className={statVal > 14 || points < 1 ? styles.disabled : styles.enabled}
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
