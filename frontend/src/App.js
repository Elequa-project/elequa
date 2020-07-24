
import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from   "./components/home.component";
import Login from   "./components/login/Login"
import Register from   "./components/registration/Register";
import Profile from "./components/profile/profile.component";
import AuthService from "./services/auth.service";

class App extends Component {
    render() {
        return (
            <Router>
                <Route path="/" exact component={Home}/>
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/profile" component={Profile} />
            </Router>
        );
    }
}

export default App;

