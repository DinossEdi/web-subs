import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

export default class EditUser extends Component {
  constructor(props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangedob = this.onChangedob.bind(this);
    this.onChangeNews = this.onChangeNews.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePhoto = this.onChangePhoto.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onClick = this.onClick.bind(this);
    this.toggleChange = this.toggleChange.bind(this);
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
  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }
  onChangeGender(e) {
    this.setState({
      gender: e.target.value,
    });
  }
  onChangedob(date) {
    this.setState({
      dob: date,
    });
  }
  onChangeNews(e) {
    this.setState({
      news: e.target.checked,
    });
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  onChangePhoto(e) {
    this.setState({
      photo: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const user = {
      username: this.state.username,
      gender: this.state.gender,
      dob: this.state.dob,
      news: this.state.news,
      email: this.state.email,
      photo: this.state.photo,
    };
    console.log(user);
    axios
      .put(
        "http://localhost:5000/users/update/" + this.props.match.params.id,
        user
      )
      .then((res) => console.log(res.data));
    window.location = "/";
  }
  onClick = (nr) => () => {
    this.setState({
      gender: nr,
    });
  };
  toggleChange() {
    this.setState({
      checked: !this.state.checked,
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
        <h3>Edite user</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
          </div>
          <div className="form-check-inline">
            <input
              type="radio"
              onClick={this.onClick("male")}
              value="male"
              checked={this.state.gender === "male" ? true : false}
              onChange={this.onChangeGender}
            />
            <label className="form-check-label">Male</label>
          </div>

          <div className="form-check-inline">
            <input
              type="radio"
              onClick={this.onClick("female")}
              value="female"
              checked={this.state.gender === "female" ? true : false}
              onChange={this.onChangeGender}
            />

            <label className="form-check-label">Female</label>
          </div>

          <div className="form-group">
            <label>Date of birth</label>
            <DatePicker selected={this.state.dob} onChange={this.onChangedob} />
          </div>

          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              onChange={this.onChangeNews}
              value={this.onChangeNews}
            />
            <label className="form-check-label">Accepte news {value}</label>
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
          </div>

          <div className="form-group">
            <label>Url of photo</label>
            <input
              type="text"
              className="form-control"
              placeholder="Url of Photo"
              value={this.state.photo}
              onChange={this.onChangePhoto}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              className="btn btn-primary"
              value="Edite User"
            />
          </div>
        </form>
      </div>
    );
  }
}
