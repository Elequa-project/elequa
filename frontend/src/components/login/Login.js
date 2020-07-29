import React, {useEffect, useState} from "react";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {Container, Button} from "@material-ui/core";
import AuthService from "../../services/auth.service";
import {useForm} from 'react-hook-form';



const Login = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const {register} = useForm();

    const onChangeUsername = (e) => {
        setUsername(
            e.target.value
        );
    };


    const onChangePassword = (e) => {
        setPassword(e.target.value
        );
    };

    useEffect(() => {
        if (AuthService.getCurrentUser()) {
            // redirect the user
            props.history.push("/profile");
            window.location.reload();
        }
    });

    const handleLogin = (e) => {
        e.preventDefault();
        setLoading(true
        );
        setMessage({
            message: ""
        });

        AuthService.login(username, password).then(
            () => {
                props.history.push("/profile");
                window.location.reload();
            },
            error => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setLoading(
                    false
                );
                setMessage(
                    resMessage
                );
            });

    };


    return (
        <MuiThemeProvider>
            <AppBar>Login</AppBar>
            <Container>
                <form style={style} onSubmit={handleLogin}

                >
                    <TextField type="text"
                               name="username"
                               hintText="Enter your username"
                               floatingLabelText="Username"
                               value={username}
                               onChange={onChangeUsername}
                               required
                               inputRef={register}
                    />
                    <br/>
                    <TextField type="password"
                               name="password"
                               hintText="Enter your password"
                               floatingLabelText="Password"
                               value={password}
                               onChange={onChangePassword}
                               inputRef={register}
                               required
                    />
                    <br/>
                    <RaisedButton
                        label="Submit"
                        primary={true}
                        variant="contained"
                        type="submit"
                        />
                    <br/>

                    {message && (
                        <div className="form-group">
                            <div className="alert alert-danger" role="alert">
                                {message}
                            </div>
                        </div>
                    )}
                </form>
            </Container>
        </MuiThemeProvider>
    )
};
const style = {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
};

export default Login;
