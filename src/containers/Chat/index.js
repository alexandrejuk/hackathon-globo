import React, { Component } from 'react'
import './index.css'
import { iconGlobo } from '../../assets/icon'
import palmeira from '../../assets/movie/palmeiras.png'
import dd from '../../assets/movie/dd.png'
import pc from '../../assets/movie/pc.png'

import { Link } from 'react-router-dom'

class Chat extends Component {
 
  
  render() { 
    return (
      <div className="wrapper-chat">
        <div className="message-content">
            <div className="profileImage">
              <img className="avatar" src={iconGlobo} alt="avatar"/>
            </div>
            <div className="message">
              Avanti Palestra! Sou o XXX e estou aqui para 
              te ajudar a ficar conectado com Verdão.
            </div>
            <div className="profileImage">
              <img className="avatar" src={iconGlobo} alt="avatar"/>
            </div>
            <div className="message">
              Vou estar presente no dia-a-dia do clube, 
              durante os jogos, na coletiva de imprensa, 
              e, claro, em todos os títulos que estão por vir.
            </div>
            <div className="profileImage">
              <img className="avatar" src={iconGlobo} alt="avatar"/>
            </div>
            <div className="message">
              Para começar bem, que tal relembrar o grande título da Libertadores de 99? 
              Ou você prefere o Brasileiro de 2016? Quem sabe, o fim da fila em 93?
            </div>
            <div className="profileImage-you">
              <img className="avatar" src="https://avatars1.githubusercontent.com/u/20932604?s=460&v=4" alt="avatar"/>
            </div>

            <div className="message-you">
              Libertadores?
            </div>

            <div className="profileImage">
              <img className="avatar" src={iconGlobo} alt="avatar"/>
            </div>
            <div className="message">
              <Link to="/video">
                <img src={palmeira} alt="palmeira" /> <br />
              </Link>
              Palmeiras Libertadores
            </div>

            <div className="profileImage-you">
              <img className="avatar" src="https://avatars1.githubusercontent.com/u/20932604?s=460&v=4" alt="avatar"/>
            </div>

            <div className="message-you">
              <strong>O LOKINHO MEU!</strong>rsrsrs
            </div>

            <div className="profileImage-you">
              <img className="avatar" src="https://avatars1.githubusercontent.com/u/20932604?s=460&v=4" alt="avatar"/>
            </div>

            <div className="message-you">
              kkkkkk,Muito bom. O jogo não podia ter sido melhor. E qual vai ser o próximo jogo do Palmeiras?
            </div>




            <div className="profileImage">
              <img className="avatar" src={iconGlobo} alt="avatar"/>
            </div>
            <div className="message">
              <img className="imageGif"
              src="https://media.giphy.com/media/kPISav4Ud74FPeYmz8/giphy.gif" alt="gif" />
            </div>
            <div className="profileImage-you">
              <img className="avatar" src="https://avatars1.githubusercontent.com/u/20932604?s=460&v=4" alt="avatar"/>
            </div>

            <div className="message-you">
              <Link to="/video">
                <img src={palmeira} alt="palmeira" /> <br />
              </Link>
              Palmeiras Libertadores
            </div>


            <div className="profileImage">
              <img className="avatar" src={iconGlobo} alt="avatar"/>
            </div>
            <div className="message">
              <img src={dd} alt="palmeira" /> <br />
              Dudu é o nosso craque e hoje não está sendo diferente. Ele está arrebentando
            </div>


            <div className="profileImage-you">
              <img className="avatar" src="https://avatars1.githubusercontent.com/u/20932604?s=460&v=4" alt="avatar"/>
            </div>

            <div className="message-you">
              Qual a posse de bola do Palmeiras?
            </div>

            <div className="profileImage">
              <img className="avatar" src={iconGlobo} alt="avatar"/>
            </div>
            <div className="message">
              <img src={pc} alt="palmeira" /> <br />
              Dudu é o nosso craque e hoje não está sendo diferente. Ele está arrebentando
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