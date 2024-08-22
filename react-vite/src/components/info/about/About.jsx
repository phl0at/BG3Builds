// Files
import styles from "../Info.module.css";
// Functions/Components
import { getBuildClassArray } from "../../../redux/build";
import { CreateButton, DisplayButton } from "../Button";
import { applyEquipmentStats } from "../../../utils/helper";
// Packages
import { useSelector } from "react-redux";
import { BsFillHexagonFill } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";

export default function AboutBuild({ display, setDisplay }) {
  const { buildId } = useParams();
  const build_classes = useSelector(getBuildClassArray);
  const currentBuild = useSelector((state) => state.builds.current);
  const Backgrounds = useSelector((state) => state.static.backgrounds);
  const Races = useSelector((state) => state.static.races);
  const Items = useSelector((state) => state.static.items);
  const [modifiedBuild, setModifiedBuild] = useState({});
  const newBuild = useMemo(()=> applyEquipmentStats(currentBuild, Items), [currentBuild, Items])
  const {
    strength,
    dexterity,
    constitution,
    intelligence,
    wisdom,
    charisma,
    helmet,
    cloak,
    armour,
    glove,
    boot,
    amulet,
    ring_1,
    ring_2,
    melee_mh,
    melee_oh,
    ranged_mh,
    ranged_oh,
  } = useSelector((state) => state.builds.current);

  useEffect(() => {
    setModifiedBuild(newBuild);
  }, [
    strength,
    dexterity,
    constitution,
    intelligence,
    wisdom,
    charisma,
    helmet,
    cloak,
    armour,
    glove,
    boot,
    amulet,
    ring_1,
    ring_2,
    melee_mh,
    melee_oh,
    ranged_mh,
    ranged_oh,
  ]);

  const abilities = [
    "Strength",
    "Dexterity",
    "Constitution",
    "Intelligence",
    "Wisdom",
    "Charisma",
  ];

  return (
    <>
      <div className={styles.header}>
        {buildId && <DisplayButton display={display} setDisplay={setDisplay} />}
        <div className={styles.title}>Information</div>
        {buildId && <CreateButton display={display} setDisplay={setDisplay} />}
      </div>
      <div className={styles.mainClass}>
        {build_classes[0] && (
          <img
            src={`https://ik.imagekit.io/phl0at/images/class_icons/${build_classes[0].name}.png`}
          />
        )}
      </div>
      <div className={styles.infoBody}>
        <div className={styles.infoAttributes}>
          {abilities.map((ability) => {
            return (
              <div key={ability} className={styles.stat}>
                <div className={styles.modifier}>
                  {build_classes[0]?.modifier === ability.toLowerCase() && (
                    <BsFillHexagonFill color="#e69a28" size="14" />
                  )}
                </div>
                <div className={styles.orange}>{ability.slice(0, 3)}</div>
                <div>{modifiedBuild[ability.toLowerCase()]}</div>
              </div>
            );
          })}
        </div>
        <div className={styles.infoClasses}>
          {build_classes.map((_class) => (
            <div className={styles.infoClass} key={_class.class_id}>
              <img
                title={_class.name}
                className={styles.listImage}
                src={`https://ik.imagekit.io/phl0at/images/class_icons/${_class.name}.png`}
              />
              <div>{_class.level}</div>
            </div>
          ))}
        </div>
        <div className={styles.infoCharacter}>
          <div className={styles.char}>{currentBuild.character_name}</div>|
          <div className={styles.char}>{Races[currentBuild.race].name}</div>|
          <div className={styles.char}>
            {Backgrounds[currentBuild.background].name}
          </div>
        </div>
      </div>
    </>
  );
}
