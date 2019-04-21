import React, { Component } from 'react'
import './index.css'

class TeamList extends Component {
  handleIconTeam  = team => {
    return (
      <img 
        key={team.id} 
        src={team.icon} 
        alt={team.name} 
        className={this.props.teamSelectedId === team.id ? `iconTeam checked`: 'iconTeam'}
        onClick={() => this.props.onClick('team', team.id)}
      />
    )
  }

  render() { 
    const { teams } = this.props;
    return (
      <div className="wrapper">
        <h1 className="title">1. Selecione seu time</h1>
        <p className="subtitle">Brasileiro Série A</p>
        <div className="iconGroup">
          {teams.map(this.handleIconTeam)}
        </div>
      </div>
    )
  }
}
 
export default TeamList