import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

import Trello from "../containers/Trello";
import Login from "../containers/login";
import Register from "../containers/Register";
const PrivateRoutes = () => {
  let userid = localStorage.getItem("UserDetails") == null ? false : true;
  return <>{userid ? <Outlet /> : <Navigate to="/" />};</>;
};

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route exact element={<PrivateRoutes />}>
          <Route exact path="/board" element={<Trello />} />
        </Route>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default Routing;
