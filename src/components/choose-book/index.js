import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import {
  loadBooks
} from '../../redux/actions'

class ChooseBook extends Component {
  static propTypes = {
    loadBooks: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired
  }

  componentWillMount () {
    this.props.loadBooks()
  }

  render() {
    const {
      books
    } = this.props

    return (
      <div className="app-main">
      <h1>Choose a book to edit</h1>
        {books && books.map(book => {
          const link = `/edit-book/${book._id}`
          return (
            <div key={book._id}>
              <Link to={link}>{book.name}</Link>
            </div>
          )
        })}
      </div>
    )
  }
}

const mapState = state => {
  const { books } = state

  return {
    books
  }
}

const mapActions = (dispatch, ownProps) => {
  return {
    loadBooks: () => dispatch(loadBooks())
  }
}

export default connect(mapState, mapActions)(ChooseBook)
