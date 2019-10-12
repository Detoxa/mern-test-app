import React, { Component } from 'react';
import EmployeeList from './employee-list.component';

export default class EmployeeTable extends Component {
  render() {
    return (
      <div>
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
            <EmployeeList />
          </tbody>
        </table>
      </div>
    );
  }
}
