import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const User = (props) => (
  <tr>
    <td>{props.user.username}</td>
    <td>{props.user.gender}</td>
    <td>{props.user.dob.substring(0, 10)}</td>
    <td>{props.user.news === true ? "true" : "false"}</td>
    <td>{props.user.email}</td>
    <td>{props.user.photo}</td>
    <td>
      <Link to={"/edit/" + props.user._id}>Edit</Link> |{" "}
      <a
        href="/"
        onClick={() => {
          props.deleteUser(props.user._id);
        }}
      >
        Delete
      </a>{" "}
      | <Link to={"/details/" + props.user._id}>Details</Link>
    </td>
  </tr>
);

export default class UsersList extends Component {
  constructor(props) {
    super(props);

    this.deleteUser = this.deleteUser.bind(this);

    this.state = { users: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/users/")
      .then((response) => {
        this.setState({ users: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteUser(id) {
    axios.delete("http://localhost:5000/users/" + id).then((response) => {
      console.log(response.data);
    });

    this.setState({
      users: this.state.users.filter((el) => el._id !== id),
    });
  }

  userList() {
    return this.state.users.map((currentuser) => {
      return (
        <User
          user={currentuser}
          deleteUser={this.deleteUser}
          key={currentuser._id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Subscribed Users</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Gender</th>
              <th>Date of birth</th>
              <th>news</th>
              <th>Email</th>
              <th>Photo</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.userList()}</tbody>
        </table>
      </div>
    );
  }
}
