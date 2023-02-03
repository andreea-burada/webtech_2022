import React, { Component } from "react";

class CompanyDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...props,
    };
  }

  render() {
    return (
      <div>
        <label>Name: </label>
        <input readOnly={true} value={this.state.item.name} />
        <label>Employees No: </label>
        <input readOnly={true} value={this.state.item.employees} />
        <label>Revenue: </label>
        <input readOnly={true} value={this.state.item.revenue} />
        <button label="cancel" value="cancel" onClick={this.state.onCancel}>Cancel</button>
      </div>
    );
  }
}

export default CompanyDetails;
