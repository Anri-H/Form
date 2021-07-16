import React from "react";
import Input from "./Input/Input";
import { validation } from "../helpers/validation";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisabled: {},
    };
  }

  handleChange = ({ target }) => {
    console.log(this.state);
    this.setState({
      isDisabled: { [target.name]: validation[target.name](target.value) },
    });
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = (event) => {
    alert("Отправленное имя: " + toString(this.state));
    event.preventDefault();
  };

  render() {
    const { isDisabled } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          title="Email address"
          type="email"
          name="email"
          onChange={this.handleChange}
          disabled={isDisabled.email}
        />
        <Input
          title="First Name"
          type="text"
          name="firstName"
          onChange={this.handleChange}
          disabled={isDisabled.firstName}
        />
        
        <input disabled={isDisabled} type="submit" value="Отправить" />
      </form>
    );
  }
}
