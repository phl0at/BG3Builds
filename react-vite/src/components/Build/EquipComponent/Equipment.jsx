//Files
import styles from "./Equipment.module.css";
import { Images } from "../../images";
//Functions/Components
import OpenModalButton from "../../Modal";
import ItemsTableModal from "./ItemTable";
//Packages
import { useSelector } from "react-redux";
import { CiNoWaitingSign } from "react-icons/ci";

export default function EquipmentComponent({ activeMenu }) {
  const currentBuild = useSelector((state) => state.builds.current);

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
                        Images.equipment[
                          currentBuild.helmet.replaceAll(" ", "")
                        ]
                      }
                    />
                  ) : (
                    <CiNoWaitingSign size="40" />
                  )
                }
                modalComponent={<ItemsTableModal type="helmet" />}
              />

              <OpenModalButton
                className={styles.slot}
                buttonText={
                  currentBuild.cloak ? (
                    <img
                      className={styles.itemImg}
                      src={
                        Images.equipment[currentBuild.cloak.replaceAll(" ", "")]
                      }
                    />
                  ) : (
                    <CiNoWaitingSign size="40" />
                  )
                }
                modalComponent={<ItemsTableModal type="cloak" />}
              />

              <OpenModalButton
                className={styles.slot}
                buttonText={
                  currentBuild.armor ? (
                    <img
                      className={styles.itemImg}
                      src={
                        Images.equipment[currentBuild.armor.replaceAll(" ", "")]
                      }
                    />
                  ) : (
                    <CiNoWaitingSign size="40" />
                  )
                }
                modalComponent={<ItemsTableModal type="armor" />}
              />

              <OpenModalButton
                className={styles.slot}
                buttonText={
                  currentBuild.gloves ? (
                    <img
                      className={styles.itemImg}
                      src={
                        Images.equipment[
                          currentBuild.gloves.replaceAll(" ", "")
                        ]
                      }
                    />
                  ) : (
                    <CiNoWaitingSign size="40" />
                  )
                }
                modalComponent={<ItemsTableModal type="gloves" />}
              />

              <OpenModalButton
                className={styles.slot}
                buttonText={
                  currentBuild.boots ? (
                    <img
                      className={styles.itemImg}
                      src={
                        Images.equipment[currentBuild.boots.replaceAll(" ", "")]
                      }
                    />
                  ) : (
                    <CiNoWaitingSign size="40" />
                  )
                }
                modalComponent={<ItemsTableModal type="boots" />}
              />
            </div>
            <div className={styles.weapons}>
              <OpenModalButton
                className={styles.slot}
                buttonText={
                  currentBuild.melee ? (
                    <img
                      className={styles.itemImg}
                      src={
                        Images.equipment[currentBuild.melee.replaceAll(" ", "")]
                      }
                    />
                  ) : (
                    <CiNoWaitingSign size="40" />
                  )
                }
                modalComponent={<ItemsTableModal type="melee_mh" />}
              />
              <OpenModalButton
                className={styles.slot}
                buttonText={
                  currentBuild.melee ? (
                    <img
                      className={styles.itemImg}
                      src={
                        Images.equipment[currentBuild.melee.replaceAll(" ", "")]
                      }
                    />
                  ) : (
                    <CiNoWaitingSign size="40" />
                  )
                }
                modalComponent={<ItemsTableModal type="melee_oh" />}
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
                        Images.equipment[
                          currentBuild.amulet.replaceAll(" ", "")
                        ]
                      }
                    />
                  ) : (
                    <CiNoWaitingSign size="40" />
                  )
                }
                modalComponent={<ItemsTableModal type="amulet" />}
              />
              <OpenModalButton
                className={styles.slot}
                buttonText={
                  currentBuild.ring ? (
                    <img
                      className={styles.itemImg}
                      src={
                        Images.equipment[currentBuild.ring.replaceAll(" ", "")]
                      }
                    />
                  ) : (
                    <CiNoWaitingSign size="40" />
                  )
                }
                modalComponent={<ItemsTableModal type="ring_2" />}
              />
              <OpenModalButton
                className={styles.slot}
                buttonText={
                  currentBuild.ring ? (
                    <img
                      className={styles.itemImg}
                      src={
                        Images.equipment[currentBuild.ring.replaceAll(" ", "")]
                      }
                    />
                  ) : (
                    <CiNoWaitingSign size="40" />
                  )
                }
                modalComponent={<ItemsTableModal type="ring_1" />}
              />
            </div>
            <div className={styles.weapons}>
              <OpenModalButton
                className={styles.slot}
                buttonText={
                  currentBuild.ranged ? (
                    <img
                      className={styles.itemImg}
                      src={
                        Images.equipment[
                          currentBuild.ranged.replaceAll(" ", "")
                        ]
                      }
                    />
                  ) : (
                    <CiNoWaitingSign size="40" />
                  )
                }
                modalComponent={<ItemsTableModal type="ranged_mh" />}
              />
              <OpenModalButton
                className={styles.slot}
                buttonText={
                  currentBuild.ranged ? (
                    <img
                      className={styles.itemImg}
                      src={
                        Images.equipment[
                          currentBuild.ranged.replaceAll(" ", "")
                        ]
                      }
                    />
                  ) : (
                    <CiNoWaitingSign size="40" />
                  )
                }
                modalComponent={<ItemsTableModal type="ranged_oh" />}
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
