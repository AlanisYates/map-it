import React from "react";
import Layout from './Components/Layout';
import Map from './Components/Map';
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
          <Route exact path="/map">
            <Map />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
