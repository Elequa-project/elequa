
import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from   "./components/home.component";
import Login from   "./components/login/Login"
import Register from   "./components/registration/Register";
import Profile from "./components/profile/profileComponent";
import SplashPage from "./components/SplashPage";
import AuthService from "./services/auth.service";
import Redirect from "react-router-dom/es/Redirect";

const App = () => {
        return (

            <Router>
                <Route path="/" exact component={SplashPage}/>
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/profile" component={Profile} />

            </Router>
        );

};

export default App;

