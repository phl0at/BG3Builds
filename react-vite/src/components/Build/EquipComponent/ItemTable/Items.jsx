//Files
import styles from "./Items.module.css";
import { Images } from "../../../images";
//Functions/Components
import {
  thunkGetEquipment,
  getEquipmentArray,
} from "../../../../redux/equipment";
//Packages
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { equipItem } from "../../../../redux/build";

export default function ItemsTableModal({ type }) {
  const dispatch = useDispatch();
  const itemsObject = useSelector((state) => state.equipment);
  const currentBuild = useSelector((state) => state.builds.current);
  const [selectedItem, setSelectedItem] = useState(null);
  const equipment = useSelector(getEquipmentArray);
  const formatType = type.split("_").length ? type.split("_")[0] : type;
  const mh_oh = formatType === "melee" || formatType === "ranged";
  const r1_r2 = formatType === "ring";
  const std = !mh_oh && !r1_r2;

  useEffect(() => {
    dispatch(thunkGetEquipment(formatType));
  }, []);

  const onClick = (e, id) => {
    e.preventDefault();
    setSelectedItem(id);
  };

  const equip = (e, itemType, id) => {
    e.preventDefault();
    dispatch(equipItem(itemType, itemsObject[id]));
  };

  return (
    <>
      <main className={styles.main}>
        <div className={styles.table}>
          <div className={styles.thead}>
            <div className={styles.itemHead}>Select an item to equip</div>
          </div>
          {equipment.map((item) => {
            if (item.type === formatType) {
              return (
                <div key={item.id} className={styles.tbody}>
                  <button
                    onClick={(e) => onClick(e, item.id)}
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
                {itemsObject[selectedItem].description}
              </div>
              <div className={styles.buttons}>
                {mh_oh && (
                  <>
                    <button
                      onClick={(e) => equip(e, "melee_mh", selectedItem)}
                      className={styles.equip}
                    >
                      Equip Main Hand
                    </button>
                    <button
                      onClick={(e) => equip(e,"melee_oh", selectedItem)}
                      className={styles.equip}
                    >
                      Equip Off Hand
                    </button>
                  </>
                )}
                {r1_r2 && (
                  <>
                    <button
                      onClick={(e) => equip(e,"ring_1", selectedItem)}
                      className={styles.equip}
                    >
                      Equip Slot 1
                    </button>
                    <button
                      onClick={(e) => equip(e, "ring_2", selectedItem)}
                      className={styles.equip}
                    >
                      Equip Slot 2
                    </button>
                  </>
                )}
                {std && (
                  <button
                    onClick={(e) => equip(e, type, selectedItem)}
                    className={styles.equip}
                  >
                    Equip
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </main>
    </>
  );
}
