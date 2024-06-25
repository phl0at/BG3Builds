//Files
import styles from "./Equipment.module.css";
//Functions/Components
import OpenModalButton from "../../Modal";
//Packages
import { useSelector } from "react-redux";
import { CiNoWaitingSign } from "react-icons/ci";
import { useState } from "react";
import ItemsTableModal from "./ItemTable";

export default function EquipmentComponent({ activeMenu }) {
  const currentBuild = useSelector((state) => state.builds.current);
  const [helmImg, setHelmImg] = useState(null);
  const [cloakImg, setCloakImg] = useState(null);
  const [armorImg, setArmorImg] = useState(null);
  const [gloveImg, setGloveImg] = useState(null);
  const [bootImg, setBootImg] = useState(null);
  const [amuletImg, setAmuletImg] = useState(null);
  const [ring1Img, setRing1Img] = useState(null);
  const [ring2Img, setRing2Img] = useState(null);
  const [meleeMainHandImg, setMeleeMainHandImg] = useState(null);
  const [meleeOffHandImg, setMeleeOffHandImg] = useState(null);
  const [rangedOffHandImg, setRangedOffHandImg] = useState(null);
  const [rangedMainHandImg, setRangedMainHandImg] = useState(null);

  const onClick = () => {};

  return (
    <main className={styles.main}>
      <div className={styles.title}>Equipment</div>
      <div className={styles.equipment}>
        <div className={styles.left}>
          <div className={styles.armor}>
            <OpenModalButton
              className={styles.slot}
              buttonText={helmImg ? helmImg : <CiNoWaitingSign size="40" />}
              modalComponent={<ItemsTableModal type="helmet" />}
            />

            <OpenModalButton
              className={styles.slot}
              buttonText={cloakImg ? cloakImg : <CiNoWaitingSign size="40" />}
              modalComponent={<ItemsTableModal type="cloak" />}
            />

            <OpenModalButton
              className={styles.slot}
              buttonText={armorImg ? armorImg : <CiNoWaitingSign size="40" />}
              modalComponent={<ItemsTableModal type="armor" />}
            />

            <OpenModalButton
              className={styles.slot}
              buttonText={gloveImg ? gloveImg : <CiNoWaitingSign size="40" />}
              modalComponent={<ItemsTableModal type="gloves" />}
            />

            <OpenModalButton
              className={styles.slot}
              buttonText={bootImg ? bootImg : <CiNoWaitingSign size="40" />}
              modalComponent={<ItemsTableModal type="boots" />}
            />
          </div>
          <div className={styles.weapons}>
            <OpenModalButton
              className={styles.slot}
              buttonText={
                meleeMainHandImg ? (
                  meleeMainHandImg
                ) : (
                  <CiNoWaitingSign size="40" />
                )
              }
              modalComponent={<ItemsTableModal type="melee" />}
            />
            <OpenModalButton
              className={styles.slot}
              buttonText={
                meleeOffHandImg ? (
                  meleeOffHandImg
                ) : (
                  <CiNoWaitingSign size="40" />
                )
              }
              modalComponent={<ItemsTableModal type="melee" />}
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
              buttonText={amuletImg ? amuletImg : <CiNoWaitingSign size="40" />}
              modalComponent={<ItemsTableModal type="amulet" />}
            />
            <OpenModalButton
              className={styles.slot}
              buttonText={ring1Img ? ring1Img : <CiNoWaitingSign size="40" />}
              modalComponent={<ItemsTableModal type="ring" />}
            />
            <OpenModalButton
              className={styles.slot}
              buttonText={ring2Img ? ring2Img : <CiNoWaitingSign size="40" />}
              modalComponent={<ItemsTableModal type="ring" />}
            />
          </div>
          <div className={styles.weapons}>
            <OpenModalButton
              className={styles.slot}
              buttonText={
                rangedMainHandImg ? (
                  rangedMainHandImg
                ) : (
                  <CiNoWaitingSign size="40" />
                )
              }
              modalComponent={<ItemsTableModal type="ranged" />}
            />
            <OpenModalButton
              className={styles.slot}
              buttonText={
                rangedOffHandImg ? (
                  rangedOffHandImg
                ) : (
                  <CiNoWaitingSign size="40" />
                )
              }
              modalComponent={<ItemsTableModal type="ranged" />}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
