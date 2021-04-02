import React, { Component } from "react";

export default class AddUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeNews = this.onChangeNews.bind(this);
    this.onChangeDob = this.onChangeDob.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePhoto = this.onChangePhoto.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      news: Boolean,
      dob: new Date(),
      gender: "",
      email: "",
      photo: "",
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
      
    })
  }
  onChangeNews(e) {
    this.setState({
      news : e.target.Boolean,
      
    })
  }
  news : e.target.Boolean,
      dob: e.target.Date,
      gender: e.target.value,
      email : e.target .value,
      photo: e.target.value
  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username
    }

  render() {
    return (
      <div>
        <p>You are in the AddUser component !</p>
      </div>
    );
  }
}
