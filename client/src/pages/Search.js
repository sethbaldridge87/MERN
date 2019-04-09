import React, { Component } from "react";
import Form from "../components/Form";
import {BookList, BookListItem} from "../components/BookList";
import API from "../utils/API";

class App extends Component {

  state = {
    books: [],
    bookSearch: "",
    bookSave: {}
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getBooks(this.state.bookSearch)
      .then(res => {
        // console.log(res);
        this.setState({
          books: res.data
        })
      })
      .catch(err => console.log("This is an error " + err));
  };

  handleInputChange = event => {
    const { value } = event.target;

    this.setState({
      bookSearch: value
    })
  };

  render() {
    return (
      <div>
        <Form
          onClick={this.handleFormSubmit}
          onChange={this.handleInputChange}
        /><br />
        {!this.state.books.length ? (
          <h1 id="noBook">No Books to Display</h1>
        ) : (
          <BookList>
            {this.state.books.map(book => {
              return (
                <BookListItem key={book.id}
                  title={book.volumeInfo.title}
                  authors={book.volumeInfo.authors}
                  description={book.volumeInfo.description}
                  image={book.volumeInfo.imageLinks.smallThumbnail}
                  link={book.volumeInfo.infoLink}
                />
              )
            })}
          </ BookList>
        )}
      </div>
    )
  }
}

export default App;
