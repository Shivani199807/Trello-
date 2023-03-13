import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Trello from "../containers/Trello";
import Login from "../containers/login";
import Register from "../containers/Register";
const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/board" element={<Trello />} />

        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default Routing;
