import React, { Component, Fragment } from 'react'
import NavBar from '../../components/Navbar'
import ChatContainer from '../../containers/Chat'
import './index.css'

class Chat extends Component {
  render() {
    return (
      <Fragment>
        <NavBar style='fixed' appName="Amigo" theme='green'/>
        <ChatContainer />
      </Fragment>
      )
  }
}

export default Chat
