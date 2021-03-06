import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navpills from "./components/Navpills";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";

const App = () => (
  <Router>
    <div>
      <Navpills />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/Projects" component={Projects} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>
);

export default App;
