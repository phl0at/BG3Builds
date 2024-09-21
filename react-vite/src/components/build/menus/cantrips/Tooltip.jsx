// Files
import styles from "./Cantrips.module.css";
// Functions/Components
// Packages
import {
  GiDiceTwentyFacesOne,
  GiBoltEye,
  GiCrossedSwords,
  GiTargeted,
} from "react-icons/gi";
import { CiMaximize1 } from "react-icons/ci";
import { useState } from "react";

export default function Tooltip({ cantrip, children }) {
  const [display, setDisplay] = useState(false);

  return (
    <div
      className={styles.tooltipContainer}
      onMouseEnter={() => setDisplay(true)}
      onMouseLeave={() => setDisplay(false)}
    >
      {children}
      {display && (
        <div className={styles.tooltip} >
          <div className={styles.cantripName}>{cantrip.name}</div>
          <div
            className={styles.cantripSchool}
          >{`${cantrip.school} Cantrip`}</div>
          <div className={styles.cantripDamage}>
            {cantrip.damage && `${cantrip.damage.replace("d", "~")} Damage`}
          </div>
          <div
            className={`${styles.cantripDamageType} ${
              styles[cantrip.damage_type]
            }`}
          >
            {cantrip.damage && <GiDiceTwentyFacesOne />}
            {cantrip.damage && `${cantrip.damage} ${cantrip.damage_type}`}
          </div>
          <div className={styles.cantripDescription}>{cantrip.description}</div>
          {cantrip.duration > 0 && (
            <div className={styles.cantripDuration}>
              {cantrip.duration} {`${cantrip.duration > 1 ? "turns" : "turn"}`}
            </div>
          )}
          <div className={styles.cantripDetails}>
            <div className={styles.range}>
              {cantrip.range > 2 ? (
                <>
                  <CiMaximize1 /> {cantrip.range}m
                </>
              ) : (
                <>
                  <GiCrossedSwords />
                  Melee
                </>
              )}
            </div>
            <div className={styles.radius}>
              {cantrip.radius && (
                <>
                  <GiTargeted /> {cantrip.radius}m
                </>
              )}
            </div>
            {cantrip.concentration && (
              <div className={styles.concentration}>
                <GiBoltEye /> Concentration
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
