//import {useState , useEffect} from 'react';
import React, { Component } from "react";
import "./../App.css";
//import axios from 'axios';
import NewsCards from "./NewsCards";
import NewsDetailsPage from "./NewsDetailsPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={NewsCards} />
            <Route exact path="/newsDetails/:id" component={NewsDetailsPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}
