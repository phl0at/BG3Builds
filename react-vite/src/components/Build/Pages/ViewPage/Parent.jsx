//Files
import styles from "./Parent.module.css";
//Functions/Components
import Navigation from "../../Components/NavigationComponent";
import InfoComponent from "../../Components/InfoComponent";
import ViewBuildsComponent from "./ViewComponent/ViewBuilds";

//Packages



export default function ParentPage() {


  return (
    <main className={styles.main}>
      <ViewBuildsComponent />
      <InfoComponent points={points} />
    </main>
  );
}
