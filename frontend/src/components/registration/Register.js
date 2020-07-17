import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import AuthService from "../../services/auth.service";
import Container from "@material-ui/core/Container";
import Form from "react-validation/build/form";
import {isEmail} from "validator";
import CheckButton from "react-validation/build/button";

const required = value => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

const email = value => {
    if (!isEmail(value)) {
        return (
            <div className="alert alert-danger" role="alert">
                This is not a valid email.
            </div>
        );
    }
};

const vusername = value => {
    if (value.length < 3 || value.length > 20) {
        return (
            <div className="alert alert-danger" role="alert">
                The username must be between 3 and 20 characters.
            </div>
        );
    }
};

const vpassword = value => {
    if (value.length < 6 || value.length > 40) {
        return (
            <div className="alert alert-danger" role="alert">
                The password must be between 6 and 40 characters.
            </div>
        );
    }
};

class Register extends React.Component {
    constructor(props){
        super(props);
        this.handleRegister = this.handleRegister.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state={
            firstName:'',
            lastName:'',
            username:'',
            email:'',
            password:'',
            zip:''
        }
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    handleRegister(e) {
        e.preventDefault();

        this.setState({
            message: "",
            successful: false
        });

        this.form.validateAll();

        if (this.checkBtn.context._errors.length === 0) {
            AuthService.register(
                this.state.firstName,
                this.state.lastName,
                this.state.username,
                this.state.email,
                this.state.password,
                this.state.zip
            ).then(
                response => {
                    this.setState({
                        message: response.data.message,
                        successful: true
                    });
                },
                error => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    this.setState({
                        successful: false,
                        message: resMessage
                    });
                }
            );
        }
    }

    render() {
        return (
                <MuiThemeProvider>
                        <AppBar title="Register"/>

                    <Container>
                        <Form style={style} onSubmit={this.handleRegister}
                                      ref={c => {
                                          this.form = c;
                                      }}
                                      noValidate>

                        <TextField
                            type="text"
                            name="firstName"
                            value={this.state.firstName}
                            hintText="Enter your First Name"
                            floatingLabelText="First Name"
                            onChange = {(event) => this.setState({firstName:event.target.value})}
                            validations={[required]}

                        />
                        <br/>
                        <TextField
                            type="text"
                            name="lastName"
                            value={this.state.lastName}
                            hintText="Enter your Last Name"
                            floatingLabelText="Last Name"
                            onChange = {(event) => this.setState({lastName:event.target.value})}
                            />
                            <br/>

                        <TextField
                            type="text"
                            name="username"
                            label="username"
                            value={this.state.username}
                            hintText="Enter your  Username"
                            floatingLabelText="Username"
                            onChange = {(event) => this.setState({username:event.target.value})}
                            validations={[required]}

                        />
                        <br/>
                        <TextField
                            type="email"
                            name="email"
                            label="email"
                            value={this.state.email}
                            hintText="Enter your email"
                            floatingLabelText="Email"
                            onChange = {(event) => this.setState({email:event.target.value})}
                            validations={[required]}

                        />
                        <br/>
                        <TextField
                            type="password"
                            name="password"
                            label="password"
                            value={this.state.password}
                            hintText="Enter your password"
                            floatingLabelText="Password"
                            onChange = {(event) => this.setState({password:event.target.value})}
                            validations={[required]}

                        />
                        <br/>
                        <TextField
                            type="number"
                            name="zip"
                            label="zip"
                            value={this.state.zip}
                            hintText="Enter your zip"
                            floatingLabelText="zip"
                            onChange = {(event) => this.setState({zip:event.target.value})}
                            validations={[required]}

                        />

                        <br/>
                        <RaisedButton
                            variant="contained"
                            label="Submit"
                            primary={true}
                            type="submit"
                        />

                            {this.state.message && (
                                <div className="form-group">
                                    <div
                                        className={
                                            this.state.successful
                                                ? "alert alert-success"
                                                : "alert alert-danger"
                                        }
                                        role="alert"
                                    >
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

                </Form>
                    </Container>
                </MuiThemeProvider>

        );
    }

}
const style={
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
};
export default Register;
