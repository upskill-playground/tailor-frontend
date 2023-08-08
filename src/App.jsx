import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Customers from "./pages/customers";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import OtpPage from "./pages/OTP";
import Tasks from "./pages/tasks";
import PrivateRoutes from "./utils/PrivateRoutes";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route element={<Dashboard />} exact path="/" />
          <Route element={<Customers />} path="/customers" />
          <Route element={<Tasks />} path="/tasks" />
        </Route>
        <Route element={<Login />} path="/login" />
        <Route element={<OtpPage />} path="/OTP" />
      </Routes>
    </Router>
  );
};

export default App;
