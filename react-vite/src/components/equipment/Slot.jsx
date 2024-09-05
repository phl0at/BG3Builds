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
import { useSelector, useDispatch } from "react-redux";
import { PulseLoader } from "react-spinners";
import { thunkGetItems } from "../../redux/static";
// Functions/Components
const OpenModalButton = lazy(() => import("../modals"));
const ItemsTableModal = lazy(() => import("./items"));

export function EquipmentSlot({ type }) {
  const dispatch = useDispatch()
  const formatType = type.split("_")[0]
  const equippedItem = useSelector((state) => state.builds.current[type]);
  const itemObj = useSelector((state) => state.static.items[formatType]);
  const slotIcon = {
    helmet: <GiElfHelmet size="40" />,
    armour: <GiCapeArmor size="40" />,
    cloak: <GiCape size="40" />,
    glove: <GiGloves size="40" />,
    boot: <GiLegArmor size="40" />,
    melee_mh: <GiBroadsword size="40" />,
    melee_oh: <GiBroadDagger size="40" />,
    amulet: <GiEmeraldNecklace size="40" />,
    ring_1: <GiDiamondRing size="40" />,
    ring_2: <GiDiamondRing size="40" />,
    ranged_mh: <GiBowArrow size="40" />,
    ranged_oh: <GiCrossbow size="40" />,
  };

  const onClick = () => {
    dispatch(thunkGetItems(formatType))
  }

  console.log(itemObj, equippedItem)

  return (
    <OpenModalButton
      onButtonClick={onClick}
      className={styles.slot}
      buttonText={
        equippedItem ? (
          <IKImage
            className={styles.itemImg}
            path={`item_icons/${formatType}/${itemObj[equippedItem].name}.png`}
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
