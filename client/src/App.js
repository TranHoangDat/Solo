import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomePages from "@pages/HomePages.js";
import { AppPages } from "@pages/AppPages";
import AuthContextProvider from './contexts/AuthContext';

export const App = () => (
  <AuthContextProvider>
    <Router>
      <Switch>
        <Route path='/app' component={AppPages}/>
        <Route path='/' component={HomePages}/>
      </Switch>
    </Router>
  </AuthContextProvider>
);
