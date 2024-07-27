// Files
import styles from "./ShareModal.module.css";
// Functions/Components
import { importCode } from "./helper";
import { action } from "../../../redux/build";
import { useModal } from "../../../context/Modal";
// Packages
import { CiImport } from "react-icons/ci";
import { FiClipboard } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

export default function ShareModal({ code }) {
  const dispatch = useDispatch();
  const { buildId } = useParams();
  const { closeModal } = useModal();
  const [existingCode, setExistingCode] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 2500);
    }
  }, [copied]);

  const copy = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(code);
    setCopied(true);
  };

  const submit = (e) => {
    e.preventDefault();
    const importedBuild = importCode(existingCode);
    dispatch(action("build/import", importedBuild));
    closeModal();
  };

  return (
    <main className={styles.main}>
      {buildId && (
        <div className={styles.outer}>
          <div className={styles.title}>Export Build</div>
          <div className={styles.copied}>{copied && "Copied to clipboard"}</div>
          <div className={styles.container}>
            <div className={styles.codeContainer}>
              <div className={styles.code}>{code}</div>
            </div>
            <button
              title="Copy to clipboard"
              className={styles.button}
              onClick={copy}
            >
              <FiClipboard size="30" />
            </button>
          </div>
        </div>
      )}
      {!buildId && (
        <div className={styles.outer}>
          <div className={styles.title}>Import</div>
          <div className={styles.copied}>Paste build code below</div>
          <div className={styles.container}>
            <input
              className={styles.input}
              type="text"
              value={existingCode}
              onChange={(e) => setExistingCode(e.target.value)}
            />
            <button className={styles.button} onClick={submit}>
              <CiImport size="30" />
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
