//Files
import styles from "./ViewBuilds.module.css";
import { classImages } from "../images/images";
//Functions/Components
import { thunkAddFavorite, thunkDeleteFavorite } from "../../redux/session";
//Packages
import { useSelector, useDispatch } from "react-redux";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { CiViewBoard } from "react-icons/ci";
import { NavLink } from "react-router-dom";

export function SelectedBuildPanel({ build, Backgrounds, Races }) {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.session.user);
  const attributes = [
    "strength",
    "dexterity",
    "constitution",
    "intelligence",
    "wisdom",
    "charisma",
  ];

  const clickFavorite = (e) => {
    e.preventDefault();

    if (currentUser.favorites[build.id]) {
      dispatch(thunkDeleteFavorite(build.id));
    } else {
      dispatch(thunkAddFavorite(build.id));
    }
  };

  return (
    <>
      <div className={styles.selectedHeader}>
        <div className={styles.favoriteContainer}>
          {currentUser && (
            <button
              title="Add to favorites"
              className={styles.favorite}
              onClick={clickFavorite}
            >
              {currentUser.favorites[build.id] ? (
                <AiFillHeart size="40" />
              ) : (
                <AiOutlineHeart size="40" />
              )}
            </button>
          )}
        </div>
        <div className={styles.selectedClassImg}>
          {build.build_classes.length ? (
            <img src={classImages[build.build_classes[0].name]} />
          ) : (
            "No classes"
          )}
        </div>
        <div className={styles.headerRight}></div>
      </div>
      <div className={styles.selectedBody}>
        <div
          className={styles.selectedName}
        >{`${build.name[0].toUpperCase()}${build.name.slice(1)}`}</div>
        <div className={styles.selectedAttributes}>
          {attributes.map((att) => {
            const cont = `${att[0].toUpperCase()}${att.slice(1, 3)}`;
            return (
              <div key={att} className={styles.stat}>
                <div className={styles.orange}>{cont}</div>
                <div>{build[att]}</div>
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
                src={classImages[bc.name]}
              />
              <div>{bc.level}</div>
            </div>
          ))}
        </div>
        <div className={styles.selectedCharacter}>
          <div className={styles.char}>{build.character_name}</div>|
          <div className={styles.char}>{Races[build.race].name}</div>|
          <div className={styles.char}>
            {Backgrounds[build.background].name}
          </div>
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
