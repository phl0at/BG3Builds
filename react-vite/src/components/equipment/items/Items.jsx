//Files
import styles from "./Items.module.css";
import { Images } from "../../images";
//Functions/Components
import { getEquipmentArray } from "../../../redux/build";
import { equipItem, action } from "../../../redux/build";
//Packages
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ItemsTableModal({ type, Equipment }) {
  const dispatch = useDispatch();
  const currentBuild = useSelector((state) => state.builds.current);
  const currentUser = useSelector((state) => state.session.user);
  const EquipmentArray = useSelector(getEquipmentArray);
  const [selectedItem, setSelectedItem] = useState(null);
  const formatType = type.split("_")[0];

  const onClick = (e, id) => {
    e.preventDefault();
    setSelectedItem(id);
  };

  console.log(selectedItem);

  return (
    <>
      <main className={styles.main}>
        <div className={styles.table}>
          <div className={styles.thead}>
            <div className={styles.itemHead}>Select an item to equip</div>
          </div>
          {EquipmentArray.map((item) => {
            if (item.type === formatType) {
              return (
                <div key={item.id} className={styles.tbody}>
                  <button
                    onClick={(e) => onClick(e, item.id)}
                    id={selectedItem === item.id ? styles.selectedItem : ""}
                    className={
                      currentBuild[type]?.name === item.name
                        ? styles.equippedItem
                        : styles.item
                    }
                  >
                    <div className={styles.itemImg}>
                      {
                        <img
                          src={Images.equipment[item.name.replaceAll(" ", "")]}
                        />
                      }
                    </div>
                    <div className={styles.itemName}>{item.name}</div>
                  </button>
                </div>
              );
            }
          })}
        </div>
      </main>
      <main className={styles.sideMenu}>
        <div className={styles.sideTable}>
          <div className={styles.desHead}>
            <div>Description</div>
          </div>
          {selectedItem && (
            <>
              <div className={styles.description}>
                {Equipment[selectedItem].description}
              </div>
              {currentUser && (
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
            </>
          )}
        </div>
      </main>
    </>
  );
}
