import React, { Component } from "react";
import {SavedList, SavedListItem} from "../components/SavedList";
import API from "../utils/API";

class Saved extends Component {
    state = {
        books: []
    };
    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        API.getSavedBooks()
            .then(res => 
                this.setState({books: res.data})
            )
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div><br /><br />
                {!this.state.books.length ? (
                    <h1>No Books to Display</h1>
                ) : (
                    <SavedList>
                        {this.state.books.map(book => {
                            return (
                                <SavedListItem key={book._id}
                                    title={book.title}
                                    authors={book.authors}
                                    description={book.description}
                                    image={book.image}
                                    link={book.link}
                                    id={book._id}
                                />
                            )
                        })}
                    </SavedList>
                )}
            </div>
        );
    }
}

export default Saved;