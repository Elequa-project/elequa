import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import HelloWorld from "./components/HelloWorld";
class App extends Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={HelloWorld} />
            </Router>
        );
    }
}

export default App;

