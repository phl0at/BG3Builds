import styles from "./Landing.module.css";
import { NavLink } from "react-router-dom";

export default function LandingPage() {
  return (
    <main className={styles.main}>
      <div className={styles.intro}>
        <main className={styles.container}>
          <div className={styles.welcome}>{"Welcome to BG3Builds"}</div>
          <p>
            {
              "Thanks for checking out the site! We hope you enjoy your time creating, sharing, and \
                testing character builds for your next adventure in Baldur's Gate 3!"
            }{" "}
          </p>
          <p>
            {
              "If you've never played Baldur's Gate 3, or would like some information about how to use the site, "
            }
            <NavLink to="/faq">{"click here"}</NavLink> {"to see our FAQ page!"}
          </p>

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
