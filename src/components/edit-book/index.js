import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import get from 'lodash/get'

import '../../styles/app.css';

import {
  getBookPages
} from '../../redux/actions'

import ChapterSection from './chapter-section'

class EditBook extends Component {
  static propTypes = {
    getBookPages: PropTypes.func.isRequired,
    pages: PropTypes.array.isRequired,
    match: PropTypes.object
  }

  componentWillMount () {
    const bookId = get(this, 'props.match.params.bookId')
    console.log(this.props)
    this.props.getBookPages(bookId)
  }

  render () {
    const {
      pages
    } = this.props

    const pagesByChapter = {}

    pages.forEach(page => {
      pagesByChapter[page.chapterTitle] = pagesByChapter[page.chapterTitle] || []
      pagesByChapter[page.chapterTitle].push(page)
    })

    return (
      <div className="app-main">
        <h1>Edit Pages</h1>
        {
          Object.keys(pagesByChapter).map(key => {

            return (
              <ChapterSection
                chapterTitle={key}
                chapterPages={pagesByChapter[key]} />
            )
          })
        }
      </div>
    )
  }
}

const mapState = state => {
  const { pages } = state

  return {
    pages
  }
}

const mapActions = (dispatch, ownProps) => {
  return {
    getBookPages: bookId => dispatch(getBookPages(bookId))
  }
}

export default connect(mapState, mapActions)(EditBook)
