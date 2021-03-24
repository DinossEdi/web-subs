import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar.component";
import UsersList from "./components/users-list.component";
import EditUser from "./components/edit-user.component";
import DeleteUser from "./components/delete-user.component";
import AddUser from "./components/add-user.component";
import UserDetails from "./components/user-details.component";
function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact component={UsersList} />
      <Route path="/update/:id" exact component={EditUser} />
      <Route path="/delete/:id" exact component={DeleteUser} />
      <Route path="/add" exact component={AddUser} />
      <Route path="/:id" exact component={UserDetails} />
    </Router>
  );
}

export default App;
