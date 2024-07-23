//Files
import styles from "./Background.module.css";
import { Images } from "../../../images";
//Functions/Components
import { action } from "../../../../redux/build";
import { useModal } from "../../../../context/Modal";
import ErrorModal from "../../../modals/error/ErrorModal";
//Packages
import { useDispatch, useSelector } from "react-redux";

export default function BackgroundComponent({ currentBuild }) {
  const dispatch = useDispatch();
  const { setModalContent } = useModal();
  const Backgrounds = useSelector((state) => state.static.backgrounds);

  const onClick = (e, background) => {
    e.preventDefault();
    if (currentBuild.origin === 8) {
      dispatch(action("build/setBackground", background));
    } else {
      setModalContent(
        <ErrorModal
          errors={{
            FAQ: ["Cannot change an Origin Characters background"],
          }}
        />
      );
    }
  };

  return (
    <>
      <div className={styles.title}>Background</div>
      <div className={styles.bgList}>
        <div className={styles.background}>
          <img
            onClick={(e) => onClick(e, 1)}
            src={Images.backgrounds["Acolyte"]}
            className={
              currentBuild.background === 1
                ? styles.selected_bgImg
                : styles.bgImg
            }
          ></img>
          Acolyte
        </div>
        <div className={styles.background}>
          <img
            onClick={(e) => onClick(e, 2)}
            src={Images.backgrounds["Charlatan"]}
            className={
              currentBuild.background === 2
                ? styles.selected_bgImg
                : styles.bgImg
            }
          ></img>
          Charlatan
        </div>
        <div className={styles.background}>
          <img
            onClick={(e) => onClick(e, 3)}
            src={Images.backgrounds["Criminal"]}
            className={
              currentBuild.background === 3
                ? styles.selected_bgImg
                : styles.bgImg
            }
          ></img>
          Criminal
        </div>
        <div className={styles.background}>
          <img
            onClick={(e) => onClick(e, 4)}
            src={Images.backgrounds["Entertainer"]}
            className={
              currentBuild.background === 4
                ? styles.selected_bgImg
                : styles.bgImg
            }
          ></img>
          Entertainer
        </div>
        <div className={styles.background}>
          <img
            onClick={(e) => onClick(e, 5)}
            src={Images.backgrounds["FolkHero"]}
            className={
              currentBuild.background === 5
                ? styles.selected_bgImg
                : styles.bgImg
            }
          ></img>
          Folk Hero
        </div>
        <div className={styles.background}>
          <img
            onClick={(e) => onClick(e, 6)}
            src={Images.backgrounds["GuildArtisan"]}
            className={
              currentBuild.background === 6
                ? styles.selected_bgImg
                : styles.bgImg
            }
          ></img>
          Guild Artisan
        </div>
        <div className={styles.background}>
          <img
            onClick={(e) => onClick(e, 7)}
            src={Images.backgrounds["Noble"]}
            className={
              currentBuild.background === 7
                ? styles.selected_bgImg
                : styles.bgImg
            }
          ></img>
          Noble
        </div>
        <div className={styles.background}>
          <img
            onClick={(e) => onClick(e, 8)}
            src={Images.backgrounds["Outlander"]}
            className={
              currentBuild.background === 8
                ? styles.selected_bgImg
                : styles.bgImg
            }
          ></img>
          Outlander
        </div>
        <div className={styles.background}>
          <img
            onClick={(e) => onClick(e, 9)}
            src={Images.backgrounds["Sage"]}
            className={
              currentBuild.background === 9
                ? styles.selected_bgImg
                : styles.bgImg
            }
          ></img>
          Sage
        </div>
        <div className={styles.background}>
          <img
            onClick={(e) => onClick(e, 10)}
            src={Images.backgrounds["Soldier"]}
            className={
              currentBuild.background === 10
                ? styles.selected_bgImg
                : styles.bgImg
            }
          ></img>
          Soldier
        </div>
        <div className={styles.background}>
          <img
            onClick={(e) => onClick(e, 11)}
            src={Images.backgrounds["Urchin"]}
            className={
              currentBuild.background === 11
                ? styles.selected_bgImg
                : styles.bgImg
            }
          ></img>
          Urchin
        </div>
      </div>
      <div className={styles.select}>
        {currentBuild.origin === 7 && (
          <img
            className={styles.bgImg}
            src={Images.backgrounds["HauntedOne"]}
          />
        )}
        <div className={styles.name}>
          {Backgrounds[currentBuild.background].name}
        </div>
        <div className={styles.description}>
          {Backgrounds[currentBuild.background].description}
        </div>
      </div>
    </>
  );
}
