import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/navbar.component';
import EmployeeList from './components/employee-list.component';
import EditEmployee from './components/edit-employee.component';
import CreateEmployee from './components/create-employee.component';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Navbar />
          <br />
          <Route path="/" exact component={EmployeeList} />
          <Route path="/edit:id" exact component={EditEmployee} />
          <Route path="/create" exact component={CreateEmployee} />
        </div>
      </Router>
    );
  }
}

export default App;
