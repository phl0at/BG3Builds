//Files
import styles from "./Equipment.module.css";
//Functions/Components
//Packages
import { useSelector } from "react-redux";
import { CiNoWaitingSign } from "react-icons/ci";
import { useState } from "react";

export default function EquipmentComponent({ activeMenu }) {
  const currentBuild = useSelector((state) => state.builds.current);
  const [helmImg, setHelmImg] = useState(null);
  const [cloakImg, setCloakImg] = useState(null);
  const [armorImg, setArmorImg] = useState(null);
  const [gloveImg, setGloveImg] = useState(null);
  const [bootImg, setBootImg] = useState(null);

  return (
    <main className={styles.main}>
      <div className={styles.title}>Equipment</div>
      <div className={styles.equipment}>
        <div className={styles.left}>
          <div className={styles.armor}>
            <button className={styles.slot}>
              <CiNoWaitingSign size="40" />
            </button>
            <button className={styles.slot}>
              <CiNoWaitingSign size="40" />
            </button>
            <button className={styles.slot}>
              <CiNoWaitingSign size="40" />
            </button>
            <button className={styles.slot}>
              <CiNoWaitingSign size="40" />
            </button>
            <button className={styles.slot}>
              <CiNoWaitingSign size="40" />
            </button>
          </div>
          <div className={styles.weapons}>
            <button className={styles.slot}>
              <CiNoWaitingSign size="40" />
            </button>
            <button className={styles.slot}>
              <CiNoWaitingSign size="40" />
            </button>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.accessories}>
            <div className={styles.armorClass}></div>
            <button className={styles.slot}>
              <CiNoWaitingSign size="40" />
            </button>
            <button className={styles.slot}>
              <CiNoWaitingSign size="40" />
            </button>
            <button className={styles.slot}>
              <CiNoWaitingSign size="40" />
            </button>
          </div>
          <div className={styles.weapons}>
            <button className={styles.slot}>
              <CiNoWaitingSign size="40" />
            </button>
            <button className={styles.slot}>
              <CiNoWaitingSign size="40" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
