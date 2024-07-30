//Files
import styles from "./Equipment.module.css";
//Functions/Components
import OpenModalButton from "../modals";
import ItemsTableModal from "./items";
//Packages
import { useSelector } from "react-redux";
import {
  GiElfHelmet,
  GiCape,
  GiCapeArmor,
  GiGloves,
  GiLegArmor,
  GiBroadsword,
  GiBroadDagger,
  GiCrossbow,
  GiBowArrow,
  GiEmeraldNecklace,
  GiDiamondRing,
} from "react-icons/gi";

export default function EquipmentComponent() {
  const currentBuild = useSelector((state) => state.builds.current);
  const Equipment = useSelector((state) => state.static.equipment);

  return (
    <main className={styles.main}>
      <div className={styles.title}>Equipment</div>
      {currentBuild && (
        <div className={styles.equipment}>
          <div className={styles.left}>
            <div className={styles.armor}>
              <OpenModalButton
                className={styles.slot}
                buttonText={
                  currentBuild.helmet ? (
                    <img
                      loading="lazy"
                      className={styles.itemImg}
                      src={`https://ik.imagekit.io/phl0at/images/item_icons/${Equipment[
                        currentBuild.helmet
                      ].name.replaceAll(" ", "")}.png`}
                    />
                  ) : (
                    <GiElfHelmet size="40" />
                  )
                }
                modalComponent={
                  <ItemsTableModal Equipment={Equipment} type="helmet" />
                }
              />

              <OpenModalButton
                className={styles.slot}
                buttonText={
                  currentBuild.cloak ? (
                    <img
                      loading="lazy"
                      className={styles.itemImg}
                      src={`https://ik.imagekit.io/phl0at/images/item_icons/${Equipment[
                        currentBuild.cloak
                      ].name.replaceAll(" ", "")}.png`}
                    />
                  ) : (
                    <GiCape size="40" />
                  )
                }
                modalComponent={
                  <ItemsTableModal Equipment={Equipment} type="cloak" />
                }
              />

              <OpenModalButton
                className={styles.slot}
                buttonText={
                  currentBuild.armor ? (
                    <img
                      loading="lazy"
                      src={`https://ik.imagekit.io/phl0at/images/item_icons/${Equipment[
                        currentBuild.armor
                      ].name.replaceAll(" ", "")}.png`}
                    />
                  ) : (
                    <GiCapeArmor size="40" />
                  )
                }
                modalComponent={
                  <ItemsTableModal Equipment={Equipment} type="armor" />
                }
              />

              <OpenModalButton
                className={styles.slot}
                buttonText={
                  currentBuild.gloves ? (
                    <img
                      loading="lazy"
                      className={styles.itemImg}
                      src={`https://ik.imagekit.io/phl0at/images/item_icons/${Equipment[
                        currentBuild.gloves
                      ].name.replaceAll(" ", "")}.png`}
                    />
                  ) : (
                    <GiGloves size="40" />
                  )
                }
                modalComponent={
                  <ItemsTableModal Equipment={Equipment} type="gloves" />
                }
              />

              <OpenModalButton
                className={styles.slot}
                buttonText={
                  currentBuild.boots ? (
                    <img
                      loading="lazy"
                      className={styles.itemImg}
                      src={`https://ik.imagekit.io/phl0at/images/item_icons/${Equipment[
                        currentBuild.boots
                      ].name.replaceAll(" ", "")}.png`}
                    />
                  ) : (
                    <GiLegArmor size="40" />
                  )
                }
                modalComponent={
                  <ItemsTableModal Equipment={Equipment} type="boots" />
                }
              />
            </div>
            <div className={styles.weapons}>
              <OpenModalButton
                className={styles.slot}
                buttonText={
                  currentBuild.melee_mh ? (
                    <img
                      loading="lazy"
                      className={styles.itemImg}
                      src={`https://ik.imagekit.io/phl0at/images/item_icons/${Equipment[
                        currentBuild.melee_mh
                      ].name.replaceAll(" ", "")}.png`}
                    />
                  ) : (
                    <GiBroadsword size="40" />
                  )
                }
                modalComponent={
                  <ItemsTableModal Equipment={Equipment} type="melee_mh" />
                }
              />
              <OpenModalButton
                className={styles.slot}
                buttonText={
                  currentBuild.melee_oh ? (
                    <img
                      loading="lazy"
                      className={styles.itemImg}
                      src={`https://ik.imagekit.io/phl0at/images/item_icons/${Equipment[
                        currentBuild.melee_oh
                      ].name.replaceAll(" ", "")}.png`}
                    />
                  ) : (
                    <GiBroadDagger size="40" />
                  )
                }
                modalComponent={
                  <ItemsTableModal Equipment={Equipment} type="melee_oh" />
                }
              />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.accessories}>
              <div className={styles.armorClass}>
                <span>AC: 15</span>
              </div>
              <OpenModalButton
                className={styles.slot}
                buttonText={
                  currentBuild.amulet ? (
                    <img
                      loading="lazy"
                      className={styles.itemImg}
                      src={`https://ik.imagekit.io/phl0at/images/item_icons/${Equipment[
                        currentBuild.amulet
                      ].name.replaceAll(" ", "")}.png`}
                    />
                  ) : (
                    <GiEmeraldNecklace size="40" />
                  )
                }
                modalComponent={
                  <ItemsTableModal Equipment={Equipment} type="amulet" />
                }
              />
              <OpenModalButton
                className={styles.slot}
                buttonText={
                  currentBuild.ring_1 ? (
                    <img
                      loading="lazy"
                      className={styles.itemImg}
                      src={`https://ik.imagekit.io/phl0at/images/item_icons/${Equipment[
                        currentBuild.ring_1
                      ].name.replaceAll(" ", "")}.png`}
                    />
                  ) : (
                    <GiDiamondRing size="40" />
                  )
                }
                modalComponent={
                  <ItemsTableModal Equipment={Equipment} type="ring_1" />
                }
              />
              <OpenModalButton
                className={styles.slot}
                buttonText={
                  currentBuild.ring_2 ? (
                    <img
                      loading="lazy"
                      className={styles.itemImg}
                      src={`https://ik.imagekit.io/phl0at/images/item_icons/${Equipment[
                        currentBuild.ring_2
                      ].name.replaceAll(" ", "")}.png`}
                    />
                  ) : (
                    <GiDiamondRing size="40" />
                  )
                }
                modalComponent={
                  <ItemsTableModal Equipment={Equipment} type="ring_2" />
                }
              />
            </div>
            <div className={styles.weapons}>
              <OpenModalButton
                className={styles.slot}
                buttonText={
                  currentBuild.ranged_mh ? (
                    <img
                      loading="lazy"
                      className={styles.itemImg}
                      src={`https://ik.imagekit.io/phl0at/images/item_icons/${Equipment[
                        currentBuild.ranged_mh
                      ].name.replaceAll(" ", "")}.png`}
                    />
                  ) : (
                    <GiBowArrow size="40" />
                  )
                }
                modalComponent={
                  <ItemsTableModal Equipment={Equipment} type="ranged_mh" />
                }
              />
              <OpenModalButton
                className={styles.slot}
                buttonText={
                  currentBuild.ranged_oh ? (
                    <img
                      loading="lazy"
                      className={styles.itemImg}
                      src={`https://ik.imagekit.io/phl0at/images/item_icons/${Equipment[
                        currentBuild.ranged_oh
                      ].name.replaceAll(" ", "")}.png`}
                    />
                  ) : (
                    <GiCrossbow size="40" />
                  )
                }
                modalComponent={
                  <ItemsTableModal Equipment={Equipment} type="ranged_oh" />
                }
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
