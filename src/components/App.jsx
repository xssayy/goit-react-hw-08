import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { refreshUser } from "../redux/auth/operations";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import { RestrictedRoute } from "./RestrictedRoute";
import RegistrationPage from "../pages/RegistrationPage";
import LoginForm from "../pages/LoginForm/LoginForm";
import { PrivateRoute } from "./PrivateRoute";
import ContactsPage from "../pages/ContactsPage";
import { Layout } from "./Layout";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/tasks"
              component={<RegistrationPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/tasks" component={<LoginForm />} />
          }
        />
        <Route
          path="/tasks"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
