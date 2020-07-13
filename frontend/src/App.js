
import React, { Component } from "react";
// import AddEmployee from "./Components/AddEmployee";
import { Route, BrowserRouter as Router } from "react-router-dom";
import HelloWorld from "./components/HelloWorld";
import Login from   "./components/login/Login"
import Register from   "./components/registration/Register"
class App extends Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={HelloWorld} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />

            </Router>
        );
    }
}

export default App;

