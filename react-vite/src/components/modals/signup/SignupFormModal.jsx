// Files
import styles from "./SignupForm.module.css";
// Functions/Components
import { thunkGetAllUsers } from "../../../redux/users";
import { thunkSignup } from "../../../redux/session";
import { useModal } from "../../../context/Modal";
import ErrorModal from "../error/ErrorModal";
// Packages
import { useState } from "react";
import { useDispatch } from "react-redux";

function SignupFormModal({ setLoading }) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState("");
  const { closeModal, setModalContent } = useModal();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validTLDs = ["com", "net", "mil", "org", "edu"];
    const emailTLD = email.split(".")[email.split(".").length - 1];

    if (!email.includes("@")) {
      setErrors("Please enter a valid email address");
    } else if (!validTLDs.includes(emailTLD)) {
      setErrors("Email must end in .com, .net, .mil, .org, or .edu");
    } else if (username.trim().length < 3 || username.trim().length > 25) {
      setErrors("Username must be 3 to 25 characters");
    } else if(password.includes(" ")) {
      setErrors("Passwords cannot have whitespace")
    } else if (password !== confirmPassword) {
      setErrors("Passwords must match");
    } else {

      setLoading(true);
      const serverResponse = await dispatch(
        thunkSignup({
          email,
          username,
          password,
        })
      );

      if (serverResponse) {
        setModalContent(<ErrorModal errors={serverResponse} />);
        setLoading(false);
      } else {
        dispatch(thunkGetAllUsers())
        closeModal();
      }
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.title}>Sign Up</div>
      <div className={styles.error}>{errors}</div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          value={username}
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          value={confirmPassword}
          placeholder="Confirm Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button className={styles.submitButton} type="submit">
          Submit
        </button>
      </form>
    </main>
  );
}

export default SignupFormModal;
