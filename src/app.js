import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import EditBook from './components/edit-book'
import ChooseBook from './components/choose-book'


class App extends Component {

  render () {
    return (
    <Router>
      <div>
        <Route exact path='/' component={ChooseBook} />
        <Route path="/edit-book/:bookId" component={EditBook} />
      </div>
    </Router>
    )
  }
}

export default App
