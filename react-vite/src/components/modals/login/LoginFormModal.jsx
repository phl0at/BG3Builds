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
  const [errors, setErrors] = useState("");
  const { closeModal, setModalContent } = useModal();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors("");
    const validTLDs = ["com", "net", "mil", "org", "edu"];
    const emailTLD = email.split(".")[email.split(".").length - 1];

    if (!email.includes("@")) {
      setErrors("Please enter a valid email address");
    } else if (!validTLDs.includes(emailTLD)) {
      setErrors("Email must end in .com, .net, .mil, .org, or .edu");
    } else {
      
      setLoading(true);
      const serverResponse = await dispatch(
        thunkLogin({
          email,
          password,
        })
      );

      if (serverResponse) {
        setModalContent(<ErrorModal errors={serverResponse} />);
        setLoading(false);
      } else {
        closeModal();
      }
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.title}>Log In</div>
      <div className={styles.error}>{errors}</div>
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
