import { NavLink } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import "./Navigation.module.css";

function Navigation() {
  return (
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <ProfileButton />
      </li>
    </ul>
  );
}

export default Navigation;
