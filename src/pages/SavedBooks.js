import React, { Component } from "react";
import API from "../utils/API";
import SavedResult from "../components/SavedResult"

class SaveBook extends Component {
    state = {
        savedBooks: []
    };

    componentDidMount() {
        API.getBooks()
            .then(res => this.setState({ savedBooks: res.data }))
            .catch(err => console.log(err))
    }

    handleDeleteBtn = id => {
        API.deleteBook(id)
            .then(res => this.componentDidMount())
            .catch(err => console.log(err))
    }

    render() {
        return (
            <SavedResult savedBooks={this.state.savedBooks} handleDeleteBtn={this.handleDeleteBtn} />
        )
    }
}

export default SaveBook;