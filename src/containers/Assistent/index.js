import React, { Component } from 'react'
import './index.css'

class Assistent extends Component {
 
  render() { 
    return (
      <div className="wrapper">
        <h1 className="title">2. Selecione um assistente</h1>
        <p className="subtitle">Seu assistente vai te ajudar a ficar por dentro</p>
        <div className="content">
          <div className="card"></div>
          <div className="card"></div>
        </div>
      </div>
    )
  }
}
 
export default Assistent