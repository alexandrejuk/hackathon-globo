import React, { Component, Fragment } from 'react'
import NavBar from '../../components/Navbar'
import ChatContainer from '../../containers/Chat'
import './index.css'
import ServicesService from '../../service'

class Chat extends Component {
  servicesService = null
  state = {
    myMessages: [],
    botMessages: [],
  }

  componentDidMount() {
    this.servicesService = new ServicesService();
    this.getMessagesBot();
  }

  getMessagesBot = () => {
    this.servicesService.getChat()
      .then(response => this.botMessages = response.data)
  }

  setMessages = text => {
    const { myMessages } = this.state
    
    this.setState({ 
      myMessages: [
        ...myMessages, 
        { id: myMessages.length + 1, text, bot: false, url: '' }
      ]
    })
  }

  render() {
    return (
      <Fragment>
        <NavBar fixed={true} appName="Cavalinho Virtual" theme='green'/>
        <ChatContainer 
          myMessages={this.state.myMessages}
          onClick={this.setMessages}
        />
      </Fragment>
      )
  }
}

export default Chat
