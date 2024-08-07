//Files
import styles from "./SaveModal.module.css";
//Functions/Components
import { useModal } from "../../../context/Modal";
import ErrorModal from "../error/ErrorModal";
//Packages
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export default function SaveBuildModal({ title, thunk }) {
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const { closeModal, setModalContent } = useModal();
  const currentBuild = useSelector((state) => state.builds.current);
  const [charName, setCharName] = useState(currentBuild.character_name);
  const [buildName, setBuildName] = useState(
    title === "Update" ? currentBuild.name : ""
  );
  const [errors, setErrors] = useState("");

  const submit = async (e) => {
    setErrors("");
    e.preventDefault();
    if (buildName.trim().length < 3 || buildName.length > 25) {
      setErrors("Names must be 3 to 25 characters");
    } else if (charName.trim().length < 3 || charName.length > 25) {
      setErrors("Names must be 3 to 25 characters");
    } else if (currentBuild.points > 0) {
      setErrors("Please spend all ability points");
    } else if (!currentBuild.plus_1 || !currentBuild.plus_2) {
      setErrors("Please select both ability bonuses");
    } else {
      const serverResponse = await dispatch(
        thunk(currentBuild, {
          name: buildName,
          character_name: charName,
        })
      );

      if (serverResponse.id) {
        if (title === "Create") {
          navigateTo(`/build/${serverResponse.id}`);
        }
        closeModal();
      } else {
        setModalContent(<ErrorModal errors={serverResponse} />);
      }
    }
  };
  return (
    <main className={styles.main}>
      <div className={styles.title}>{title}</div>
      <div className={styles.error}>{errors}</div>
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
        />
        <button className={styles.submitButton} type="submit">
          Submit
        </button>
      </form>
    </main>
  );
}
