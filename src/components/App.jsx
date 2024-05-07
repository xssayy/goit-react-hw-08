import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "../redux/auth/operations";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import { RestrictedRoute } from "./RestrictedRoute";
import RegistrationPage from "../pages/RegistrationPage";
import LoginForm from "../pages/LoginForm/LoginForm";
import { PrivateRoute } from "./PrivateRoute";
import ContactsPage from "../pages/ContactsPage";
import { Layout } from "./Layout";
import { selectisRefreshing } from "../redux/auth/selectors";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  const isRefreshing = useSelector(selectisRefreshing);

  if (isRefreshing) {
    return <div>Loading...</div>;
  }
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegistrationPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginForm />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
