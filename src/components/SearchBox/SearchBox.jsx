import { useId } from "react";
import style from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectContacts } from "../../redux/contacts/selectors";
import { selectFilter } from "../../redux/filters/selectors";
const SearchBox = () => {
  const id = useId();
  const contacts = useSelector(selectContacts);
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();
  return (
    <div className={style.container}>
      {contacts.length > 0 && (
        <>
          {" "}
          <label htmlFor={id}>Find contacts by name</label>
          <input
            id={id}
            type="text"
            value={value}
            onChange={(e) => dispatch(changeFilter(e.target.value))}
          />
        </>
      )}
    </div>
  );
};

export default SearchBox;
