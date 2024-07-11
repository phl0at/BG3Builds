//Files
import styles from "./Abilities.module.css";
//Functions/Components
import { Ability } from "./helper";
import OpenModalButton from "../../../Modal";
import ResetAbilitiesModal from "./ResetModal";
//Packages
import { CiUndo } from "react-icons/ci";

export default function AbilitiesComponent({
  points,
  setPoints,
  currentBuild,
}) {
  const { plus_1, plus_2 } = currentBuild;

  const abilities = [
    "strength",
    "dexterity",
    "constitution",
    "intelligence",
    "wisdom",
    "charisma",
  ];

  return (
    <>
      {points < 27 ? (
        <OpenModalButton
          className={styles.reset}
          buttonText={<CiUndo size="40" />}
          modalComponent={<ResetAbilitiesModal setPoints={setPoints} />}
        />
      ) : null}
      <div className={styles.title}>Abilities</div>
      <div className={styles.points}>{`Ability Points: ${points}`}</div>
      <div className={styles.abilityList}>
        <div className={styles.heading}>
          <div className={!plus_2 ? styles.red : ""}>+2</div>
          <div className={!plus_1 ? styles.red : ""}>+1</div>
        </div>
        {abilities.map((ability) => {
          return (
            <Ability
              name={ability}
              abilityVal={currentBuild[ability]}
              plus_1={plus_1}
              plus_2={plus_2}
              points={points}
              setPoints={setPoints}
            />
          );
        })}
      </div>
    </>
  );
}
