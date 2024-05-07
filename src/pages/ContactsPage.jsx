import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import SearchBox from "../components/SearchBox/SearchBox";
import { selectIsLoading } from "../redux/contacts/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contacts/operations";

const ContactsPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <>
        <h1>Phonebook</h1>
        <ContactForm />
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <SearchBox />
            <ContactList />
          </>
        )}
      </>
    </>
  );
};

export default ContactsPage;
