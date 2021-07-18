import React from "react";
import Input from "./Input/Input";
import "./submit.css";
import { validate } from "../helpers/validate";
import Country from "./Country/Country";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: localStorage.getItem("email"),
      firstName: localStorage.getItem("firstName"),
      lastName: localStorage.getItem("lastName"),
      password: localStorage.getItem("password"),
      country: localStorage.getItem("country"),
    };
  }

  handleChange = ({ target }) => {
    console.log(this.props);
    localStorage.setItem([target.name], target.value);
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(this.state));
  };

  render() {
    const { email, firstName, lastName, password, country } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          title="Email address"
          type="email"
          name="email"
          value={email}
          onChange={this.handleChange}
        />
        <Input
          title="First Name"
          type="text"
          name="firstName"
          value={firstName}
          onChange={this.handleChange}
        />
        <Input
          title="Last Name"
          type="text"
          name="lastName"
          value={lastName}
          onChange={this.handleChange}
        />
        <Input
          title="Password"
          type="password"
          name="password"
          value={password}
          onChange={this.handleChange}
        />
        <Country value={country} onChange={this.handleChange} />
        <input type="submit" className={"button"} value="Create account" />
      </form>
    );
  }
}
