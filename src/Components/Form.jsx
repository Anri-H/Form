import React from "react";
import Input from "./Input/Input";
import { validation } from "../helpers/validation";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: localStorage.getItem("email"),
      firstName: localStorage.getItem("firstName"),
      lastName: localStorage.getItem("lastName"),
      password: localStorage.getItem("password"),
    };
  }

  static isDisabled = {
    email: true,
    firstName: true,
    lastName: true,
    password: true,
  };

  handleChange = ({ target }) => {
    console.log(this.state);
    Form.isDisabled = { [target.name]: validation[target.name](target.value) };
    localStorage.setItem([target.name], target.value);
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert("Отправленное имя: " + JSON.stringyfy(this.state));
  };

  render() {
    const { email, firstName, lastName, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          title="Email address"
          type="email"
          name="email"
          value={email}
          onChange={this.handleChange}
          disabled={Form.isDisabled.email}
        />
        <Input
          title="First Name"
          type="text"
          name="firstName"
          value={firstName}
          onChange={this.handleChange}
          disabled={Form.isDisabled.firstName}
        />
        <Input
          title="Last Name"
          type="text"
          name="lastName"
          value={lastName}
          onChange={this.handleChange}
          disabled={Form.isDisabled.lastName}
        />
        <Input
          title="Password"
          type="password"
          name="password"
          value={password}
          onChange={this.handleChange}
          disabled={Form.isDisabled.password}
        />

        <input disabled={Form.invalid} type="submit" value="Create account" />
      </form>
    );
  }
}
