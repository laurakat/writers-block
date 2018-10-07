import React, { Component } from 'react';
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

class ChapterSection extends Component {
  static propTypes = {
    chapterTitle: PropTypes.string.isRequired,
    chapterPages: PropTypes.array.isRequired
  }

  render () {
    const {
      chapterTitle,
      chapterPages
    } = this.props

    return (
      <div className='chapter-section'>
        <div className='chapter-title'>{chapterTitle}</div>
        {chapterPages.map(page => {

          const link = `/edit-page/${page._id}`

          return (
            <div key={page._id}>
              <Link to={link}>{page.name}</Link>
            </div>
          )
        })}
      </div>
    )
  }
}

export default ChapterSection
