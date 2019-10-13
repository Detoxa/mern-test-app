import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class EmployeeList extends Component {
  constructor() {
    super();

    this.deleteEmployee = this.deleteEmployee.bind(this);

    this.state = {
      employee: []
    };
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
  // smazeme data dle id mongoo pres API
  deleteEmployee(id) {
    axios
      .delete('http://localhost:5000/employee/' + id)
      .then(res => console.log(res.data));
    this.setState({
      employee: this.state.employee.filter(el => el._id !== id)
    });
  }

  // tak to je trosku hardcore, ale fakt nevim jak to jinak zformatovat
  formatBirthdate(inc) {
    let date = inc
      .substring(0, 10)
      .split('-')
      .reverse()
      .join('.');
    return date.toString();
  }

  render() {
    return (
      this.state.employee
        //includes je case-sensitive, tak tam dame vsude lowercase
        .filter(el =>
          el.surname
            .toLowerCase()
            .includes(this.props.inputSearch.toLowerCase())
        )
        .map(currentEmployee => {
          return (
            <tr
              employee={currentEmployee}
              deleteEmployee={this.deleteEmployee}
              key={currentEmployee._id}
            >
              <td>{currentEmployee.name}</td>
              <td>{currentEmployee.surname}</td>
              <td>{currentEmployee.job}</td>
              <td>{this.formatBirthdate(currentEmployee.birthdate)}</td>
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
                        `Opravdu chcete propustit zaměstnance: ${currentEmployee.name} ${currentEmployee.surname} ?`
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
        })
    );
  }
}
