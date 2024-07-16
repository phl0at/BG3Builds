//Files
import styles from "./ViewBuilds.module.css";
import { Images } from "../images";
//Functions/Components
import { thunkAddFavorite, thunkDeleteFavorite } from "../../redux/session";
//Packages
import { useSelector, useDispatch } from "react-redux";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { CiCircleRemove, CiViewBoard } from "react-icons/ci";
import { NavLink } from "react-router-dom";

export function SelectedBuildPanel({
  build,
  setSelected,
  Backgrounds,
  Origins,
  Races,
}) {
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
            <img src={Images.classes[build.build_classes[0].name]} />
          ) : (
            "No classes"
          )}
        </div>
        <div>
          <button
            className={styles.close}
            onClick={(e) => {
              e.preventDefault();
              setSelected(null);
            }}
          >
            <CiCircleRemove size="40" />
          </button>
        </div>
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
                src={Images.classes[bc.name]}
              />
              <div>{bc.level}</div>
            </div>
          ))}
        </div>
        <div className={styles.selectedCharacter}>
          <div className={styles.selectedCharL}>
            <div>Origin: {Origins[build.origin].name}</div>
            <div>Character Name: {build.character_name}</div>
          </div>
          <div className={styles.selectedCharR}>
            <div>
              <div>| Race: {Races[build.race].name}</div>
              <div>| Background: {Backgrounds[build.background].name}</div>
            </div>
          </div>
        </div>
        <NavLink
          title="Go to build"
          className={styles.navButton}
          to={`/build/${build.id}`}
        >
          <CiViewBoard size="40" />
        </NavLink>
      </div>
    </>
  );
}

export function filteredBuilds(builds, filters, currentUser) {
  let arr = [];

  if (filters["applied"]) {
    builds.forEach((build) => {
      if (
        filters["owned"] &
        (build.user_id === currentUser.id) &
        !arr.includes(build)
      ) {
        arr.push(build);
      }

      if (
        filters["favorites"] &
        currentUser.favorites[build.id] != undefined &
        !arr.includes(build)
      ) {
        arr.push(build);
      }

      if (filters["class"] & !arr.includes(build)) {
        const hasClass = build.build_classes.some(
          (_class) => _class.class_id === filters["class"]
        );
        if (hasClass) arr.push(build);
      }

      if (
        filters["origin"] &
        (build.origin === filters["origin"]) &
        !arr.includes(build)
      ) {
        arr.push(build);
      }

      if (
        filters["race"] &
        (build.race === filters["race"]) &
        !arr.includes(build)
      ) {
        arr.push(build);
      }

      if (
        filters["background"] &
        (build.background === filters["background"]) &
        !arr.includes(build)
      ) {
        arr.push(build);
      }
    });
  }

  return arr.length ? arr : builds;
}
