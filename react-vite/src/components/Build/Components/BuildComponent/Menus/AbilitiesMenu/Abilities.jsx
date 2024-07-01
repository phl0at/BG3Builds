//Files
import styles from "./Abilities.module.css";
//Functions/Components
import { Ability } from "./helper";
import OpenModalButton from "../../../../../Modal";
import ResetAbilitiesModal from "./ResetModal";
//Packages
import { CiUndo } from "react-icons/ci";

export default function AbilitiesComponent({
  points,
  setPoints,
  currentBuild,
}) {
  const {
    strength,
    dexterity,
    constitution,
    intelligence,
    wisdom,
    charisma,
    plus_1,
    plus_2,
  } = currentBuild;

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
        <Ability
          name={"strength"}
          abilityVal={strength}
          plus_1={plus_1}
          plus_2={plus_2}
          points={points}
          setPoints={setPoints}
        />
        <Ability
          name={"dexterity"}
          abilityVal={dexterity}
          plus_1={plus_1}
          plus_2={plus_2}
          points={points}
          setPoints={setPoints}
        />
        <Ability
          name={"constitution"}
          abilityVal={constitution}
          plus_1={plus_1}
          plus_2={plus_2}
          points={points}
          setPoints={setPoints}
        />
        <Ability
          name={"intelligence"}
          abilityVal={intelligence}
          plus_1={plus_1}
          plus_2={plus_2}
          points={points}
          setPoints={setPoints}
        />
        <Ability
          name={"wisdom"}
          abilityVal={wisdom}
          plus_1={plus_1}
          plus_2={plus_2}
          points={points}
          setPoints={setPoints}
        />
        <Ability
          name={"charisma"}
          abilityVal={charisma}
          plus_1={plus_1}
          plus_2={plus_2}
          points={points}
          setPoints={setPoints}
        />
      </div>
    </>
  );
}
