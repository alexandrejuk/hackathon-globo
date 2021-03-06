import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css'

import Setting from './pages/Setting'
import Chat from './pages/Chat'
import Video from './pages/video'
class App extends Component {
  render() {
    return (
      <div className="layout">
        <Route exact path='/' component={Setting} />
        <Route path='/chat' component={Chat} />
        <Route path='/video' component={Video} />
      </div>
    )
  }
}

export default App;
