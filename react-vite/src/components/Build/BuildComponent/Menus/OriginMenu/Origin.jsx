//Files
import styles from "./Origin.module.css";
import { Images } from "../../../../images";
//Functions/Components
import { setBackground, setOrigin, setRace } from "../../../../../redux/build";
//Packages
import { useDispatch, useSelector } from "react-redux";

export default function OriginComponent({ currentBuild }) {
  const Origins = useSelector((state) => state.static.origins);
  const dispatch = useDispatch();

  const onClick = (e, origin) => {
    e.preventDefault();

    dispatch(setOrigin(origin, Origins[origin].name));

    switch (origin) {
      case 1:
        return dispatch(setRace(1)), dispatch(setBackground(2));
      case 2:
        return dispatch(setRace(5)), dispatch(setBackground(10));
      case 3:
        return dispatch(setRace(4)), dispatch(setBackground(9));
      case 4:
        return dispatch(setRace(7)), dispatch(setBackground(1));
      case 5:
        return dispatch(setRace(4)), dispatch(setBackground(5));
      case 6:
        return dispatch(setRace(2)), dispatch(setBackground(8));
      case 7:
        return dispatch(setRace(10)), dispatch(setBackground(12));
    }
  };

  return (
    <>
      {Origins && (
        <>
          <div className={styles.title}>Origin</div>
          <div className={styles.characterList}>
            <div className={styles.character}>
              <img
                onClick={(e) => onClick(e, 8)}
                className={
                  currentBuild?.origin === 8
                    ? styles.selected_charImg
                    : styles.charImg
                }
                src={Images.characters["Custom"]}
              />
              Custom
            </div>
            <div className={styles.character}>
              <img
                onClick={(e) => onClick(e, 1)}
                className={
                  currentBuild?.origin === 1
                    ? styles.selected_charImg
                    : styles.charImg
                }
                src={Images.characters["Astarion"]}
              />
              Astarion
            </div>
            <div className={styles.character}>
              <img
                onClick={(e) => onClick(e, 2)}
                className={
                  currentBuild?.origin === 2
                    ? styles.selected_charImg
                    : styles.charImg
                }
                src={Images.characters["Laezel"]}
              />
              Lae'zel
            </div>
            <div className={styles.character}>
              <img
                onClick={(e) => onClick(e, 3)}
                className={
                  currentBuild?.origin === 3
                    ? styles.selected_charImg
                    : styles.charImg
                }
                src={Images.characters["Gale"]}
              />
              Gale
            </div>
            <div className={styles.character}>
              <img
                onClick={(e) => onClick(e, 4)}
                className={
                  currentBuild?.origin === 4
                    ? styles.selected_charImg
                    : styles.charImg
                }
                src={Images.characters["Shadowheart"]}
              />
              Shadowheart
            </div>
            <div className={styles.character}>
              <img
                onClick={(e) => onClick(e, 5)}
                className={
                  currentBuild?.origin === 5
                    ? styles.selected_charImg
                    : styles.charImg
                }
                src={Images.characters["Wyll"]}
              />
              Wyll
            </div>
            <div className={styles.character}>
              <img
                onClick={(e) => onClick(e, 6)}
                className={
                  currentBuild?.origin === 6
                    ? styles.selected_charImg
                    : styles.charImg
                }
                src={Images.characters["Karlach"]}
              />
              Karlach
            </div>
            <div className={styles.character}>
              <img
                onClick={(e) => onClick(e, 7)}
                className={
                  currentBuild?.origin === 7
                    ? styles.selected_charImg
                    : styles.charImg
                }
                src={Images.characters["DarkUrge"]}
              />
              The Dark Urge
            </div>
          </div>
          <div className={styles.select}>
            <div className={styles.name}>
              {Origins[currentBuild?.origin].name}
            </div>
            <div className={styles.description}>
              {Origins[currentBuild?.origin].description}
            </div>
          </div>
        </>
      )}
    </>
  );
}
