import React from "react";
import { Redirect, Route, Switch } from "react-router";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./My Components/Home";
import Menu from "./My Components/Menu";
import Contact from "./My Components/Contact";
import Navbar from "./My Components/Navbar";

<meta name="viewport" content="width=device-width, initial-scale=1"></meta>;

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};
export default App;
