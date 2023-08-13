import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Customers from "./pages/customers";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import OtpPage from "./pages/OTP";
import Settings from "./pages/settings";
import Tasks from "./pages/tasks";
import PrivateRoutes from "./utils/PrivateRoutes";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <Router>
      <Toaster />
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route element={<Dashboard />} exact path="/dashboard" />
          <Route element={<Customers />} path="/customers" exact />
          <Route element={<Tasks />} path="/tasks" exact />
          <Route element={<Settings />} path="/settings" exact />
        </Route>
        <Route element={<Login />} path="/login" />
        <Route element={<OtpPage />} path="/OTP" />
        <Route exact path="/" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
