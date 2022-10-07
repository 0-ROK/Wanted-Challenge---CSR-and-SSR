import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Router from "./component/Router/Router";
import Route from "./component/Router/Route";
import Root from "./component/Page/Root";
import About from "./component/Page/About";

function App() {
  return (
    <Router>
      <Route path="/" component={<Root />} />
      <Route path="/about" component={<About />} />
    </Router>
  );
}

export default App;
