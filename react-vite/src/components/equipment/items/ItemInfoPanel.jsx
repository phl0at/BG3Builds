// Files
import styles from "./Items.module.css";
// Functions/Components
import { action, equipItem } from "../../../redux/build";
// Packages
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function ItemInfo({ wearingItem, selectedItem, type }) {
  const dispatch = useDispatch();
  const { buildId } = useParams();
  const Equipment = useSelector((state) => state.static.equipment);
  const currentUser = useSelector((state) => state.session.user);
  const viewedItem = Equipment[selectedItem];
  const descriptions = viewedItem?.description.split("&*&");


  return (
    <main className={styles.sideMenu}>
      <div className={styles.sideTable}>
        <div className={styles.sideHeader}>
          <div>{viewedItem.name}</div>
        </div>
        <div className={styles.sideInfo}>
          <div className={styles.rarity}>{viewedItem.rarity}</div>
          {(viewedItem.damage && viewedItem.damage_type) != null && (
            <div className={styles.damage}>
              <div>{`(${viewedItem.damage_type})`}</div>
              <div>{viewedItem.damage}</div>
            </div>
          )}
        </div>

        <div className={styles.description}>
          {descriptions.map((des) => {
            const title = des.split(":")[0];
            const text = des.split(":")[1];
            return (
              <div key={title}>
                <div className={styles.orange}>{title}</div>
                <div className={styles.text}>{text}</div>
                <br />
              </div>
            );
          })}
        </div>
        {!currentUser & (buildId != undefined) ? (
          <div className={styles.buttons}>Sign in to change Equipment</div>
        ) : (
          <div className={styles.buttons}>
            {!wearingItem && (
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
            {wearingItem && (
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
  );
}
