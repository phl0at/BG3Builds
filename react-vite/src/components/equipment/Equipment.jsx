//Files
import styles from "./Equipment.module.css";
//Functions/Components
import { EquipmentSlot } from "./Slot";
//Packages

export default function EquipmentComponent() {
  const armorTypes = ["helmet", "cloak", "armour", "gloves", "boots"];
  const accessoryTypes = ["amulet", "ring_1", "ring_2"];
  const meleeWeaponTypes = ["melee_mh", "melee_oh"];
  const rangeWeaponTypes = ["ranged_mh", "ranged_oh"];

  return (
    <main className={styles.main}>
      <div className={styles.title}>Equipment</div>
      <div className={styles.equipment}>
        <div className={styles.left}>
          <div className={styles.armor}>
            {armorTypes.map((type) => (
              <EquipmentSlot key={type} type={type} />
            ))}
          </div>
          <div className={styles.weapons}>
            {meleeWeaponTypes.map((type) => (
              <EquipmentSlot key={type} type={type} />
            ))}
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.accessories}>
            <div className={styles.armorClass}>
              <span>AC: 15</span>
            </div>
            {accessoryTypes.map((type) => (
              <EquipmentSlot key={type} type={type} />
            ))}
          </div>
          <div className={styles.weapons}>
            {rangeWeaponTypes.map((type) => (
              <EquipmentSlot key={type} type={type} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
