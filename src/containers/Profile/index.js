import React, { Component } from 'react'
import './index.css'
import {
  casual,
  estadio,
  trompete,
} from '../../assets/icon'

class Profile extends Component {
 
  imagePath = {
    casual,
    estadio,
    trompete,
  }
  handleProfile = profile => {
    return (
      <div className={profile.checked ? 'card card-profile checked' : 'card card-profile' }
        key={profile.id} 
        onClick={() => this.props.onClick('profile', profile)}
      >
        <img className="imageIcon" src={this.imagePath[profile.path]} alt={profile.title}/>
        <div className="card-info">
          <h1 className="title">{profile.title}</h1>
          <p className="subtitle">{profile.subtitle}</p>
        </div>
      </div>
    )
  }
  render() { 
    const { profiles } = this.props
    return (
      <div className="wrapper">
        <h1 className="title">2. Selecione um perfil</h1>
        <p className="subtitle">Como você quer que seu assistente seja?</p>
        <div className="content">
          {profiles.map(this.handleProfile)}
        </div>
      </div>
    )
  }
}
 
export default Profile