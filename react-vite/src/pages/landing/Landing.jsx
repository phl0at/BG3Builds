import styles from "./Landing.module.css";
import { NavLink } from "react-router-dom";

export default function LandingPage() {
  return (
    <main className={styles.main}>
      <div className={styles.intro}>
        <main className={styles.container}>
          <div className={styles.welcome}>{"Welcome to BG3Builds"}</div>
          <p className={styles.preStep}>
            {
              "Thanks for checking out the site! We hope you enjoy your time creating, sharing, and \
                testing character builds for the best game on the planet: Baldur's Gate 3. Here are a few things to keep in mind before getting started..."
            }
          </p>
          <div className={styles.scroll}>
            <p className={styles.step}>
              {
                "Larian Studios, crafted a deeply complex Role-Playing Game with myriad systems and unique ways \
                for players to express themselves. The purpose of this site is to help players establish a blue-print \
              (or 'build') to plan ahead and create the perfect character for your next play-through."
              }
            </p>
            <p className={styles.step}>
              {
                "Given the game's complexity, please bear in mind that we do not support every single system found in \
                Baldur's Gate 3. However, things like Spells, Proficiencies, and Sub-classes are in the works!"
              }
            </p>
            <p className={styles.step}>
              {
                "To create a build of your own, begin by using the navigation bar on the left to browse through the Character Menus.\
                Here, you will chose your character's origins, classes, and ability point allocations."
              }
            </p>
            <p className={styles.step}>
              {
                "Once your character is set up, start equipping some powerful items! Not all items found in Baldur's Gate 3 are currently available on our site, \
                but more are added on around a monthly-basis."
              }
            </p>
            <p className={styles.red}>
              {
                "If you would like to save your build for later, you must log into an existing account."
              }
            </p>
          </div>
          <div className={styles.startContainer}>
            <NavLink className={styles.start} to="/create">
              Start Building!
            </NavLink>
          </div>
        </main>
      </div>
    </main>
  );
}
