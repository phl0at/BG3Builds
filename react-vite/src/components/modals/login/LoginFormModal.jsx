import { useState } from "react";
import { thunkLogin } from "../../../redux/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../../context/Modal";
import styles from "./LoginForm.module.css";

function LoginFormModal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serverResponse = await dispatch(
      thunkLogin({
        email,
        password,
      })
    );

    if (serverResponse) {
      setErrors(serverResponse);
    } else {
      closeModal();
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.title}>Log In</div>
      <div className={styles.error}>{errors.email && errors.email}</div>
      <div className={styles.error}>{errors.password && errors.password}</div>
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
        <button className={styles.submitButton} type="submit">Submit</button>
      </form>
    </main>
  );
}

export default LoginFormModal;
