import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';

class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state= {
            username: "",
            password: ""
        }
    }
    render(){
        return (
            <div>
                <MuiThemeProvider>
                    <div>
                        <AppBar title="login">
                        </AppBar>
                        <TextField hintText="Enter your username" floatingLabelText="Username" onChange={(event, newValue)=>this.setState({username:newValue})}>
                        </TextField>
                        <br/>
                        <TextField hintText="Enter your password" floatingLabelText="Password" onChange={(event, newValue)=>this.setState({password:newValue})}>
                        </TextField>
                        <br/>
                        <RaisedButton label="Submit" primary={true} style={style} onClick={(event)=>this.handleClick(event)}>
                        </RaisedButton>
                    </div>
                </MuiThemeProvider>
            </div>
        )
    }
    handleClick(event){
        var apiBasedUrl = "http://localhost:8080/api/";
        var self = this;
        var payload = {
            "email":this.state.username,
            "password":this.state.password
        };

        axios.post(apiBasedUrl + 'login', payload)
            .then(function (response) {
                console.log(response);
                if(response.data.code === 200){
                    console.log("login successful");
                    var uploadScreen = [];
                    uploadScreen.push(<uploadScreen appContext = {self.props.appContext}/>);
                    self.props.appContext.setState({loginPage:[], uploadScreen:uploadScreen})
                }else if(response.data.code === 204){
                    console.log("username password do not match");
                }else{
                    console.log("username does not exist");
                    alert("Username does not exist");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}
const style = {
    margin: 15,
};
export default Login;
