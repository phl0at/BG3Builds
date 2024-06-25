//Files
import styles from "./Items.module.css";
import { Images } from "../../../images";
//Functions/Components
import {
  thunkGetEquipment,
  getEquipmentArray,
} from "../../../../redux/equipment";
//Packages
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { equipItem } from "../../../../redux/build";

export default function ItemsTableModal({ type }) {
  const dispatch = useDispatch();
  const currentBuild = useSelector((state) => state.builds.current);
  const equipment = useSelector(getEquipmentArray);
  const formatType = type.split("_").length ? type.split("_")[0] : type;
  useEffect(() => {
    dispatch(thunkGetEquipment(formatType));
  }, []);

  const onClick = (e, name) => {
    e.preventDefault();
    if (type != "ring" || type != "melee" || type != "ranged") {
      dispatch(equipItem(type, name));
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.table}>
        <div className={styles.thead}>
          <div className={styles.imgHead} />
          <div className={styles.itemHead}>Select an item to equip</div>
        </div>

        {equipment.map((item) => {
          if (item.type === formatType) {
            return (
              <div key={item.id} className={styles.tbody}>
                <button
                  onClick={(e) => onClick(e, item.name)}
                  className={
                    currentBuild[formatType] === item.name
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
  );
}
