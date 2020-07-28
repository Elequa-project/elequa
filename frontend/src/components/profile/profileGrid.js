import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Logout from "../Logout/logout";
import AuthService from "../../services/auth.service";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const style= {
    marginTop: '10px',
    height: '400px'
};
const currentUser = AuthService.getCurrentUser();


export default function AutoGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid  item xs={6}>
                    <Paper style={style} className={classes.paper}><div>
                        <div className="container">
                            <header className="jumbotron">
                                <h3>
                                    <strong>{currentUser.username}</strong> Profile
                                </h3>
                                <br/>
                                <h1><Logout/></h1>
                            </header>
                            <p>
                                <strong>Token:</strong>{" "}
                                {currentUser.accessToken.substring(0, 20)} ...{" "}
                                {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
                            </p>
                            <p>
                                <strong>Id:</strong>{" "}
                                {currentUser.id}
                            </p>
                            <p>
                                <strong>Email:</strong>{" "}
                                {currentUser.email}
                            </p>
                            <strong>Authorities:</strong>
                            <ul>
                                {currentUser.roles &&
                                currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
                            </ul>
                        </div>
                    </div></Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper style={style} className={classes.paper}>Projects</Paper>
                </Grid>

            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Paper style={style} className={classes.paper}>Medal Count</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper style={style} className={classes.paper}>SHOWCASE</Paper>
                </Grid>
            </Grid>
        </div>
    );
}
