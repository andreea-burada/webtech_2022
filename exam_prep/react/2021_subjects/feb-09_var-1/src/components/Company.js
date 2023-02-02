import React, { Component } from "react";

class Company extends Component {
  constructor(props) {
    super(props);
    
    this.state = { 
      ...props,
      isEditing: false 
    };

    // If the edit button is clicked on a Company it goes into edit mode (0.5 pts);
    this.handleEditing = () => {
      this.setState({
        isEditing: true
      });
    }

    // A company can be saved and the changes are reflected in the company list (0.5 pts);
    this.handleSave = () => {
      let id = this.state.id;
      let company = {
        id: this.state.id,
        name: this.state.name,
        employees: this.state.employees,
        revenue: this.state.revenue
      };

      const onSave = this.state.onSave;
      onSave(id, company);

      this.setState({
        isEditing: false
      });
    }

    // If a Company is in edit mode and the button labeled cancel is 
    // clicked, it goes into view mode (0.5 pts);
    this.handleCancel = () => {
      this.setState({
        name: props.name,
        employees: props.employees,
        revenue: props.revenue,
        isEditing: false
      });
    }
  }

  render() {
    if (this.state.isEditing === true) {
      return (
        <div>
          <label>Company Name:</label>
          <input type="text" placeholder="Company name" id="name" name="name" onChange={(e) => this.setState({name: e.target.value})} ></input>
          <label>Company Employees No.:</label>
          <input type="text" placeholder="Employees no." id="employees" name="employees" onChange={(e) => this.setState({employees: e.target.value})} ></input>
          <label>Company Revenue:</label>
          <input type="text" placeholder="Company revenue" id="revenue" name="revenue" onChange={(e) => this.setState({revenue: e.target.value})} ></input>
          <input type="button" value="save" onClick={this.handleSave} />
          <input type="button" value="cancel" onClick={this.handleCancel} />
        </div>
      );
    } else {
      return (
        <div>
          Name "{this.state.item.name}" with {this.state.item.employees} employees; Revenue: {this.state.item.revenue}{" "}
          revenue
          <input type="button" value="edit" label="edit" onClick={this.handleEditing} />
        </div>
      );
    }
  }
}

export default Company;
