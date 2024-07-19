//Files
import styles from "./Equipment.module.css";
import { Images } from "../images";
//Functions/Components
import OpenModalButton from "../modals";
import ItemsTableModal from "./items";
//Packages
import { useSelector } from "react-redux";
import { CiNoWaitingSign } from "react-icons/ci";
import { GiElfHelmet, GiCape, GiCapeArmor, GiGloves, GiLegArmor, GiBroadsword, GiBroadDagger, GiCrossbow, GiBowArrow, GiEmeraldNecklace, GiDiamondRing     } from "react-icons/gi";

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
                      className={styles.itemImg}
                      src={
                        Equipment &&
                        Images.equipment[
                          Equipment[currentBuild.helmet].name.replaceAll(
                            " ",
                            ""
                          )
                        ]
                      }
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
                      className={styles.itemImg}
                      src={
                        Equipment &&
                        Images.equipment[
                          Equipment[currentBuild.cloak].name.replaceAll(" ", "")
                        ]
                      }
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
                      src={
                        Equipment &&
                        Images.equipment[
                          Equipment[currentBuild.armor].name.replaceAll(" ", "")
                        ]
                      }
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
                      className={styles.itemImg}
                      src={
                        Equipment &&
                        Images.equipment[
                          Equipment[currentBuild.gloves].name.replaceAll(
                            " ",
                            ""
                          )
                        ]
                      }
                    />
                  ) : (
                    <GiGloves  size="40" />
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
                      className={styles.itemImg}
                      src={
                        Equipment &&
                        Images.equipment[
                          Equipment[currentBuild.boots].name.replaceAll(" ", "")
                        ]
                      }
                    />
                  ) : (
                    <GiLegArmor  size="40" />
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
                      className={styles.itemImg}
                      src={
                        Equipment &&
                        Images.equipment[
                          Equipment[currentBuild.melee_mh].name.replaceAll(
                            " ",
                            ""
                          )
                        ]
                      }
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
                      className={styles.itemImg}
                      src={
                        Equipment &&
                        Images.equipment[
                          Equipment[currentBuild.melee_oh].name.replaceAll(
                            " ",
                            ""
                          )
                        ]
                      }
                    />
                  ) : (
                    <GiBroadDagger  size="40" />
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
                      className={styles.itemImg}
                      src={
                        Equipment &&
                        Images.equipment[
                          Equipment[currentBuild.amulet].name.replaceAll(
                            " ",
                            ""
                          )
                        ]
                      }
                    />
                  ) : (
                    <GiEmeraldNecklace  size="40" />
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
                      className={styles.itemImg}
                      src={
                        Equipment &&
                        Images.equipment[
                          Equipment[currentBuild.ring_1].name.replaceAll(
                            " ",
                            ""
                          )
                        ]
                      }
                    />
                  ) : (
                    <GiDiamondRing   size="40" />
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
                      className={styles.itemImg}
                      src={
                        Equipment &&
                        Images.equipment[
                          Equipment[currentBuild.ring_2].name.replaceAll(
                            " ",
                            ""
                          )
                        ]
                      }
                    />
                  ) : (
                    <GiDiamondRing  size="40" />
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
                      className={styles.itemImg}
                      src={
                        Equipment &&
                        Images.equipment[
                          Equipment[currentBuild.ranged_mh].name.replaceAll(
                            " ",
                            ""
                          )
                        ]
                      }
                    />
                  ) : (
                    <GiBowArrow  size="40" />
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
                      className={styles.itemImg}
                      src={
                        Equipment &&
                        Images.equipment[
                          Equipment[currentBuild.ranged_oh].name.replaceAll(
                            " ",
                            ""
                          )
                        ]
                      }
                    />
                  ) : (
                    <GiCrossbow  size="40" />
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
