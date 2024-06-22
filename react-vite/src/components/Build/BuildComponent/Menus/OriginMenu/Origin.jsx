import styles from "./Origin.module.css";
import { Images } from "../../../../images";

export default function OriginComponent() {
  return (
    <>
      <div className={styles.title}>Origin</div>
      <div className={styles.select}>
        <img className={styles.charImg} src={Images.characters["Custom"]} />
        Select a character
        <div className={styles.description}>Placeholder Description</div>
      </div>
      <div className={styles.characterList}>
        <div className={styles.character}>
          <img className={styles.charImg} src={Images.characters["Astarion"]} />
          Astarion
        </div>
        <div className={styles.character}>
          <img className={styles.charImg} src={Images.characters["Laezel"]} />
          Lae'zel
        </div>
        <div className={styles.character}>
          <img className={styles.charImg} src={Images.characters["Gale"]} />
          Gale
        </div>
        <div className={styles.character}>
          <img
            className={styles.charImg}
            src={Images.characters["Shadowheart"]}
          />
          Shadowheart
        </div>
        <div className={styles.character}>
          <img className={styles.charImg} src={Images.characters["Wyll"]} />
          Wyll
        </div>
        <div className={styles.character}>
          <img className={styles.charImg} src={Images.characters["Karlach"]} />
          Karlach
        </div>
        <div className={styles.character}>
          <img className={styles.charImg} src={Images.characters["DarkUrge"]} />
          The Dark Urge
        </div>
        <div className={styles.character}>
          <img className={styles.charImg} src={Images.characters["Custom"]} />
          Custom
        </div>
      </div>
    </>
  );
}
