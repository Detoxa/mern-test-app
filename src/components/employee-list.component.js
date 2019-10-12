import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Employee = props => (
  <tr>
    <td>{props.employee.id}</td>
    <td>{props.employee.name}</td>
    <td>{props.employee.surname}</td>
    <td>{props.employee.job}</td>
    <td>{props.employee.birthdate.substring(0, 10)}</td>
    <td>
      <Link to={'/edit' + props.employee._id}>
        <button type="button" className="btn btn-secondary m-1">
          Editovat
        </button>
      </Link>{' '}
      <button
        onClick={() => {
          if (window.confirm('Opravdu chcete vyhodit zaměstnance na dlažbu?'))
            props.deleteEmployee(props.employee._id);
        }}
        type="button"
        className="btn btn-danger m-1"
      >
        Propustit
      </button>
    </td>
  </tr>
);

export default class EmployeeList extends Component {
  constructor(props) {
    super(props);

    this.deleteEmployee = this.deleteEmployee.bind(this);

    this.state = { employee: [] };
  }
  // pri inicializaci komponenty se nacte seznam z API
  componentDidMount() {
    axios
      .get('http://localhost:5000/employee')
      .then(response => {
        this.setState({ employee: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }
  // smazeme data dle id pres API
  deleteEmployee(id) {
    axios
      .delete('http://localhost:5000/employee/' + id)
      .then(res => console.log(res.data));
    this.setState({
      employee: this.state.employee.filter(el => el._id !== id)
    });
  }
  // vypsani komponenty employee
  employeeList() {
    return this.state.employee.map(currentemployee => {
      return (
        <Employee
          employee={currentemployee}
          deleteEmployee={this.deleteEmployee}
          key={currentemployee._id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Zaměstnanci:</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>ID:</th>
              <th>Jméno:</th>
              <th>Přijmení:</th>
              <th>Pracovní pozice:</th>
              <th>Datum narození:</th>
            </tr>
          </thead>
          <tbody>{this.employeeList()}</tbody>
        </table>
      </div>
    );
  }
}
