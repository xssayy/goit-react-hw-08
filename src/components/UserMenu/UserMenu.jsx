import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import style from "./UserMenu.module.css";
export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={style.container}>
      <p className={style.welcome}>Welcome, {user.name}</p>
      <button
        type="button"
        className={style.button}
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};
