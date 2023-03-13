import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "../components/Header";
import Board from "./Board";
import Login from "./login";
import Register from "./Register";
const Routing = () => {
  return (
    <Router>
      {/* <Route path="/"> */}
      {/* <Header /> */}
      <Routes>
        <Route path="/board" element={<Board />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      {/* </Route>
      <Redirect from="/" to="/login" /> */}
    </Router>
  );
};

export default Routing;
