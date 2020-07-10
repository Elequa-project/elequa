import React, { Component } from 'react';
import axios from 'axios';
import { Container } from '@material-ui/core';

export default class UserInfo extends Component  {
    state = {
        user: {}
    }

    componentDidMount() {
        axios.get('/api/user/2')
            .then(res => {
                this.setState({
                    user: res.data
                });
            });
    }

    render() {
        return (
            <Container>
                <p>First Name: {this.state.user.firstName}</p>
                <p>Last Name: {this.state.user.lastName}</p>
            </Container>
        );
    }
}