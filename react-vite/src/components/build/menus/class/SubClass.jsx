import { action } from "../../../../redux/build";
import styles from "../../Build.module.css";
import { useSelector, useDispatch } from "react-redux";

export function SubClass() {
  const dispatch = useDispatch();
  const selectedClass = useSelector((state) => state.builds.current.class);
  const buildClasses = useSelector(
    (state) => state.builds.current.build_classes
  );
  const selectedClassInBuild = buildClasses[selectedClass];

  function onClick(e, _class, subClass) {
    e.preventDefault();
    const updatedClass = { ..._class };
    updatedClass.sub_class = subClass;
    dispatch(action("build/setSubClass", updatedClass));
  }

  const allSubClasses = {
    // Level 1
    Cleric: [
      "Knowledge Domain",
      "Life Domain",
      "Light Domain",
      "Nature Domain",
      "Tempest Domain",
      "Trickery Domain",
      "War Domain",
    ],
    Sorcerer: ["Draconic Bloodline", "Storm Sorcery", "Wild Magic"],
    Warlock: ["The Archfey", "The Fiend", "The Great Old One"],
    Paladin: [
      "Oath of Devotion",
      "Oath of the Ancients",
      "Oath of Vengeance",
      "Oathbreaker",
    ],
    // Level 2
    Druid: ["Circle of the Land", "Circle of the Moon", "Circle of the Spores"],
    Wizard: [
      "Abjuration",
      "Conjuration",
      "Divination",
      "Enchantment",
      "Evocation",
      "Illusion",
      "Necromancy",
      "Transmutation",
    ],
    // Level 3
    Fighter: ["Battle Master", "Champion", "Eldritch Knight"],
    Monk: ["Way of Shadow", "Way of the Four Elements", "Way of the Open Hand"],
    Barbarian: ["Berserker", "Wild Magic", "Wildheart"],
    Bard: ["College of Lore", "College of Swords", "College of Valour"],
    Ranger: ["Beast Master", "Gloomstalker", "Hunter"],
    Rogue: ["Arcane Trickster", "Assassin", "Thief"],
  };

  function BarbarianSubClasses(classInBuild) {
    if ((classInBuild.level >= 3) & (classInBuild.sub_class === undefined)) {
      return (
        <div className={styles.subClass}>
          <div className={styles.subTitle}>Choose a Sub Class</div>
          <br />
          <div className={styles.subButtons}>
            <button
              className={styles.button}
              onClick={(e) => onClick(e, classInBuild, "Berserker")}
            >
              <img className={styles.subImg} />
              Berserker
            </button>

            <button
              className={styles.button}
              onClick={(e) => onClick(e, classInBuild, "Wild Magic")}
            >
              <img className={styles.subImg} />
              Wild Magic
            </button>

            <button
              className={styles.button}
              onClick={(e) => onClick(e, classInBuild, "Wildheart")}
            >
              <img className={styles.subImg} />
              Wildheart
            </button>
          </div>
        </div>
      );
    } else if (classInBuild.sub_class != undefined) {
      return (
        <div className={styles.subClass}>
          <div className={styles.subTitle}>Sub Class</div>
          <br />
          <div className={styles.subButtons}>
            <img className={styles.chosenSubImg} />
          </div>
          {classInBuild.sub_class}
          <button onClick={(e) => onClick(e, classInBuild, undefined)}>
            Change
          </button>
        </div>
      );
    } else {
      return "";
    }
  }
  function BardSubClasses(classInBuild) {}
  function ClericSubClasses(classInBuild) {}
  function DruidSubClasses(classInBuild) {}
  function FighterSubClasses(classInBuild) {}
  function MonkSubClasses(classInBuild) {}
  function PaladinSubClasses(classInBuild) {}
  function RangerSubClasses(classInBuild) {}
  function RogueSubClasses(classInBuild) {}
  function SorcererSubClasses(classInBuild) {}
  function WarlockSubClasses(classInBuild) {}
  function WizardSubClasses(classInBuild) {}

  if (selectedClassInBuild != undefined) {
    switch (selectedClassInBuild.name) {
      case "Barbarian": {
        return BarbarianSubClasses(selectedClassInBuild);
      }
      case "Bard": {
        return BardSubClasses(selectedClassInBuild);
      }
      case "Cleric": {
        return ClericSubClasses(selectedClassInBuild);
      }
      case "Druid": {
        return DruidSubClasses(selectedClassInBuild);
      }
      case "Fighter": {
        return FighterSubClasses(selectedClassInBuild);
      }
      case "Monk": {
        return MonkSubClasses(selectedClassInBuild);
      }
      case "Paladin": {
        return PaladinSubClasses(selectedClassInBuild);
      }
      case "Ranger": {
        return RangerSubClasses(selectedClassInBuild);
      }
      case "Rogue": {
        return RogueSubClasses(selectedClassInBuild);
      }
      case "Sorcerer": {
        return SorcererSubClasses(selectedClassInBuild);
      }
      case "Warlock": {
        return WarlockSubClasses(selectedClassInBuild);
      }
      case "Wizard": {
        return WizardSubClasses(selectedClassInBuild);
      }
    }
  } else {
    return "";
  }
}
