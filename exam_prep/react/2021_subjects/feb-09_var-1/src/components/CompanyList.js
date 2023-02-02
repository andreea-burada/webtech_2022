import React, { Component } from "react";
import CompanyStore from "../stores/CompanyStore";
import Company from "./Company";

class CompanyList extends Component {
  constructor() {
    super();
    this.state = {
      companies: [],
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

  handleSave = (id, company) => {
    this.store.saveOne(id, company);
  };

  render() {
	// CompanyList is rendered as a list of Company and each Company has a 
	// button labeled edit(0.5 pts);
    return (
      <>
        {this.state.companies.map((currentCompany) => (
          <Company
            id={currentCompany.id}
            name={currentCompany.name}
            employees={currentCompany.employees}
            revenue={currentCompany.revenue}
            onSave={this.handleSave}
			item={currentCompany}
          />
        ))}
      </>
    );
  }
}

export default CompanyList;
