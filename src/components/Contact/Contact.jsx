import { FaUser, FaPhoneAlt } from "react-icons/fa";

import { deleteContact } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";

const Contact = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();

  return (
    <>
      <p>
        <FaUser /> {name}
      </p>
      <p>
        <FaPhoneAlt /> {number}
      </p>
      <button
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      >
        Delete
      </button>
    </>
  );
};

export default Contact;
