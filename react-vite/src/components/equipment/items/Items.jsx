//Files
import styles from "./Items.module.css";
//Functions/Components
import { getEquipmentArray } from "../../../redux/build";
import { equipItem, action } from "../../../redux/build";
//Packages
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Suspense } from "react";
import { FadeLoader } from "react-spinners";
import { IKImage } from "imagekitio-react";
const urlEndpoint = "https://ik.imagekit.io/phl0at/images/item_icons/";

export default function ItemsTableModal({ type, Equipment }) {
  const { buildId } = useParams();
  const dispatch = useDispatch();
  const currentBuild = useSelector((state) => state.builds.current);
  const currentUser = useSelector((state) => state.session.user);
  const EquipmentArray = useSelector(getEquipmentArray);
  const [selectedItem, setSelectedItem] = useState(
    currentBuild[type] ? currentBuild[type] : null
  );
  const formatType = type.split("_")[0];
  const capitalizedType = formatType[0].toUpperCase() + formatType.slice(1);

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
          {EquipmentArray.map((item) => {
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
                      <Suspense fallback={<FadeLoader />}>
                        <IKImage
                          loading="lazy"
                          urlEndpoint={urlEndpoint}
                          path={`${item.name.replaceAll(" ", "")}.png`}
                        />
                      </Suspense>
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
            <div className={styles.desHead}>
              <div>Description</div>
            </div>

            <>
              <div className={styles.description}>
                {Equipment[selectedItem].description}
              </div>
              {!currentUser & (buildId != undefined) ? (
                <div className={styles.buttons}>
                  Sign in to change Equipment
                </div>
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
            </>
          </div>
        </main>
      )}
    </>
  );
}
