import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

export default class DetailsUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      gender: "",
      dob: new Date(),
      news: true,
      email: "",
      photo: "",
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/users/" + this.props.match.params.id)
      .then((response) => {
        if (response.data.lenght !== 0) {
          this.setState({
            username: response.data.username,
            gender: response.data.gender,
            dob: new Date(response.data.dob),
            news: response.data.news,
            email: response.data.email,
            photo: response.data.photo,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    let value;
    if (this.state.checked) {
      value = true;
    } else {
      value = false;
    }
    return (
      <div>
        <h3>Details user</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              value={this.state.username}
              readOnly="true"
            />
          </div>
          <div className="form-check-inline">
            <input
              type="radio"
              readOnly="true"
              value="male"
              checked={this.state.gender === "male" ? true : false}
            />
            <label className="form-check-label">Male</label>
          </div>

          <div className="form-check-inline">
            <input
              type="radio"
              readOnly="true"
              value="female"
              checked={this.state.gender === "female" ? true : false}
            />

            <label className="form-check-label">Female</label>
          </div>

          <div className="form-group">
            <label>Date of birth</label>
            <DatePicker selected={this.state.dob} readOnly="true" />
          </div>

          <div className="form-check form-switch">
            <input
              id="news"
              className="form-check-input"
              type="checkbox"
              readOnly="true"
              checked={this.state.news}
            />
            <label className="form-check-label">Accepte news {value}</label>
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              className="form-control"
              value={this.state.email}
              readOnly="true"
            />
          </div>

          <div className="form-group">
            <label>Url of photo</label>
            <input
              type="text"
              className="form-control"
              value={this.state.photo}
              readOnly="true"
            />
          </div>
        </form>
      </div>
    );
  }
}
