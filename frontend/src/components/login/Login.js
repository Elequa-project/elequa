import React from "react";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
// import axios from 'axios';
import AuthenticationService from "../../AuthenticationService";
import { Container, Button } from "@material-ui/core";
import AuthService from "../../services/auth.service";
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";

// can use these instead
// function Login(){}
// const Login = () =>{
class Login extends React.Component {
//         const[username, setUsername] = React.useState('');
//         const[password, setPassword] = React.useState('');
//         const[loading, setLoading] = React.useState(false);
//         const[message, setMessage] = React.useState('');



    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);


        this.state = {
            username: "",
            password: "",
            loading: false,
            message: ""
        };
    }






    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }


    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }


    componentDidMount() {
        if (AuthService.getCurrentUser()) {
            // redirect the user
            this.props.history.push("/profile");
            window.location.reload();
        }
    }

    handleLogin(e) {
        e.preventDefault();

        this.setState({
            message: "",
            loading: true
        });

        this.form.validateAll();


        if (this.checkBtn.context._errors.length === 0) {
            AuthService.login(this.state.username, this.state.password).then(
                () => {
                    this.props.history.push("/profile");
                    window.location.reload();
                },
                error => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    this.setState({
                        loading: false,
                        message: resMessage
                    });
                }
            );
        } else {
            this.setState({
                loading: false
            });
        }
    }


    render() {
        return (
                <MuiThemeProvider>
                <AppBar>Login</AppBar>
            <Container>
                    {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>*/}
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div>Login Sucessful</div>}
                    {/*<ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/>*/}
                   <Form style={style} onSubmit={this.handleLogin}
                         ref={c => {
                             this.form = c;
                         }}
                         validate
                   >
                    {/*<div style={style}>*/}

                    <TextField  type="text"
                                name="username"
                                hintText="Enter your username"
                                floatingLabelText="Username"
                                value={this.state.username}
                                onChange={this.onChangeUsername} required/>
                    <br/>
                    <TextField type="password"
                               name="password"
                               hintText="Enter your password"
                               floatingLabelText="Password"
                               value={this.state.password}
                               onChange={this.onChangePassword} required/>
                               <br/>
                    <RaisedButton label="Submit" primary={true} variant="contained" type="submit" />
                    <br/>

                       {this.state.message && (
                           <div className="form-group">
                               <div className="alert alert-danger" role="alert">
                                   {this.state.message}
                               </div>
                           </div>
                       )}

                       <CheckButton
                           style={{ display: "none" }}
                           ref={c => {
                               this.checkBtn = c;
                           }}
                       />
                   {/*</div>*/}
                       </Form>
            </Container>
                </MuiThemeProvider>
        )
    }
}
const style={
    position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)'
};

export default Login;
