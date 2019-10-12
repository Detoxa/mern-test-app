import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import { registerLocale } from 'react-datepicker';
import cs from 'date-fns/locale/cs';
import 'react-datepicker/dist/react-datepicker.css';
registerLocale('cs', cs);

export default class EditEmployee extends Component {
  constructor(props) {
    super(props);
    //bindovani dat
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeSurname = this.onChangeSurname.bind(this);
    this.onChangeJob = this.onChangeJob.bind(this);
    this.onChangeBirthdate = this.onChangeBirthdate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      surname: '',
      jobList: [],
      job: '',
      birthdate: new Date()
    };
  }

  // react life cycle metoda - automaticky react vola tuto metodu pri nacteni komponenty
  componentDidMount() {
    // HTTP client pro API
    axios
      .get('http://ibillboard.com/api/positions')
      .then(response => {
        //console.log(response.data.positions);
        this.setState({
          jobList: response.data.positions
        });
        //console.log(this.state.job);
      })
      .catch(error => {
        console.log(error);
      });
    axios
      .get('http://localhost:5000/employee/' + this.props.match.params.id)
      .then(response => {
        this.setState({
          name: response.data.name,
          surname: response.data.surname,
          job: response.data.job,
          birthdate: new Date(response.data.birthdate)
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  //jobList: response.data.map(job => job.jobList)

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeSurname(e) {
    this.setState({
      surname: e.target.value
    });
  }

  onChangeJob(e) {
    this.setState({
      job: e.target.value
    });
  }

  onChangeBirthdate(date) {
    this.setState({
      birthdate: date
    });
  }

  formatBirthdate() {
    let date = this.state.birthdate;
    let formatDate =
      date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();
    return formatDate;
  }

  onSubmit(e) {
    e.preventDefault();

    const employee = {
      id: this.state.id,
      name: this.state.name,
      surname: this.state.surname,
      job: this.state.job,
      birthdate: this.state.birthdate
    };

    //console.log(employee);
    // neni to uplne idealni, asi by to chtelo refaktoring, mozna pres redux
    if (
      window.confirm(`Jsou vložena data správná?
      Jméno: ${this.state.name}
      Přijmení: ${this.state.surname}
      Pozice: ${this.state.job}
      Datum narození: ${this.formatBirthdate()}
      Kliknutím na tlačítko OK, záznam uložíte.
      `)
    ) {
      //console.log(employee);
      axios
        .post(
          'http://localhost:5000/employee/update/' + this.props.match.params.id,
          employee
        )
        .then(res => console.log(res.data));

      window.location = '/';
    } else {
    }
  }

  render() {
    return (
      <div>
        <h3>Editace nového zaměstnance</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Jméno: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
            />
          </div>
          <div className="form-group">
            <label>Přijmení: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.surname}
              onChange={this.onChangeSurname}
            />
          </div>
          <div className="form-group">
            <label>Pracovní pozice: </label>
            <select
              ref="userInput"
              required
              className="form-control"
              value={this.state.job}
              onChange={this.onChangeJob}
            >
              {this.state.jobList.map(function(job) {
                return (
                  <option key={job} value={job}>
                    {job}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label>Datum narození: </label>
            <div>
              <DatePicker
                selected={this.state.birthdate}
                onChange={this.onChangeBirthdate}
                showYearDropdown
                showMonthDropdown
                locale="cs"
                dateFormat="dd/MM/yyyy"
              />
            </div>
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Edituj zaměstnance"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
