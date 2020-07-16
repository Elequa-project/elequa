
import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from   "./components/home.component";
import Login from   "./components/login.component";
import Register from   "./components/register.component";
import Profile from   "./components/profile.component";

class App extends Component {
    render() {
        return (
            <Router>
                {/*<Route exact path="/" component={HelloWorld} />*/}
                <Route path="/" exact component={Home}/>
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/profile" component={Profile} />
                {/*<Route path="/submission/:id" component={TodoComponent}/>*/}
                {/*<Route path="/submissions" component={ListTodosComponent}/>*/}

            </Router>

    //         <Switch>
    //         <Route path="/" exact component={LoginComponent}/>
    //     <Route path="/login" component={LoginComponent}/>
    //     <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}/>
    //     <AuthenticatedRoute path="/todos/:id" component={TodoComponent}/>
    //     <AuthenticatedRoute path="/todos" component={ListTodosComponent}/>
    //     <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
    //
    //     <Route component={ErrorComponent}/>
    // </Switch>
        );
    }
}

export default App;

