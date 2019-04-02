import React, { Component } from "react";
import Nav from "./components/Nav";
import Parallax from "./components/Parallax";
import Form from "./components/Form";
import API from "./utils/API";
import "./App.css";

class App extends Component {

  state = {
    books: [],
    bookSearch: ""
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("handleFormSubmit has been activated");
    API.getBooks(this.state.bookSearch)
      .then(res => this.setState({books: res.data}))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Nav />
        <Parallax />
        <Form
          onClick={this.handleFormSubmit}
        />
      </div>
    )

  }
}

export default App;
