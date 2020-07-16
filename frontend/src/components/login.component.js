import React, { Component } from "react";

import AuthService from "../services/auth.service";
import { Container, Button, TextField } from "@material-ui/core";
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      password: "",
      loading: false,
      message: ""
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.login(this.state.username, this.state.password).then(
        () => {
          this.props.history.push("/profile");
          window.location.reload();
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            loading: false,
            message: resMessage
          });
        }
      );
    } else {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    return (
      <Container>
        <div className="card card-container">
          <img
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="profile-img"
            className="profile-img-card"
          />

          <Form
            onSubmit={this.handleLogin}
            ref={c => {
              this.form = c;
            }}
            validate
          >
            <div className="form-group">
              <TextField
                fullWidth
                type="text"
                name="username"
                label="Username"
                value={this.state.username}
                onChange={this.onChangeUsername}
                required
              />
            </div>

            <div className="form-group">
              <TextField
                fullWidth
                type="password"
                name="password"
                label="Password"
                value={this.state.password}
                onChange={this.onChangePassword}
                required
              />
            </div>

            <div className="form-group">
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                  >
                    Login
                  </Button>
            </div>

            {this.state.message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
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
        </div>
      </Container>
    );
  }
}
