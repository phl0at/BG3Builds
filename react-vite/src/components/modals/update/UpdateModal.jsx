//Files
import styles from "./UpdateModal.module.css";
//Functions/Components
import { thunkUpdateBuild } from "../../../redux/build";
import { useModal } from "../../../context/Modal";
//Packages
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export default function UpdateBuildModal({ points }) {
  const currentBuild = useSelector((state) => state.builds.current);
  const [charName, setCharName] = useState(currentBuild.character_name);
  const [buildName, setBuildName] = useState(currentBuild.name);
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const { closeModal } = useModal();

  const submit = async (e) => {
    setErrors({});
    e.preventDefault();
    if (buildName.trim().length < 3 || buildName.length > 25) {
      setErrors({ error: "Names must be 3 to 25 characters" });
    } else if (charName.trim().length < 3 || charName.length > 25) {
      setErrors({ error: "Names must be 3 to 25 characters" });
    } else if (points > 0) {
      setErrors({ error: "Please spend all ability points" });
    } else if (!currentBuild.plus_1 || !currentBuild.plus_2) {
      setErrors({ error: "Please select both ability bonuses" });
    } else {
      const success = await dispatch(
        thunkUpdateBuild(currentBuild, {
          name: buildName,
          character_name: charName,
        })
      );
      if (success.id) {
        closeModal();
      } else {
        setErrors({ errors: "An error occurred. Please try again later." });
      }
    }
  };
  return (
    <main className={styles.main}>
      <div className={styles.title}>Update</div>
      <div className={styles.error}>{errors && errors.error}</div>
      <form className={styles.form} type="submit" onSubmit={submit}>
        {currentBuild.origin === 8 || currentBuild.origin === 7 ? (
          <>
            <div className={styles.nameTitle}>Name your character & build</div>
            <input
              type="text"
              value={charName}
              placeholder="Character Name"
              onChange={(e) => setCharName(e.target.value)}
              required
            />
          </>
        ) : (
          <>
            <div className={styles.nameTitle}>Name your build</div>
            <div className={styles.nameTitle}>Character name: {charName}</div>
          </>
        )}
        <input
          type="text"
          value={buildName}
          placeholder="Build Name"
          onChange={(e) => setBuildName(e.target.value)}
          required
        />

        <button className={styles.submitButton} type="submit">
          Submit
        </button>
      </form>
    </main>
  );
}
