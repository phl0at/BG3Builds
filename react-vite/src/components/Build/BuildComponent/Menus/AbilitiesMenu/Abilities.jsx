//Files
import styles from "./Abilities.module.css";
import { Images } from "../../../../images";
//Functions/Components

//Packages
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function AbilitiesComponent({ currentBuild }) {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [strength, setStrength] = useState(8);
  const [dexterity, setDexterity] = useState(8);
  const [constitution, setConstitution] = useState(8);
  const [intelligence, setIntelligence] = useState(8);
  const [wisdom, setWisdom] = useState(8);
  const [charisma, setCharisma] = useState(8);
  const [plus_1, setPlus_1] = useState("");
  const [plus_2, setPlus_2] = useState("");
  const [points, setPoints] = useState(27);

  const onClick = (e, background) => {
    e.preventDefault();
    setErrors({});
  };

  return (
    <>
      <div className={styles.title}>Abilities</div>
      <div className={styles.points}>{`Ability Points: ${points}`}</div>
      <div className={styles.abilList}>
        <div className={styles.stat}>
          <div className={styles.label}>
            <img className={styles.statImg} src={Images.abilities.Strength} />
            <div className={styles.name}>Strength</div>
          </div>
          <div className={styles.values}>
            <button
              disabled={strength < 9}
              onClick={(e) => {
                e.preventDefault();
                let value = strength;
                let remaining = points;
                remaining++;
                value--;
                setStrength(value);
                setPoints(remaining);
              }}
            >
              -
            </button>
            <input
              className={styles.input}
              min="8"
              max="17"
              type="number"
              value={strength}
              onChange={(e) => setStrength(e.target.value)}
            />
            <button
              disabled={strength > 14}
              onClick={(e) => {
                e.preventDefault();
                if (points > 0) {
                  let value = strength;
                  let remaining = points;
                  remaining--;
                  value++;
                  setStrength(value);
                  setPoints(remaining);
                }
              }}
            >
              +
            </button>
            <div className={styles.bonuses}>
              <input type="checkbox" className={styles.plusOne} />
              <input type="checkbox" className={styles.plusTwo} />
            </div>
          </div>
        </div>
        <div className={styles.stat}>
          <div className={styles.label}>
            <img className={styles.statImg} src={Images.abilities.Dexterity} />
            <div className={styles.name}>Dexterity</div>
          </div>
          <div className={styles.values}>
            <button
              disabled={dexterity < 9}
              onClick={(e) => {
                e.preventDefault();
                let value = dexterity;
                let remaining = points;
                remaining++;
                value--;
                setDexterity(value);
                setPoints(remaining);
              }}
            >
              -
            </button>
            <input
              className={styles.input}
              type="number"
              value={dexterity}
              onChange={(e) => setDexterity(e.target.value)}
            />
            <button
              disabled={dexterity > 14}
              onClick={(e) => {
                e.preventDefault();
                if (points > 0) {
                  let value = dexterity;
                  let remaining = points;
                  remaining--;
                  value++;
                  setDexterity(value);
                  setPoints(remaining);
                }
              }}
            >
              +
            </button>
            <div className={styles.bonuses}>
              <input type="checkbox" className={styles.plusOne} />
              <input type="checkbox" className={styles.plusTwo} />
            </div>
          </div>
        </div>
        <div className={styles.stat}>
          <div className={styles.label}>
            <img
              className={styles.statImg}
              src={Images.abilities.Constitution}
            />
            <div className={styles.name}>Constitution</div>
          </div>
          <div className={styles.values}>
            <button
              disabled={constitution < 9}
              onClick={(e) => {
                e.preventDefault();
                let value = constitution;
                let remaining = points;
                remaining++;
                value--;
                setConstitution(value);
                setPoints(remaining);
              }}
            >
              -
            </button>
            <input
              className={styles.input}
              type="number"
              value={constitution}
              onChange={(e) => setConstitution(e.target.value)}
            />
            <button
              disabled={constitution > 14}
              onClick={(e) => {
                e.preventDefault();
                if (points > 0) {
                  let value = constitution;
                  let remaining = points;
                  remaining--;
                  value++;
                  setConstitution(value);
                  setPoints(remaining);
                }
              }}
            >
              +
            </button>
            <div className={styles.bonuses}>
              <input type="checkbox" className={styles.plusOne} />
              <input type="checkbox" className={styles.plusTwo} />
            </div>
          </div>
        </div>
        <div className={styles.stat}>
          <div className={styles.label}>
            <img
              className={styles.statImg}
              src={Images.abilities.Intelligence}
            />
            <div className={styles.name}>Intelligence</div>
          </div>
          <div className={styles.values}>
            <button
              disabled={intelligence < 9}
              onClick={(e) => {
                e.preventDefault();
                let value = intelligence;
                let remaining = points;
                remaining++;
                value--;
                setIntelligence(value);
                setPoints(remaining);
              }}
            >
              -
            </button>
            <input
              className={styles.input}
              type="number"
              value={intelligence}
              onChange={(e) => setIntelligence(e.target.value)}
            />
            <button
              disabled={intelligence > 14}
              onClick={(e) => {
                e.preventDefault();
                if (points > 0) {
                  let value = intelligence;
                  let remaining = points;
                  remaining--;
                  value++;
                  setIntelligence(value);
                  setPoints(remaining);
                }
              }}
            >
              +
            </button>
            <div className={styles.bonuses}>
              <input type="checkbox" className={styles.plusOne} />
              <input type="checkbox" className={styles.plusTwo} />
            </div>
          </div>
        </div>
        <div className={styles.stat}>
          <div className={styles.label}>
            <img className={styles.statImg} src={Images.abilities.Wisdom} />
            <div className={styles.name}>Wisdom</div>
          </div>
          <div className={styles.values}>
            <button
              disabled={wisdom < 9}
              onClick={(e) => {
                e.preventDefault();
                let value = wisdom;
                let remaining = points;
                remaining++;
                value--;
                setWisdom(value);
                setPoints(remaining);
              }}
            >
              -
            </button>
            <input
              className={styles.input}
              type="number"
              value={wisdom}
              onChange={(e) => setWisdom(e.target.value)}
            />
            <button
              disabled={wisdom > 14}
              onClick={(e) => {
                e.preventDefault();
                if (points > 0) {
                  let value = wisdom;
                  let remaining = points;
                  remaining--;
                  value++;
                  setWisdom(value);
                  setPoints(remaining);
                }
              }}
            >
              +
            </button>
            <div className={styles.bonuses}>
              <input type="checkbox" className={styles.plusOne} />
              <input type="checkbox" className={styles.plusTwo} />
            </div>
          </div>
        </div>
        <div className={styles.stat}>
          <div className={styles.label}>
            <img className={styles.statImg} src={Images.abilities.Charisma} />
            <div className={styles.name}>Charisma</div>
          </div>
          <div className={styles.values}>
            <button
              disabled={charisma < 9}
              onClick={(e) => {
                e.preventDefault();
                let value = charisma;
                let remaining = points;
                remaining++;
                value--;
                setCharisma(value);
                setPoints(remaining);
              }}
            >
              -
            </button>
            <input
              className={styles.input}
              type="number"
              value={charisma}
              onChange={(e) => setCharisma(e.target.value)}
            />
            <button
              disabled={charisma > 14}
              onClick={(e) => {
                e.preventDefault();
                if (points > 0) {
                  let value = charisma;
                  let remaining = points;
                  remaining--;
                  value++;
                  setCharisma(value);
                  setPoints(remaining);
                }
              }}
            >
              +
            </button>
            <div className={styles.bonuses}>
              <input type="checkbox" className={styles.plusOne} />
              <input type="checkbox" className={styles.plusTwo} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
