import React, { Component } from 'react';
import EmployeeList from './employee-list.component';

export default class EmployeeTable extends Component {
  constructor() {
    super();

    this.state = {
      inputSearch: ''
    };
  }
  render() {
    return (
      <div>
        <div className="input-group input-group-sm mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-sm">
              Hledání zaměstnanců podle příjmení
            </span>
          </div>
          <input
            onChange={e => this.setState({ inputSearch: e.target.value })}
            type="text"
            className="form-control"
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
          />
        </div>
        <h3>Zaměstnanci:</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Jméno:</th>
              <th>Přijmení:</th>
              <th>Pracovní pozice:</th>
              <th>Datum narození:</th>
            </tr>
          </thead>
          <tbody>
            <EmployeeList inputSearch={this.state.inputSearch} />
          </tbody>
        </table>
      </div>
    );
  }
}
