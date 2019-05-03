import React, { Component } from "react";

class Login extends Component {
  handleSubmit = event => {
    event.preventDefault();
    let username = event.target.username.value;
    let password = event.target.password.value;
    fetch("http://localhost:3001/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
      .then(r => r.json())
      .then(this.handleResponse);
  };

  handleResponse = json => {
    if (json["success"]) {
      localStorage.setItem("token", json["token"]);
      this.props.history.push("/paintings");
    } else {
      console.log("Error");
    }
  };

  // Logout - clear localstorage

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label for="username">Username</label>
        <input type="text" name="username" />
        <label for="password">Password</label>
        <input type="password" name="password" />
        <input type="submit" />
      </form>
    );
  }
}

export default Login;
