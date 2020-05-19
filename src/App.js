import React from "react";
import Layout from './Components/Layout';
import About from './Components/About';
import Home from './Components/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
