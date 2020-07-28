import React, {useState, useEffect} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import AuthService from "../../services/auth.service";
import Container from "@material-ui/core/Container";
import {isEmail} from "validator";
import {useForm} from "react-hook-form";

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

const Register = (props) => { 
// class Register extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.handleRegister = this.handleRegister.bind(this);
    //     this.onChangeUsername = this.onChangeUsername.bind(this);
    //     this.onChangeEmail = this.onChangeEmail.bind(this);
    //     this.onChangePassword = this.onChangePassword.bind(this);

    //     this.state={
    //         firstName:'',
    //         lastName:'',
    //         username:'',
    //         email:'',
    //         password:'',
    //         zip:''
    //     }
    // }
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [zip, setZip] = useState(null);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [successful, setSuccessful] = useState(false);
    const {register} = useForm();

    useEffect(() => {
        if (AuthService.getCurrentUser()) {
            // redirect the user
            props.history.push("/profile");
            window.location.reload();
        }
    });

    // componentDidMount() {
    //     if (AuthService.getCurrentUser()) {
    //         // redirect the user
    //         props.history.push("/profile");
    //         window.location.reload();
    //     }
    // }

    const onChangeFirstName = (e) => {
        setFirstName(e.target.value);
    }

    const onChangeLastName = (e) => {
        setLastName(e.target.value);
    }

    const onChangeUsername = (e) => {
        setUserName(e.target.value);
    }

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const onChangePassword = (e)=> {
        setPassword(e.target.value);
    }

    const onChangeZip = (e) => {
        setZip(e.target.value);
    }

    const handleRegister = (e) => {
        e.preventDefault();

        // this.setState({
        //     message: "",
        //     successful: false
        // });
        setMessage('');
        setSuccessful(false);

        // this.form.validateAll();

        // if (this.checkBtn.context._errors.length === 0) {
            AuthService.register(
                firstName,
                lastName,
                username,
                email,
                password,
                zip
            ).then(
                response => {
                    // this.setState({
                    //     message: response.data.message,
                    //     successful: true
                    // });
                    setMessage(response.data.message);
                    setSuccessful(true);
                },
                error => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    // this.setState({
                    //     successful: false,
                    //     message: resMessage
                    // });

                    setSuccessful(false);
                    setMessage(resMessage);
                }
            );
        // }
    }

    // render() {
        return (
                <MuiThemeProvider>
                        <AppBar title="Register"/>

                    <Container>
                        <form style={style} onSubmit={handleRegister} noValidate>

                            <TextField
                                type="text"
                                name="firstName"
                                value={firstName}
                                hintText="Enter your First Name"
                                floatingLabelText="First Name"
                                onChange={onChangeFirstName}
                                validations={[required]}
                                inputRef={register}
                            />
                            <br/>
                            <TextField
                                type="text"
                                name="lastName"
                                value={lastName}
                                hintText="Enter your Last Name"
                                floatingLabelText="Last Name"
                                onChange={onChangeLastName}
                                inputRef={register}
                            />
                                <br/>

                            <TextField
                                type="text"
                                name="username"
                                label="username"
                                value={username}
                                hintText="Enter your  Username"
                                floatingLabelText="Username"
                                onChange = {onChangeUsername}
                                validations={[required]}
                                inputRef={register}
                            />
                            <br/>
                            <TextField
                                type="email"
                                name="email"
                                label="email"
                                value={email}
                                hintText="Enter your email"
                                floatingLabelText="Email"
                                onChange = {onChangeEmail}
                                validations={[required]}
                                inputRef={register}
                            />
                            <br/>
                            <TextField
                                type="password"
                                name="password"
                                label="password"
                                value={password}
                                hintText="Enter your password"
                                floatingLabelText="Password"
                                onChange = {onChangePassword}
                                validations={[required]}
                                inputRef={register}
                            />
                            <br/>
                            <TextField
                                type="number"
                                name="zip"
                                label="zip"
                                value={zip}
                                hintText="Enter your zip"
                                floatingLabelText="zip"
                                onChange = {onChangeZip}
                                validations={[required]}
                                inputRef={register}
                            />

                            <br/>
                            <RaisedButton
                                variant="contained"
                                label="Submit"
                                primary={true}
                                type="submit"
                            />

                                {message && (
                                    <div className="form-group">
                                        <div
                                            className={
                                                successful
                                                    ? "alert alert-success"
                                                    : "alert alert-danger"
                                            }
                                            role="alert"
                                        >
                                            {message}
                                        </div>
                                    </div>
                                )}
                                {/* <CheckButton
                                    style={{ display: "none" }}
                                    ref={c => {
                                        this.checkBtn = c;
                                    }}
                                /> */}
                        </form>
                    </Container>
                </MuiThemeProvider>

        );
    // }

}
const style={
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
};

export default Register;