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
          <p className={styles.answer}>
            {
              "Part of what makes Baldur's Gate 3's story so compelling is its vibrant cast of unique characters. \
          You have the option to play as one of 7 Origin Characters in the game, each with a predetermined race, background, and appearance. \
          Alternatively, if you'd like to carve your own path through the Sword Coast, Custom Characters allow you the freedom to chose any combination of the aforementioned traits."
            }
          </p>
          <div className={styles.question}>
            {"- So do Backgrounds even matter?"}
          </div>
          <p className={styles.answer}>
            {
              "Absolutely! Your background will have a great impact on your experiences in Faerûn, like \
          dialogue options and inspiration points! (re-roll attempts on skill checks)"
            }
          </p>
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
          <div className={styles.question}>{"- What is a 'Class'?"}</div>
          <p className={styles.answer}>
            {
              "Classes are the cornerstone of what makes your characters who they are. A class can be thought of as a vocation or a collection of skills, \
          where each class has their own strengths and weaknesses in the field of battle. For instance, Barbarians are fueled by rage and typically wield large and imposing weapons, \
          whereas Rogues lean more towards stealth, cunning, and a small dagger to the throat - if you're not careful."
            }
          </p>
          <div className={styles.question}>
            {"- Can I chose more than one?"}
          </div>
          <p className={styles.answer}>
            {
              "You sure can! Each time you add a class to your character, you increase your overall level by 1 - to a maximum of 12 levels. While you \
          could pick a different class for all 12 levels, keep in mind that increasing your level in one particular class will grant access to more powerful spells and feats!"
            }
          </p>
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
            {"- Abilities are confusing, can you explain how they work?"}
          </div>
          <p className={styles.answer}>
            {
              "While a class will determine your overall path and role in combat, your abilities will determine how effective you are in fulfilling that role. \
          Without getting too far into the weeds (this can get rather complicated) each Ability governs a different set of skills. Strength will make you more effective with \
          heavy weapons like Greatswords and Axes, while Intelligence, Wisdom, and Charisma will increase the potency of certain spells. (Spell implementation is planned for future builds)."
            }
          </p>
          <p className={styles.answer}>
            {
              "In future updates to the site, how these abilities effect skills and classes will be made more clear. For now, here's a general idea (note there are exceptions to\
              these rules):"
            }
          </p>
          <ul>
            <li className={styles.answer}>
              {"-Barbarians and Fighters want Strength"}
            </li>
            <li className={styles.answer}>
              {"-Bards, Paladins, Sorcerers, and Warlocks want Charisma"}
            </li>
            <li className={styles.answer}>
              {"-Clerics, Druids, and Monks want Wisdom"}
            </li>
            <li className={styles.answer}>
              {"-Rangers and Rogues want Dexterity"}
            </li>
            <li className={styles.answer}>{"-Wizards want Intelligence"}</li>
            <li className={styles.answer}>
              {"-Everyone wants at least some Constitution"}
            </li>
          </ul>
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
            {"- Why are there only 5 items per Equipment category?"}
          </div>
          <p className={styles.answer}>
            {
              "Given the overwhelming complexity of Baldur's Gate 3 and it's plethora of magical items, we're starting off with a small subset of equippable gear while \
          we work on implementing things like Favorites, Build Import/Export codes, and the Build Potency Calculator. Though, fear not! There are plans to add most all items from Baldur's Gate 3 into BG3Builds!"
            }
          </p>
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
            {"- What is that button with the funny looking dice?"}
          </div>
          <p className={styles.answer}>
            {
              "When fully implemented, this will open the Build Potency Calculator! You may have noticed that certain items have very powerful effects and \
          stat modifications on them (i.e. Craterflesh Gloves add 1d6 Force damage to an attack when you land a critical hit). What we are working on with this feature is a way to \
          take the full context of all of your Ability modifiers, item modifiers, and any other buffs/affects you may have, add it all up and display the total damage (or healing) \
          you can expect to do with this build while in game!"
            }
          </p>
          <p className={styles.answer}>
            {
              "This is a very complicated and ambitious feature, so there is no expected release \
          date, but keep an eye on our public GitHub repo for updates to the Roadmap! (Which is also coming soon...)"
            }
          </p>
        </div>
      </div>
    </div>
  );
}
