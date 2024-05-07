import { NavLink } from "react-router-dom";
import style from "./AuthNav.module.css";

export const AuthNav = () => {
  return (
    <div className={style.container}>
      <NavLink className={style.navLink} to="/register">
        Register
      </NavLink>
      <NavLink className={style.navLink} to="/login">
        Log In
      </NavLink>
    </div>
  );
};
