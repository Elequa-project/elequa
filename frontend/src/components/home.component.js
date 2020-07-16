import React, { Component } from "react";

import UserService from "../services/user.service";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: []
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      } 
    );
  }

  render() {
    return (
      <div className="container">
        <header className="jumbotron">
          {this.state.content.map(user => 
            <div>
                <h2>Hello, { user.firstName + ' ' + user.lastName }!</h2>
                <h3>Email: { user.email }</h3>
            </div>
          )}
        </header>
      </div>
    );
  }
}