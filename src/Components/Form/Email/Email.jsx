import React from "react";

export default class Email extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange = (event) => {
    this.setState({ email: event.target.value });
  };

  render() {
    return (
      <label>
        Email:
        {/* <input type="email" value={email} onChange={this.handleChange} /> */}
      </label>
    );
  }
}
