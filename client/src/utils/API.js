import axios from "axios";

export default {
    getBooks: function(query) {
        return axios.get("/api/books", { params: { q: query } });
    },
    saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
    },
    getSavedBooks: function() {
        return axios.get("/api/booksDB");
    },
    deleteBook: function(id) {
        console.log("Request at API****************************");
        console.log(id.selection.key);
        return axios.delete("/api/books/" + id.selection.key);
    }
}