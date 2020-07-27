import AuthService from "../services/auth.service";
import * as React from "react";

class Logout extends React.Component {

    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);

        this.state = {
            showModeratorBoard: false,
            showAdminBoard: false,
            currentUser: undefined
        };
    }

    componentDidMount() {
        const user = AuthService.getCurrentUser();

        if (user) {
            this.setState({
                currentUser: user,
                showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
                showAdminBoard: user.roles.includes("ROLE_ADMIN")
            });
        }
    }

    logOut() {
        AuthService.logout();
    }

    render(){
        return (
            <a href="/login" className="nav-link" onClick={this.logOut}>
                LogOut
            </a>

        )
    }
}

export default Logout;
