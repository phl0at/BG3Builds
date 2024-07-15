// Files
import styles from "./LoginForm.module.css";
// Functions/Components
import { thunkLogin } from "../../../redux/session";
import { useModal } from "../../../context/Modal";
import ErrorModal from "../error/ErrorModal";
// Packages
import { useDispatch } from "react-redux";
import { useState } from "react";

function LoginFormModal({ setLoading }) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { closeModal, setModalContent } = useModal();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const serverResponse = await dispatch(
      thunkLogin({
        email,
        password,
      })
    );

    if (serverResponse) {
      setModalContent(<ErrorModal errors={serverResponse} />);
    } else {
      closeModal();
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.title}>Log In</div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          value={email}
          placeholder={"Email"}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          value={password}
          placeholder={"Password"}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className={styles.submitButton} type="submit">
          Submit
        </button>
      </form>
    </main>
  );
}

export default LoginFormModal;
