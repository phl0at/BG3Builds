//Files
import styles from "./Abilities.module.css";
//Functions/Components
import { Ability } from "./helper";
import OpenModalButton from "../../../modals";
import ResetAbilitiesModal from "./ResetModal";
//Packages
import { CiUndo } from "react-icons/ci";
import { useSelector } from "react-redux";

export default function AbilitiesComponent() {
  const points = useSelector((state) => state.builds.current.points);
  const plus_1 = useSelector((state) => state.builds.current.plus_1);
  const plus_2 = useSelector((state) => state.builds.current.plus_2);

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
      <div className={styles.header}>
        <div className={styles.reset}>
          {points < 27 ? (
            <OpenModalButton
              buttonText={<CiUndo size="40" />}
              modalComponent={<ResetAbilitiesModal />}
            />
          ) : null}
        </div>
        <div className={styles.title}>Abilities</div>
      </div>
      <div className={styles.points}>{`Ability Points: ${points}`}</div>
      <div className={styles.abilityList}>
        <div className={styles.heading}>
          <div className={!plus_2 ? styles.red : ""}>+2</div>
          <div className={!plus_1 ? styles.red : ""}>+1</div>
        </div>
        {abilities.map((ability) => {
          return <Ability key={ability} ability={ability} />;
        })}
      </div>
    </>
  );
}
