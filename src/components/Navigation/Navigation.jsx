import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import style from "./Navigation.module.css";
export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={style.container}>
      <NavLink className={style.navLink} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={style.navLink} to="/tasks">
          Tasks
        </NavLink>
      )}
    </nav>
  );
};
