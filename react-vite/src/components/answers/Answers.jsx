import styles from "./Answers.module.css";
import { CharacterFAQ, AbilitiesFAQ, ClassesFAQ, EquipmentFAQ } from "./helper";

export default function AnswersComponent({ category }) {
  return (
    <main className={styles.main}>
      {category === "Characters" && <CharacterFAQ />}
      {category === "Abilities" && <AbilitiesFAQ />}
      {category === "Classes" && <ClassesFAQ />}
      {category === "Equipment" && <EquipmentFAQ />}
    </main>
  );
}
