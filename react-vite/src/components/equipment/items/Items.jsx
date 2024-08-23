//Files
import styles from "./Items.module.css";
//Packages
import { useSelector } from "react-redux";
import { IKImage } from "imagekitio-react";
import { useState } from "react";
import { PulseLoader } from "react-spinners";
//Functions/Components
import ItemInfo from "./ItemInfoPanel";

export default function ItemsTableModal({ type }) {
  const formatType = type.split("_")[0];
  const currentBuild = useSelector((state) => state.builds.current);
  const itemObj = useSelector((state) => state.static.items[formatType]);
  const [selectedItem, setSelectedItem] = useState(currentBuild[type]);
  const capitalizedType = formatType[0].toUpperCase() + formatType.slice(1);
  const wearingSelectedItem = currentBuild[type] === selectedItem;

  const onClick = (e, id) => {
    e.preventDefault();
    setSelectedItem(id);
  };

  return (
    <>
      <main className={styles.itemsList}>
        <div className={styles.table}>
          <div className={styles.thead}>
            <div className={styles.itemHead}>{`${capitalizedType}`}</div>
          </div>
          {!itemObj && (
            <PulseLoader className={styles.loading} color="#e4c274" />
          )}
          {itemObj &&
            Object.values(itemObj).map((item) => {
              return (
                <div key={item.id} className={styles.tbody}>
                  <button
                    onClick={(e) => onClick(e, item.id)}
                    id={selectedItem === item.id && styles.selectedItem}
                    className={
                      currentBuild[type] === item.id
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
                    <div
                      id={styles[itemObj[item.id].rarity.replace(" ", "")]}
                      className={styles.itemName}
                    >
                      {item.name}
                    </div>
                  </button>
                </div>
              );
            })}
        </div>
      </main>
      {selectedItem != undefined && (
        <ItemInfo
          wearingItem={wearingSelectedItem}
          selectedItem={selectedItem}
          type={type}
        />
      )}
    </>
  );
}
