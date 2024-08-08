//Files
import styles from "./Items.module.css";
//Packages
import { useSelector } from "react-redux";
import { IKImage } from "imagekitio-react";
import { PulseLoader } from "react-spinners";
import { useState, lazy, Suspense } from "react";
//Functions/Components
const ItemInfo = lazy(() => import("./ItemInfoPanel"));

export default function ItemsTableModal({ type }) {
  const currentBuild = useSelector((state) => state.builds.current);
  const Equipment = useSelector((state) => state.static.equipment);
  const [selectedItem, setSelectedItem] = useState(currentBuild[type]);
  const wearingItem = currentBuild[type] === selectedItem;
  const formatType = type.split("_")[0];
  const capitalizedType = formatType[0].toUpperCase() + formatType.slice(1);

  const onClick = (e, id) => {
    e.preventDefault();
    setSelectedItem(id);
  };

  return (
    <div className={styles.itemsModal}>
      <main className={styles.itemsList}>
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
      <Suspense
        fallback={
          <main className={styles.sideMenu}>
            <PulseLoader />
          </main>
        }
      >
        <ItemInfo
          wearingItem={wearingItem}
          selectedItem={selectedItem}
          type={type}
        />
      </Suspense>
    </div>
  );
}
