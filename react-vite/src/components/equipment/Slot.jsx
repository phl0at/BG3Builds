// Files
import styles from "./Equipment.module.css";
// Packages
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
import { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import { PulseLoader } from "react-spinners";
// Functions/Components
const OpenModalButton = lazy(() => import("../modals"));
const ItemsTableModal = lazy(() => import("./items"));

export function EquipmentSlot({ type }) {
  const Equipment = useSelector((state) => state.static.equipment);
  const equippedItem = useSelector((state) => state.builds.current[type]);
  const formatType = type.split("_")[0];
  const slotIcon = {
    helmet: <GiElfHelmet size="40" />,
    armor: <GiCapeArmor size="40" />,
    cloak: <GiCape size="40" />,
    gloves: <GiGloves size="40" />,
    boots: <GiLegArmor size="40" />,
    melee_mh: <GiBroadsword size="40" />,
    melee_oh: <GiBroadDagger size="40" />,
    amulet: <GiEmeraldNecklace size="40" />,
    ring_1: <GiDiamondRing size="40" />,
    ring_2: <GiDiamondRing size="40" />,
    ranged_mh: <GiBowArrow size="40" />,
    ranged_oh: <GiCrossbow size="40" />,
  };

  return (
    <OpenModalButton
      className={styles.slot}
      buttonText={
        equippedItem ? (
          <IKImage
            className={styles.itemImg}
            path={`item_icons/${Equipment[equippedItem].name}.png`}
          />
        ) : (
          slotIcon[type]
        )
      }
      modalComponent={
        <Suspense fallback={<PulseLoader color="#e4c274" />}>
          <ItemsTableModal type={type} />
        </Suspense>
      }
    />
  );
}
