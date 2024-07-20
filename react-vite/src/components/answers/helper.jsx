import styles from "./Answers.module.css";

export function CharacterFAQ() {
  return (
    <div className={styles.body}>
      <div className={styles.titleFAQ}>Characters</div>
      <div className={styles.scroll}>
        <div className={styles.text}>
          <div className={styles.question}>
            {"- 'Origin Character' vs 'Custom Character'?"}
          </div>
          <p className={styles.answer}>{"Part of what makes Baldur's Gate 3's story so compelling is its vibrant cast of unique characters. \
          You have the option to play as one of 7 Origin Characters in the game, each with their own predetermined race, background, and appearance. \
          Alternatively, if you'd like to carve your own path through the Sword Coast, Custom Characters allow you the freedom to chose any combination of the aforementioned traits."}</p>
          <div className={styles.question}>
            {"- So do Backgrounds even matter?"}
          </div>
          <p className={styles.answer}>{"Absolutely! Your background will have a great impact on your experiences in Faerûn, like \
          dialogue options and inspiration points! (re-roll attempts on skill checks)"}</p>
        </div>
      </div>
    </div>
  );
}

export function AbilitiesFAQ() {
  return (
    <div className={styles.body}>
      <div className={styles.titleFAQ}>Abilities</div>
      <div className={styles.scroll}>
        <div className={styles.text}>
          <div className={styles.question}>
            {"- What are all these Abilities for?"}
          </div>
          <p className={styles.answer}>{"Don't worry about it"}</p>
        </div>
      </div>
    </div>
  );
}

export function ClassesFAQ() {
  return (
    <div className={styles.body}>
      <div className={styles.titleFAQ}>Classes</div>
      <div className={styles.scroll}>
        <div className={styles.text}>
          <div className={styles.question}>
            {"- What does 'Class' even mean?"}
          </div>
          <p className={styles.answer}>{"You wouldn't understand"}</p>
        </div>
      </div>
    </div>
  );
}

export function EquipmentFAQ() {
  return (
    <div className={styles.body}>
      <div className={styles.titleFAQ}>Equipment</div>
      <div className={styles.scroll}>
        <div className={styles.text}>
          <div className={styles.question}>
            {"- Why is there barely any equipment?"}
          </div>
          <p className={styles.answer}>{"Because I'm lazy"}</p>
        </div>
      </div>
    </div>
  );
}

export function FeaturesFAQ() {
  return (
    <div className={styles.body}>
      <div className={styles.titleFAQ}>Features</div>
      <div className={styles.scroll}>
        <div className={styles.text}>
          <div className={styles.question}>
            {"- Why are all the cool features unavailable?"}
          </div>
          <p className={styles.answer}>{"You'll get over it"}</p>
        </div>
      </div>
    </div>
  );
}
