//Files
import styles from "./Abilities.module.css";
//Functions/Components
import { Ability } from "./helper";
//Packages

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
      <div className={styles.title}>Abilities</div>
      <div className={styles.points}>{`Ability Points: ${points}`}</div>
      <div className={styles.abilList}>
        <div className={styles.heading}>
          <div className={styles.headLabel}>+2</div>
          <div className={styles.headLabel}>+1</div>
        </div>
        <Ability
          name={"strength"}
          statVal={strength}
          plus_1={plus_1}
          plus_2={plus_2}
          points={points}
          setPoints={setPoints}
        />
        <Ability
          name={"dexterity"}
          statVal={dexterity}
          plus_1={plus_1}
          plus_2={plus_2}
          points={points}
          setPoints={setPoints}
        />
        <Ability
          name={"constitution"}
          statVal={constitution}
          plus_1={plus_1}
          plus_2={plus_2}
          points={points}
          setPoints={setPoints}
        />
        <Ability
          name={"intelligence"}
          statVal={intelligence}
          plus_1={plus_1}
          plus_2={plus_2}
          points={points}
          setPoints={setPoints}
        />
        <Ability
          name={"wisdom"}
          statVal={wisdom}
          plus_1={plus_1}
          plus_2={plus_2}
          points={points}
          setPoints={setPoints}
        />
        <Ability
          name={"charisma"}
          statVal={charisma}
          plus_1={plus_1}
          plus_2={plus_2}
          points={points}
          setPoints={setPoints}
        />
      </div>
    </>
  );
}
