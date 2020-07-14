import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
// import axios from 'axios';
import AuthenticationService from "../../AuthenticationService";

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: 'in28minutes',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        };
        // this.handleUsernameChange = this.handleUsernameChange.bind(this)
        // this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
    }

    handleChange(event) {
        //console.log(this.state);
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }

    loginClicked() {
        AuthenticationService
            .executeJwtAuthenticationService(this.state.username, this.state.password)
            .then((response) => {
                AuthenticationService.registerSuccessfulLoginForJwt(this.state.username, response.data.token)
                this.props.history.push(`/submissions/${this.state.username}`)
            }).catch(() => {
            this.setState({showSuccessMessage: false});
            this.setState({hasLoginFailed: true});
            this.setState({password: ""});

        })

    }


    render() {
        return (
            //     <div>
            //         <MuiThemeProvider>
            //             <div>
            //                 <AppBar title="login">
            //                 </AppBar>
            //                 <TextField hintText="Enter your username" floatingLabelText="Username"
            //                            onChange={(event, newValue) => this.setState({username: newValue})}>
            //                 </TextField>
            //                 <br/>
            //                 <TextField hintText="Enter your password" floatingLabelText="Password"
            //                            onChange={(event, newValue) => this.setState({password: newValue})}>
            //                 </TextField>
            //                 <br/>
            //                 <RaisedButton label="Submit" primary={true} style={style}
            //                               onClick={(event) => this.handleClick(event)}>
            //                 </RaisedButton>
            //             </div>
            //         </MuiThemeProvider>
            //     </div>
            // )
            <div  >
                <MuiThemeProvider >
                <AppBar>Login</AppBar>
                    {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>*/}
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div>Login Sucessful</div>}
                    {/*<ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/>*/}
                   <div style={style}>

                    <TextField  type="text" name="username" hintText="Enter your username" floatingLabelText="Username"  value={this.state.username}
                                      onChange={this.handleChange}/>
                    <br/>
                    <TextField type="password" name="password" hintText="Enter your password" floatingLabelText="Password"  value={this.state.password}
                               onChange={this.handleChange}/>
                               <br/>
                    <RaisedButton label="Submit" primary={true}  onClick={this.loginClicked}/>
                    <br/>
                   </div>
                </MuiThemeProvider>
            </div>
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
