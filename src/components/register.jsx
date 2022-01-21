import React, { Component } from "react";
import Form from "./common/form";
import Joi from "joi-browser";

class Register extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().email().required(),
    password: Joi.string().required(),
    name: Joi.string().required(),
  };
  render() {
    return (
      <React.Fragment>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username", "email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderButton("Register")}
        </form>
      </React.Fragment>
    );
  }
}

export default Register;
