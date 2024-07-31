//Files
import styles from "./Background.module.css";
//Functions/Components
import { action } from "../../../../redux/build";
import { useModal } from "../../../../context/Modal";
import ErrorModal from "../../../modals/error/ErrorModal";
//Packages
import { useDispatch, useSelector } from "react-redux";
import { IKImage } from "imagekitio-react";

export default function BackgroundComponent() {
  const dispatch = useDispatch();
  const { setModalContent } = useModal();
  const Backgrounds = useSelector((state) => state.static.backgrounds);
  const currentOrigin = useSelector((state) => state.builds.current.origin);
  const currentBackground = useSelector(
    (state) => state.builds.current.background
  );

  const onClick = (e, background) => {
    e.preventDefault();
    if (currentOrigin === 8) {
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
        {Object.values(Backgrounds).map((bg) => (
          <>
            {bg.id != 12 && (
              <div key={bg.id} className={styles.background}>
                <IKImage
                  onClick={(e) => onClick(e, bg.id)}
                  path={`bg_icons/${bg.name}.png`}
                  className={
                    currentBackground === bg.id
                      ? styles.selected_bgImg
                      : styles.bgImg
                  }
                />
                {bg.name}
              </div>
            )}
          </>
        ))}
      </div>
      <div className={styles.select}>
        {currentOrigin === 7 && (
          <IKImage className={styles.bgImg} path={"bg_icons/Haunted One.png"} />
        )}
        <div className={styles.name}>{Backgrounds[currentBackground].name}</div>
        <div className={styles.description}>
          {Backgrounds[currentBackground].description}
        </div>
      </div>
    </>
  );
}
