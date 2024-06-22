//Files
import styles from "./Origin.module.css";
import { Images } from "../../../../images";
//Functions/Components
import { setOrigin, setRace } from "../../../../../redux/build";
//Packages
import { useDispatch } from "react-redux";

export default function OriginComponent({ currentBuild }) {
  const dispatch = useDispatch();
  const descriptions = {
    Astarion:
      "After two hundred years of serving a cruel master, the vampire spawn Astarion is finally free - free to walk in the sun, free to chase power, and free to take revenge.",
    Laezel:
      "Lae'zel was raised ready for a life amongst the stars, mercilessly conquering the cosmos as a githyanki soldier. Grounded, she must deal with a world she doesn't understand, and find a way to server her people in a plane that despises her militant kin.",
    Gale: "Gale's wizarding prowess once earned him the love of Mystra, the goddess of magic, until his ambition led him to the brink of catastrophe...",
    Shadowheart:
      "Shadowheart willingly undertook a ritual to remove her memories in order to protect the secrets of her fellow Shar worshippers. Loss and pain are sacred to her, but her faith is now being tested like never before.",
    Wyll: "Known as 'The Blade of Frontiers', Wyll uses his magic to fell the monsters and devils menacing the Sword Coast. In a moment of desperation, he accepted an offer of greater power, forcing him into an infernal game he is struggling to play.",
    Karlach:
      "Karlach has escaped ten years of service in the Hells with nothing but the axe on her back - and the infernal engine blazing furiously where her heart used to be.",
    DarkUrge:
      "You remember nothing but a path paved in blood. Unimaginable cruelty whispers to you from within. Can you escape it? Would you even want to?",
    Custom: "Choose your own origins and destiny!",
  };

  const onClick = (e, origin) => {
    e.preventDefault();

    dispatch(setOrigin(origin));

    switch (origin) {
      case "Astarion":
        return dispatch(setRace("Elf"));
      case "Laezel":
        return dispatch(setRace("Githyanki"));
      case "Gale":
        return dispatch(setRace("Human"));
      case "Shadowheart":
        return dispatch(setRace("Halfelf"));
      case "Wyll":
        return dispatch(setRace("Human"));
      case "Karlach":
        return dispatch(setRace("Tiefling"));
      case "DarkUrge":
        return dispatch(setRace("Dragonborn"));
    }
  };

  return (
    <>
      <div className={styles.title}>Origin</div>
      <div className={styles.characterList}>
        <div className={styles.character}>
          <img
            onClick={(e) => onClick(e, "Astarion")}
            className={styles.charImg}
            src={Images.characters["Astarion"]}
          />
          Astarion
        </div>
        <div className={styles.character}>
          <img
            onClick={(e) => onClick(e, "Laezel")}
            className={styles.charImg}
            src={Images.characters["Laezel"]}
          />
          Lae'zel
        </div>
        <div className={styles.character}>
          <img
            onClick={(e) => onClick(e, "Gale")}
            className={styles.charImg}
            src={Images.characters["Gale"]}
          />
          Gale
        </div>
        <div className={styles.character}>
          <img
            onClick={(e) => onClick(e, "Shadowheart")}
            className={styles.charImg}
            src={Images.characters["Shadowheart"]}
          />
          Shadowheart
        </div>
        <div className={styles.character}>
          <img
            onClick={(e) => onClick(e, "Wyll")}
            className={styles.charImg}
            src={Images.characters["Wyll"]}
          />
          Wyll
        </div>
        <div className={styles.character}>
          <img
            onClick={(e) => onClick(e, "Karlach")}
            className={styles.charImg}
            src={Images.characters["Karlach"]}
          />
          Karlach
        </div>
        <div className={styles.character}>
          <img
            onClick={(e) => onClick(e, "DarkUrge")}
            className={styles.charImg}
            src={Images.characters["DarkUrge"]}
          />
          The Dark Urge
        </div>
        <div className={styles.character}>
          <img
            onClick={(e) => onClick(e, "Custom")}
            className={styles.charImg}
            src={Images.characters["Custom"]}
          />
          Custom
        </div>
      </div>
      <div className={styles.select}>
        <div className={styles.name}>{currentBuild?.origin}</div>
        <div className={styles.description}>
          {descriptions[currentBuild?.origin]}
        </div>
      </div>
    </>
  );
}
