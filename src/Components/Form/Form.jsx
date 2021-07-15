import React from "react";
// import Email from "./Email/Email";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      birth: "",
      country: "",
    };
  }

  handleChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handleSubmit = (event) => {
    alert("Отправленное имя: " + this.state.email);
    event.preventDefault();
  };

  render() {
    const { email, firstName, lastName, password, birth, country } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={this.handleChange} />
        </label>
        <input disabled={} type="submit" value="Отправить" />
      </form>
    );
  }
}
