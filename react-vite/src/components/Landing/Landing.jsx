import styles from "./Landing.module.css";
import { NavLink } from "react-router-dom";

export default function LandingPage() {
  return (
    <main className={styles.main}>
      <div className={styles.intro}>
        <main className={styles.container}>
          <div className={styles.disclaimer}>
          <div className={styles.welcome}>Welcome to BG3Builds</div>
            <p>
              Thanks for checking out the site! Have fun creating, sharing, and
              testing your character builds for Baldur's Gate 3! Here are a few
              things to keep in mind before getting started...
            </p>
            <p>
              1. Begin creating your character by choosing an Origin Story, Race,
              Class, Background, and Ability Stats. Use the navigation bar on the left to browse each menu.
            </p>
            <p>
              2. Once you have created the perfect character, start equipping
              powerful items! Not all items are in the game right now, but more are being added every few weeks.
            </p>
            <p>
              3. Information about stat breakdowns and proficiency bonuses can
              be found in the Information Panel on the right. In the top left corner you will
              find buttons to switch between the build's comments and stats.
            </p>
            <p>
              4. You cannot save, comment on, or edit existing builds unless you have created an account and singed in. The Login and Sign Up buttons are in the User Panel in the bottom right corner.
            </p>
          </div>
          <NavLink className={styles.start} to="/create">
            Start Building!
          </NavLink>
        </main>
      </div>
    </main>
  );
}
