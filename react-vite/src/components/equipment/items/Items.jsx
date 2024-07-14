//Files
import styles from "./Items.module.css";
import { Images } from "../../images";
//Functions/Components
import { getEquipmentArray } from "../../../redux/build";
import { equipItem } from "../../../redux/build";
//Packages
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ItemsTableModal({ type, Equipment }) {
  const dispatch = useDispatch();
  const currentBuild = useSelector((state) => state.builds.current);
  const EquipmentArray = useSelector(getEquipmentArray);
  const [selectedItem, setSelectedItem] = useState(null);
  const formatType = type.split("_")[0];

  const onClick = (e, id) => {
    e.preventDefault();
    setSelectedItem(id);
  };

  const equip = (e, id) => {
    e.preventDefault();
    dispatch(equipItem(type, id));
  };

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
              <div className={styles.buttons}>
                <button
                  onClick={(e) => equip(e, selectedItem)}
                  className={styles.equip}
                >
                  Equip
                </button>
              </div>
            </>
          )}
        </div>
      </main>
    </>
  );
}
