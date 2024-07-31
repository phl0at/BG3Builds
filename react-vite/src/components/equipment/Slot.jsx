import styles from "./Equipment.module.css";
import { useSelector } from "react-redux";
import OpenModalButton from "../modals";
import ItemsTableModal from "./items";
import {
  GiElfHelmet,
  GiCape,
  GiCapeArmor,
  GiGloves,
  GiLegArmor,
  GiBroadsword,
  GiBroadDagger,
  GiBowArrow,
  GiCrossbow,
  GiEmeraldNecklace,
  GiDiamondRing,
} from "react-icons/gi";
import { IKImage } from "imagekitio-react";

export function EquipmentSlot({ type }) {
  const Equipment = useSelector((state) => state.static.equipment);
  const equippedItem = useSelector((state) => state.builds.current[type]);
  const defaultIcon =
    type === "helmet" ? (
      <GiElfHelmet size="40" />
    ) : type === "cloak" ? (
      <GiCape size="40" />
    ) : type === "armor" ? (
      <GiCapeArmor size="40" />
    ) : type === "gloves" ? (
      <GiGloves size="40" />
    ) : type === "boots" ? (
      <GiLegArmor size="40" />
    ) : type === "melee_mh" ? (
      <GiBroadsword size="40" />
    ) : type === "melee_oh" ? (
      <GiBroadDagger size="40" />
    ) : type === "ranged_mh" ? (
      <GiBowArrow size="40" />
    ) : type === "ranged_oh" ? (
      <GiCrossbow size="40" />
    ) : type === "amulet" ? (
      <GiEmeraldNecklace size="40" />
    ) : type === "ring_1" || type === "ring_2" ? (
      <GiDiamondRing size="40" />
    ) : (
      ""
    );

  return (
    <OpenModalButton
      className={styles.slot}
      buttonText={
        equippedItem ? (
          <IKImage
            loading="lazy"
            className={styles.itemImg}
            path={`item_icons/${Equipment[equippedItem].name}.png`}
          />
        ) : (
          defaultIcon
        )
      }
      modalComponent={<ItemsTableModal type={type} />}
    />
  );
}
