import AuthService from "../../services/auth.service";
import * as React from "react";
import {Link} from "@material-ui/core";
import {useState} from "react";
import {useEffect} from "react";

const Logout = (props) => {


    // constructor(props) {
    //     super(props);
    //     this.logOut = this.logOut.bind(this);
    //
    //     this.state = {
    //         showModeratorBoard: false,
    //         showAdminBoard: false,
    //         currentUser: undefined
    //     };
    // }

    const [showModeratorBoard, setShowModeratorBoard] = useState(false);
    const [showAdminBoard, setShowAdminBoard] = useState(false);
    const [currentUser, setCurrentUser] = useState('');



    useEffect(() =>{
        const user = AuthService.getCurrentUser()
        if (user) {

                setCurrentUser(user);
                setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
                setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));

        }

    });

    // componentDidMount() {
    //     const user = AuthService.getCurrentUser();
    //
    //     if (user) {
    //         this.setState({
    //             currentUser: user,
    //             showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
    //             showAdminBoard: user.roles.includes("ROLE_ADMIN")
    //         });
    //     }
    // }

    const logOut = () => {
        AuthService.logout();
    };


        return (
            <Link underline='none' href="/login" className="nav-link" onClick={logOut}>
                LogOut
            </Link>

        )
};


export default Logout;
