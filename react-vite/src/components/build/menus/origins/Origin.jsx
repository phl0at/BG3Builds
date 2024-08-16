//Files
import styles from "../../Build.module.css";
//Functions/Components
import { action, setOrigin } from "../../../../redux/build";
//Packages
import { useSelector, useDispatch } from "react-redux";
import { IKImage } from "imagekitio-react";

export default function OriginComponent() {
  const dispatch = useDispatch();
  const currentOrigin = useSelector((state) => state.builds.current.origin);
  const Origins = useSelector((state) => state.static.origins);

  const onClick = (e, originId) => {
    e.preventDefault();

    dispatch(setOrigin(originId, Origins[originId].name));

    switch (originId) {
      case 1:
        return (
          dispatch(action("build/setRace", 1)),
          dispatch(action("build/setBackground", 2))
        );
      case 2:
        return (
          dispatch(action("build/setRace", 5)),
          dispatch(action("build/setBackground", 10))
        );
      case 3:
        return (
          dispatch(action("build/setRace", 4)),
          dispatch(action("build/setBackground", 9))
        );
      case 4:
        return (
          dispatch(action("build/setRace", 7)),
          dispatch(action("build/setBackground", 1))
        );
      case 5:
        return (
          dispatch(action("build/setRace", 4)),
          dispatch(action("build/setBackground", 5))
        );
      case 6:
        return (
          dispatch(action("build/setRace", 2)),
          dispatch(action("build/setBackground", 8))
        );
      case 7:
        return (
          dispatch(action("build/setRace", 10)),
          dispatch(action("build/setBackground", 12))
        );
      case 8:
        return (
          dispatch(action("build/setRace", 1)),
          dispatch(action("build/setBackground", 1))
        );
    }
  };

  return (
    <div>
      {
        <>
          <div className={styles.title}>Origin</div>
          <div className={styles.list}>
            {Object.values(Origins).map((origin) => (
              <div
                onClick={(e) => onClick(e, origin.id)}
                key={origin.id}
                className={styles.item}
              >
                <IKImage
                  id={styles.charImg}
                  className={
                    currentOrigin === origin.id
                      ? styles.selected_img
                      : styles.img
                  }
                  path={`char_icons/${origin.name}.png`}
                />
                {Origins[origin.id].name}
              </div>
            ))}
          </div>
          <div className={styles.select}>
            {Origins[currentOrigin] != undefined && (
              <>
                <div className={styles.name}>{Origins[currentOrigin].name}</div>
                <div className={styles.description}>
                  {Origins[currentOrigin].description}
                </div>
              </>
            )}
          </div>
        </>
      }
    </div>
  );
}
