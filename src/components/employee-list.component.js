import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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

  render() {
    return this.state.employee.map(currentEmployee => {
      return (
        <tr
          employee={currentEmployee}
          deleteEmployee={this.deleteEmployee}
          key={currentEmployee._id}
        >
          <td>{currentEmployee.name}</td>
          <td>{currentEmployee.surname}</td>
          <td>{currentEmployee.job}</td>
          <td>{currentEmployee.birthdate.substring(0, 10)}</td>
          <td>
            <Link to={'/edit' + currentEmployee._id}>
              <button type="button" className="btn btn-secondary m-1">
                Editovat
              </button>
            </Link>{' '}
            <button
              onClick={() => {
                if (
                  window.confirm(
                    'Opravdu chcete vyhodit zaměstnance na dlažbu?'
                  )
                )
                  this.deleteEmployee(currentEmployee._id);
              }}
              type="button"
              className="btn btn-danger m-1"
            >
              Propustit
            </button>
          </td>
        </tr>
      );
    });
  }
}
