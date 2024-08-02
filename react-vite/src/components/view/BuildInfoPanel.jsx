//Files
import styles from "./ViewBuilds.module.css";
//Functions/Components
import { thunkAddFavorite, thunkDeleteFavorite } from "../../redux/session";
//Packages
import { useSelector, useDispatch } from "react-redux";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { CiViewBoard } from "react-icons/ci";
import { NavLink } from "react-router-dom";

export function SelectedBuildPanel({ build }) {
  const dispatch = useDispatch();
  const userFavorites = useSelector((state) => state.session.user?.favorites);
  const buildRace = useSelector((state) => state.static.races[build.race].name);
  const buildBackground = useSelector(
    (state) => state.static.backgrounds[build.background].name
  );
  const attributes = [
    "Strength",
    "Dexterity",
    "Constitution",
    "Intelligence",
    "Wisdom",
    "Charisma",
  ];

  const clickFavorite = (e) => {
    e.preventDefault();

    if (userFavorites[build.id]) {
      dispatch(thunkDeleteFavorite(build.id));
    } else {
      dispatch(thunkAddFavorite(build.id));
    }
  };

  return (
    <>
      <div className={styles.selectedHeader}>
        <div className={styles.favoriteContainer}>
          {userFavorites && (
            <button
              title="Add to favorites"
              className={styles.favorite}
              onClick={clickFavorite}
            >
              {userFavorites[build.id] ? (
                <AiFillHeart size="40" />
              ) : (
                <AiOutlineHeart size="40" />
              )}
            </button>
          )}
        </div>
        <div className={styles.selectedClassImg}>
          {build.build_classes.length > 0 && (
            <img
              src={`https://ik.imagekit.io/phl0at/images/class_icons/${build.build_classes[0].name}.png`}
            />
          )}
        </div>
        <div className={styles.headerRight}></div>
      </div>
      <div className={styles.selectedBody}>
        <div className={styles.selectedName}>{build.name}</div>
        <div className={styles.selectedAttributes}>
          {attributes.map((att) => {
            return (
              <div key={att} className={styles.stat}>
                <div className={styles.orange}>{att.slice(0, 3)}</div>
                <div>{build[att.toLowerCase()]}</div>
              </div>
            );
          })}
        </div>
        <div className={styles.selectedClasses}>
          {build.build_classes.map((bc) => (
            <div className={styles.selClass} key={bc.class_id}>
              <img
                title={bc.name}
                className={styles.listImage}
                src={`https://ik.imagekit.io/phl0at/images/class_icons/${bc.name}.png`}
              />
              <div>{bc.level}</div>
            </div>
          ))}
        </div>
        <div className={styles.selectedCharacter}>
          <div className={styles.char}>{build.character_name}</div>|
          <div className={styles.char}>{buildRace}</div>|
          <div className={styles.char}>{buildBackground}</div>
        </div>
        <NavLink
          title="Go to build"
          className={styles.toBuild}
          to={`/build/${build.id}`}
        >
          <CiViewBoard size="50" />
        </NavLink>
      </div>
    </>
  );
}
