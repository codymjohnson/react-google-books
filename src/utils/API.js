import axios from "axios"

export default {
    // grab book from google
    getGoogleSearchBooks: function (query) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query)
    },
    // grab all books
    getBooks: function () {
        return axios.get("/api/books");
    },
    // grab book w/ id
    getBook: function (id) {
        return axios.get("/api/books/" + id);
    },
    // save book to db
    saveBook: function (savedBooks) {
        return axios.post("/api/books", savedBooks);
    },
    // delete book by id
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    }
}