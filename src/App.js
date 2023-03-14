import React from "react";
import { Link, Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import Courses from "./Courses";
import Assignments from "./Assignments";
import Students from "./Students";
import Help from "./Help";
import ProductDetail from "./ProductDetail";
import Login from "./Login"; // import your Login component
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestion,
  faHome,
  faUser,
  faBook,
  faGraduationCap,
  faFile
} from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="container">
      <div className="sidebar">
        <ul>
          <li>
            {" "}
            <Link to="/">
              <FontAwesomeIcon icon={faHome} /> Dashboard
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/courses">
              <FontAwesomeIcon icon={faBook} /> Courses
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/assignments">
              <FontAwesomeIcon icon={faFile} /> Assignments
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/students">
              <FontAwesomeIcon icon={faGraduationCap} /> Students
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/login">
              <FontAwesomeIcon icon={faUser} /> Account
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/help">
              <FontAwesomeIcon icon={faQuestion} /> Help
            </Link>
          </li>
        </ul>
      </div>

      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route path="/">
          {/* Wrap the remaining routes in a nested Switch component */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/products">
              <Products />
            </Route>
            <Route path="/products/:productId">
              <ProductDetail />
            </Route>
            <Route exact path="/courses">
              <Courses />
            </Route>
            <Route exact path="/assignments">
              <Assignments />
            </Route>
            <Route exact path="/students">
              <Students />
            </Route>
            <Route exact path="/help">
              <Help />
            </Route>
            {/* If none of the above routes match, redirect to the home page */}
            <Route path="/">
              <Redirect to="/" />
            </Route>
          </Switch>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
