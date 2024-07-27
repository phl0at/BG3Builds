//Files
import styles from "./Origin.module.css";
import { Images } from "../../../images";
//Functions/Components
import { action, setOrigin } from "../../../../redux/build";
//Packages
import { useDispatch, useSelector } from "react-redux";

export default function OriginComponent() {
  const dispatch = useDispatch();
  const currentOrigin = useSelector(state=>state.builds.current.origin)
  const Origins = useSelector((state) => state.static.origins);

  const onClick = (e, origin) => {
    e.preventDefault();

    dispatch(setOrigin(origin, Origins[origin].name));

    switch (origin) {
      case 1:
        return (
          dispatch(action("build/setRace", 1)),
          dispatch(action("build/setBackground", 2))
        );
      case 2:
        return (
          dispatch(action("build/setRace", 5)),
          dispatch(action("build/setBackground", 10))
        );
      case 3:
        return (
          dispatch(action("build/setRace", 4)),
          dispatch(action("build/setBackground", 9))
        );
      case 4:
        return (
          dispatch(action("build/setRace", 7)),
          dispatch(action("build/setBackground", 1))
        );
      case 5:
        return (
          dispatch(action("build/setRace", 4)),
          dispatch(action("build/setBackground", 5))
        );
      case 6:
        return (
          dispatch(action("build/setRace", 2)),
          dispatch(action("build/setBackground", 8))
        );
      case 7:
        return (
          dispatch(action("build/setRace", 10)),
          dispatch(action("build/setBackground", 12))
        );
    }
  };

  return (
    <>
      {
        <>
          <div className={styles.title}>Origin</div>
          <div className={styles.characterList}>
            <div className={styles.character}>
              <img
                onClick={(e) => onClick(e, 8)}
                className={
                  currentOrigin === 8
                    ? styles.selected_charImg
                    : styles.charImg
                }
                src={Images.characters["Custom"]}
              />
              {"Custom"}
            </div>
            <div className={styles.character}>
              <img
                onClick={(e) => onClick(e, 1)}
                className={
                  currentOrigin === 1
                    ? styles.selected_charImg
                    : styles.charImg
                }
                src={Images.characters["Astarion"]}
              />
              {"Astarion"}
            </div>
            <div className={styles.character}>
              <img
                onClick={(e) => onClick(e, 2)}
                className={
                  currentOrigin === 2
                    ? styles.selected_charImg
                    : styles.charImg
                }
                src={Images.characters["Laezel"]}
              />
              {"Lae'zel"}
            </div>
            <div className={styles.character}>
              <img
                onClick={(e) => onClick(e, 3)}
                className={
                  currentOrigin === 3
                    ? styles.selected_charImg
                    : styles.charImg
                }
                src={Images.characters["Gale"]}
              />
              {"Gale"}
            </div>
            <div className={styles.character}>
              <img
                onClick={(e) => onClick(e, 4)}
                className={
                  currentOrigin === 4
                    ? styles.selected_charImg
                    : styles.charImg
                }
                src={Images.characters["Shadowheart"]}
              />
              {"Shadowheart"}
            </div>
            <div className={styles.character}>
              <img
                onClick={(e) => onClick(e, 5)}
                className={
                  currentOrigin === 5
                    ? styles.selected_charImg
                    : styles.charImg
                }
                src={Images.characters["Wyll"]}
              />
              {"Wyll"}
            </div>
            <div className={styles.character}>
              <img
                onClick={(e) => onClick(e, 6)}
                className={
                  currentOrigin === 6
                    ? styles.selected_charImg
                    : styles.charImg
                }
                src={Images.characters["Karlach"]}
              />
              {"Karlach"}
            </div>
            <div className={styles.character}>
              <img
                onClick={(e) => onClick(e, 7)}
                className={
                  currentOrigin === 7
                    ? styles.selected_charImg
                    : styles.charImg
                }
                src={Images.characters["DarkUrge"]}
              />
              {"The Dark Urge"}
            </div>
          </div>
          <div className={styles.select}>
            {Origins[currentOrigin] && (
              <>
                <div className={styles.name}>
                  {Origins[currentOrigin].name}
                </div>
                <div className={styles.description}>
                  {Origins[currentOrigin].description}
                </div>
              </>
            )}
          </div>
        </>
      }
    </>
  );
}
