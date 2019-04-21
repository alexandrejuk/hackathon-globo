import React, { Component } from 'react'
import './index.css'
import { iconGlobo } from '../../assets/icon'

class Chat extends Component {
 
  state = {
    text: ''
  }
  
  sendMessage = () => {
    if(this.state.text !== '') {
      this.props.onClick(this.state.text)
      return this.setState({ text: '' })
    }
  }

  handleMessageYou = message => (
    <div key={message.id}>
      <div className="profileImage-you">
        <img 
          className="avatar" 
          src="https://avatars1.githubusercontent.com/u/20932604?s=460&v=4" 
          alt="avatar"
        />
      </div>
      <div className="message-you">
        {message.text}
      </div>
    </div>
  )


  handleMessageBot = message => (
    <div key={message.id}>
      <div className="profileImage">
        <img className="avatar" src={iconGlobo} alt="avatar"/>
      </div>
      <div className="message">
        { message.url ? <img className="avatar" src={iconGlobo} alt="avatar"/> : null } 
        { message.text }
      </div>
    </div>
  )

  handleMessage = m => (m.bot ? 
    this.handleMessageBot(m) : 
    this.handleMessageYou(m)
  )

  handleChange = e => (
    this.setState({ text: e.target.value })
  )

  render() {
    const { myMessages } = this.props
    return (
      <div className="wrapper-chat">
        <div className="message-content">
          {myMessages.map(this.handleMessage)}
        </div>
        <div className="inputChat">
          <input 
            placeholder="digite sua mensagem..."
            value={this.state.text} 
            onChange={this.handleChange}
          />
          <button onClick={this.sendMessage}>enviar</button>
        </div>
      </div>
    )
  }
}
 
export default Chat