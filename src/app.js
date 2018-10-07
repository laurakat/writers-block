import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import {
  ChooseBook,
  EditBook,
  EditPage
} from './components'

class App extends Component {

  render () {
    return (
    <Router>
      <div>
        <Route exact path='/' component={ChooseBook} />
        <Route path="/edit-book/:bookId" component={EditBook} />
        <Route path="/edit-page/:pageId" component={EditPage} />
      </div>
    </Router>
    )
  }
}

export default App
