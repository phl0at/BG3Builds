//Files
import styles from "./SaveModal.module.css";
//Functions/Components
//Packages
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { thunkCreateBuild } from "../../../../redux/build";

export default function SaveBuildModal() {
  const currentBuild = useSelector((state) => state.builds.current);
  const [charName, setCharName] = useState(currentBuild.character_name);
  const [buildName, setBuildName] = useState("");
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  const submit = (e) => {
    setErrors({});
    e.preventDefault();
    if (buildName.trim().length < 3 || buildName.length > 25) {
      setErrors({ error: "Names must be 3 to 25 characters" });
    } else if (charName.trim().length < 3 || charName.length > 25) {
      setErrors({ error: "Names must be 3 to 25 characters" });
    } else {
      dispatch(thunkCreateBuild(currentBuild, { name: buildName }));
    }
  };
  return (
    <main className={styles.main}>
      <div className={styles.title}>Save Build</div>
      <div className={styles.error}>{errors && errors.error}</div>
      <form className={styles.form} type="submit" onSubmit={submit}>
        {currentBuild.origin === 8 ? (
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
