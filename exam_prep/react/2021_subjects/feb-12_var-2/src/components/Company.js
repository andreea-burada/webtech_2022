import React, { Component } from "react";

class Company extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...props
    };

    this.handleSelect = () => {
      let select = this.state.onSelect;
      select(this.state.item);
    };
  }

  render() {
    let item = this.state.item;
    console.log('item', item);
    return (
      <div>
        <p>
          Name {item.name} with {item.employees} employees {item.revenue}{" "}
          revenue
        </p>
        <button aria-label="select" value="select" onClick={this.handleSelect}>
          Select
        </button>
      </div>
    );
  }
}

export default Company;
