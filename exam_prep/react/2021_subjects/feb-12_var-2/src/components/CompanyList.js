import React, { Component } from "react";
import CompanyStore from "../stores/CompanyStore";
import Company from "./Company";
import CompanyDetails from "./CompanyDetails";

class CompanyList extends Component {
  constructor() {
    super();
    this.state = {
      companies: [],
      selected: false,
      item: {},
    };
  }

  componentDidMount() {
    this.store = new CompanyStore();
    this.setState({
      companies: this.store.getAll(),
    });
    this.store.emitter.addListener("UPDATE", () => {
      this.setState({
        companies: this.store.getAll(),
      });
    });
  }

  handleSelect = (item) => {
    this.setState({
      selected: true,
      item: item,
    });
  };

  handleCancel = () => {
    this.setState({
      selected: false,
    });
  };

  render() {
    if (this.state.selected == true) {
      return (
        <>
          <CompanyDetails item={this.state.item} onCancel={this.handleCancel} />
        </>
      );
    } else {
      return (
        <div>
          {this.state.companies.map((e, i) => (
            <Company item={e} key={i} onSelect={this.handleSelect} />
          ))}
        </div>
      );
    }
  }
}

export default CompanyList;
