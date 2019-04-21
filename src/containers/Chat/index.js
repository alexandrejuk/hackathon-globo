import React, { Component } from 'react'
import './index.css'
import palmeira from '../../assets/movie/palmeiras.png'
import { Link } from 'react-router-dom'

class Chat extends Component {
 
  render() { 
    return (
      <div className="wrapper-chat">
        <div className="message-content">
            <div className="profileImage">
              <img className="avatar" src="https://avatars1.githubusercontent.com/u/20932604?s=460&v=4" alt="avatar"/>
            </div>
            <div className="message">
              Avanti Palestra! Sou o XXX e estou aqui para 
              te ajudar a ficar conectado com Verdão.
            </div>
            <div className="profileImage">
              <img className="avatar" src="https://avatars1.githubusercontent.com/u/20932604?s=460&v=4" alt="avatar"/>
            </div>
            <div className="message">
              Vou estar presente no dia-a-dia do clube, 
              durante os jogos, na coletiva de imprensa, 
              e, claro, em todos os títulos que estão por vir.
            </div>
            <div className="profileImage">
              <img className="avatar" src="https://avatars1.githubusercontent.com/u/20932604?s=460&v=4" alt="avatar"/>
            </div>
            <div className="message">
              Para começar bem, que tal relembrar o grande título da Libertadores de 99? 
              Ou você prefere o Brasileiro de 2016? Quem sabe, o fim da fila em 93?
            </div>
            <div className="profileImage">
              <img className="avatar" src="https://avatars1.githubusercontent.com/u/20932604?s=460&v=4" alt="avatar"/>
            </div>
            <div className="message">
              <Link to="/video">
                <img src={palmeira} alt="palmeira" /> <br />
              </Link>
              Palmeiras Libertadores
            </div>
        </div>
        <div className="inputChat">
          <input placeholder="digite sua mensagem..."/>
          <button>enviar</button>
        </div>
      </div>
    )
  }
}
 
export default Chat