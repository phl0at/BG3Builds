import styles from "./FilterBuilds.module.css";
import {
  getBackgroundArray,
  getClassArray,
  getOriginArray,
  getRaceArray,
} from "../../redux/static";
import { useSelector } from "react-redux";
import { useState } from "react";
import {
  CiSquareChevRight,
  CiSquareChevDown,
  CiStop1,
  CiSquareRemove,
} from "react-icons/ci";

export default function FilterBuildComponent({ filters, setFilters }) {
  const currentUser = useSelector((state) => state.session.user);
  const Origins = useSelector(getOriginArray);
  const Races = useSelector(getRaceArray);
  const Backgrounds = useSelector(getBackgroundArray);
  const Classes = useSelector(getClassArray);
  const [showOrigins, setShowOrigins] = useState(false);
  const [showRaces, setShowRaces] = useState(false);
  const [showBackgrounds, setShowBackgrounds] = useState(false);
  const [showClasses, setShowClasses] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  return (
    <main className={styles.main}>
      <div className={styles.title}>Filters</div>

      <div>
        {currentUser && (
          <>
            <button
              className={styles.filter}
              onClick={(e) => {
                e.preventDefault();
                setFilters(filters["owned"] ? {} : { owned: true });
              }}
            >
              {filters["owned"] ? (
                <CiSquareRemove size="24" />
              ) : (
                <CiStop1 size="24" />
              )}
              Owned
            </button>
          </>
        )}
      </div>
      <div>
        {currentUser && (
          <>
            <button
              className={styles.filter}
              onClick={(e) => {
                e.preventDefault();
                setFilters(filters["favorites"] ? {} : { favorites: true });
              }}
            >
              {filters["favorites"] ? (
                <CiSquareRemove size="24" />
              ) : (
                <CiStop1 size="24" />
              )}
              Favorites
            </button>
          </>
        )}
      </div>

      <div>
        <button
          className={styles.filter}
          onClick={(e) => {
            e.preventDefault();
            setShowOrigins(!showOrigins);
          }}
        >
          {showOrigins ? (
            <CiSquareChevDown size="24" />
          ) : (
            <CiSquareChevRight size="24" />
          )}
          Origin
        </button>
      </div>

      {showOrigins && (
        <div className={styles.list}>
          {Origins.map((origin) => (
            <div key={origin.id} className={styles.origin}>
              <button
                className={
                  selectedItem === origin.name
                    ? styles.selected
                    : styles.listItem
                }
                onClick={(e) => {
                  e.preventDefault();
                  setFilters(
                    filters["origin"] === origin.id ? {} : { origin: origin.id }
                  );
                  setSelectedItem(
                    selectedItem === origin.name ? "" : origin.name
                  );
                }}
              >
                {origin.name}
              </button>
            </div>
          ))}
        </div>
      )}

      <div>
        <button
          className={styles.filter}
          onClick={(e) => {
            e.preventDefault();
            setShowRaces(!showRaces);
          }}
        >
          {showRaces ? (
            <CiSquareChevDown size="24" />
          ) : (
            <CiSquareChevRight size="24" />
          )}
          Race
        </button>
      </div>

      {showRaces && (
        <div className={styles.list}>
          {Races.map((race) => (
            <div key={race.id} className={styles.race}>
              <button
                className={
                  selectedItem === race.name ? styles.selected : styles.listItem
                }
                onClick={(e) => {
                  e.preventDefault();
                  setFilters(
                    filters["race"] === race.id ? {} : { race: race.id }
                  );
                  setSelectedItem(selectedItem === race.name ? "" : race.name);
                }}
              >
                {race.name}
              </button>
            </div>
          ))}
        </div>
      )}

      <div>
        <button
          className={styles.filter}
          onClick={(e) => {
            e.preventDefault();
            setShowBackgrounds(!showBackgrounds);
          }}
        >
          {showBackgrounds ? (
            <CiSquareChevDown size="24" />
          ) : (
            <CiSquareChevRight size="24" />
          )}{" "}
          Background
        </button>
      </div>

      {showBackgrounds && (
        <div className={styles.list}>
          {Backgrounds.map((bg) => (
            <div key={bg.id} className={styles.background}>
              <button
                className={
                  selectedItem === bg.name ? styles.selected : styles.listItem
                }
                onClick={(e) => {
                  e.preventDefault();
                  setFilters(
                    filters["background"] === bg.id ? {} : { background: bg.id }
                  );
                  setSelectedItem(selectedItem === bg.name ? "" : bg.name);
                }}
              >
                {bg.name}
              </button>
            </div>
          ))}
        </div>
      )}

      <div>
        <button
          className={styles.filter}
          onClick={(e) => {
            e.preventDefault();
            setShowClasses(!showClasses);
          }}
        >
          {showClasses ? (
            <CiSquareChevDown size="24" />
          ) : (
            <CiSquareChevRight size="24" />
          )}
          Class
        </button>
      </div>

      {showClasses && (
        <div className={styles.list}>
          {Classes.map((_class) => (
            <div key={_class.class_id} className={styles.class}>
              <button
                className={
                  selectedItem === _class.name
                    ? styles.selected
                    : styles.listItem
                }
                onClick={(e) => {
                  e.preventDefault();
                  setFilters(
                    filters["class"] === _class.class_id
                      ? {}
                      : { class: _class.class_id }
                  );
                  setSelectedItem(
                    selectedItem === _class.name ? "" : _class.name
                  );
                }}
              >
                {_class.name}
              </button>
            </div>
          ))}
        </div>
      )}
      {Object.values(filters)[0] && (
        <button
          className={styles.button}
          onClick={(e) => {
            e.preventDefault();
            setFilters({});
            setSelectedItem("");
          }}
        >
          Clear Filters
        </button>
      )}
    </main>
  );
}
