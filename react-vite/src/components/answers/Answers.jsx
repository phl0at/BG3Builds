import styles from "./Answers.module.css";
import {
  CharacterFAQ,
  AbilitiesFAQ,
  ClassesFAQ,
  EquipmentFAQ,
  FeaturesFAQ,
} from "./helper";
import { NavLink } from "react-router-dom";
import { CiBoxList, CiSquarePlus } from "react-icons/ci";

export default function AnswersComponent({ category }) {
  return (
    <main className={styles.main}>
      <div className={styles.navButtons}>
        <NavLink title="Create a Build" className={styles.link} to="/create">
          <CiSquarePlus size="45" />
        </NavLink>
        <NavLink title="Browse Builds" className={styles.squaredLink} to="/browse">
          <CiBoxList size="28" />
        </NavLink>
      </div>
      {category === "Characters" && <CharacterFAQ />}
      {category === "Abilities" && <AbilitiesFAQ />}
      {category === "Classes" && <ClassesFAQ />}
      {category === "Equipment" && <EquipmentFAQ />}
      {category === "Features" && <FeaturesFAQ />}
    </main>
  );
}
