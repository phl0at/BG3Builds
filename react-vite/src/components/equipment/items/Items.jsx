//Files
import styles from "./Items.module.css";
//Functions/Components
import { equipItem, action } from "../../../redux/build";
//Packages
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IKImage } from "imagekitio-react";

export default function ItemsTableModal({ type }) {
  const { buildId } = useParams();
  const dispatch = useDispatch();
  const currentBuild = useSelector((state) => state.builds.current);
  const currentUser = useSelector((state) => state.session.user);
  const Equipment = useSelector((state) => state.static.equipment);
  const [selectedItem, setSelectedItem] = useState(
    currentBuild[type] ? currentBuild[type] : null
  );
  const formatType = type.split("_")[0];
  const capitalizedType = formatType[0].toUpperCase() + formatType.slice(1);
  const viewedItem = Equipment[selectedItem];
  const descriptions = viewedItem?.description.split("&*&");

  const onClick = (e, id) => {
    e.preventDefault();
    setSelectedItem(id);
  };

  return (
    <>
      <main className={styles.main}>
        <div className={styles.table}>
          <div className={styles.thead}>
            <div className={styles.itemHead}>{`${capitalizedType}`}</div>
          </div>
          {Object.values(Equipment).map((item) => {
            if (item.type === formatType) {
              return (
                <div key={item.id} className={styles.tbody}>
                  <button
                    onClick={(e) => onClick(e, item.id)}
                    id={selectedItem === item.id ? styles.selectedItem : ""}
                    className={
                      Equipment[currentBuild[type]]?.name === item.name
                        ? styles.equippedItem
                        : styles.item
                    }
                  >
                    <div className={styles.itemImg}>
                      <IKImage
                        loading="lazy"
                        path={`item_icons/${item.name}.png`}
                      />
                    </div>
                    <div className={styles.itemName}>{item.name}</div>
                  </button>
                </div>
              );
            }
          })}
        </div>
      </main>
      {selectedItem && (
        <main className={styles.sideMenu}>
          <div className={styles.sideTable}>
            <div className={styles.sideInfo}>
              <div className={styles.desHead}>
                <div>{viewedItem.name}</div>
              </div>
              <div className={styles.rarity}>{viewedItem.rarity}</div>
              {viewedItem.damage_type != null && (
                <div className={styles.damage_type}>
                  {viewedItem.damage_type} weapon
                </div>
              )}
              {viewedItem.damage != null && (
                <div className={styles.damage}>
                  Damage | {viewedItem.damage}
                </div>
              )}
            </div>
            {descriptions.length > 1 ? (
              <>
                <div className={styles.description}>{descriptions[0]}</div>
                <div className={styles.description}>{descriptions[1]}</div>
              </>
            ) : (
              <div className={styles.description}>{descriptions[0]}</div>
            )}
            {!currentUser & (buildId != undefined) ? (
              <div className={styles.buttons}>Sign in to change Equipment</div>
            ) : (
              <div className={styles.buttons}>
                {currentBuild[type] !== selectedItem && (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(equipItem(type, selectedItem));
                    }}
                    className={styles.equip}
                  >
                    Equip
                  </button>
                )}
                {currentBuild[type] === selectedItem && (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(action("build/remove", type));
                    }}
                    className={styles.equip}
                  >
                    Remove
                  </button>
                )}
              </div>
            )}
          </div>
        </main>
      )}
    </>
  );
}
