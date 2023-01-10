import { Link } from "react-router-dom";
import logo from "../assets/images/logo-bg.png";
import classes from "../styles/Nav.module.css";
import Account from "./Account";

export default function Nav() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link to="/" className={classes.brand}>
            <img src={logo} alt="nstu iit logo" />
            <h3>IIT-Class-Marker</h3>
          </Link>
        </li>
      </ul>
      <Account />
    </nav>
  );
}
