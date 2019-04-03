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

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.bookSearch);
    API.getBooks(this.state.bookSearch)
      .then(res => this.setState({books: res.data}))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { value } = event.target;

    this.setState({
      bookSearch: value
    })
  }

  render() {
    return (
      <div>
        <Nav />
        <Parallax />
        <Form
          onClick={this.handleFormSubmit}
          onChange={this.handleInputChange}
        />
      </div>
    )

  }
}

export default App;
