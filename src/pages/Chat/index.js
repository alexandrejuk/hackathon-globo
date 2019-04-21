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
    count: 0,
  }

  componentDidMount() {
    this.servicesService = new ServicesService();
    this.getMessagesBot();
    this.getMemes();
  }


  getMemes = () => {
    this.servicesService.getMemes()
      .then(response => this.setState({ memes: response.data.data }))
  }
  
  getMessagesBot = () => {
    this.servicesService.getChat()
      .then(response => this.setState({ botMessages: response.data.data }))
  }

  setMessages = text => {
    const { myMessages } = this.state
    this.setState({ 
      myMessages: [
        ...myMessages, 
        { id: Math.random() + 12 , text, bot: false, url: '' }
      ]
    }, this.setMessgagesBot)
  }

  setMessgagesBot = () => {
    const { myMessages, botMessages, count, memes } = this.state
    if(count < botMessages.length) {
      return this.setState({ 
        myMessages: [
          ...myMessages, 
          {...botMessages[count], url: memes[count].url },
        ]
      }, 
        () => this.setState({ count: count + 1 }), 3000)
    }
    return this.setState({ 
      myMessages: [
        ...myMessages, 
        { id: myMessages.length + 1, text: 'serviço indisponivel...', bot: true, url: '' }
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
