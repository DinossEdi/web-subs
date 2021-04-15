import React, { Component } from "react";
import ReactDOM from "react-dom";
import Pagination from "react-js-pagination";
require("bootstrap/less/bootstrap.less");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
    };
  }

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
  }

  render() {
    return (
      <div>
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={10}
          totalItemsCount={100}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange.bind(this)}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));