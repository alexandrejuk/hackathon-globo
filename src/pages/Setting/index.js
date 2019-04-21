import React, { Component } from 'react'
import SettingContainer from '../../containers/Setting'
import NavBar from '../../components/Navbar'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'

import {
  atletico_mineiro,
  botafogo,
  chapecoense,
  corinthians,
  flamengo,
  fluminense,
  gremio,
  internacional,
  palmeiras,
  paysandu,
  santos,
  sao_paulo,
  vasco,
} from '../../assets/teams'

class Setting extends Component {
  state = {
    teams: [
      { id: 1, name: 'Atletico Mineiro', icon: atletico_mineiro, checked: false },
      { id: 2, name: 'Botafogo', icon: botafogo, checked: false },
      { id: 3, name: 'Chapecoense', icon: chapecoense, checked: false },
      { id: 4, name: 'Corinthians', icon: corinthians, checked: false },
      { id: 5, name: 'Flamengo', icon: flamengo, checked: false },
      { id: 6, name: 'Fluminense', icon: fluminense, checked: false },
      { id: 7, name: 'Grêmio', icon: gremio, checked: false },
      { id: 8, name: 'Internacional', icon: internacional, checked: false },
      { id: 9, name: 'Palmeiras', icon: palmeiras, checked: false },
      { id: 10, name: 'Paysandu', icon: paysandu, checked: false },
      { id: 11, name: 'Santos', icon: santos, checked: false },
      { id: 12, name: 'São Paulo', icon: sao_paulo, checked: false },
      { id: 13, name: 'Vasco', icon: vasco, checked: false },
    ],
    profiles: [
      { id: 1, title: 'Casual', subtitle: 'Um torcedor moderado?', path: 'casual', checked: false },
      { id: 2, title: 'Corneteiro', subtitle: 'Um torcedor polêmico?', path: 'trompete', checked: false },
      { id: 3, title: 'Fanático', subtitle: 'Obcecado pelo time do coração?', path: 'estadio', checked: false },
    ],
    index: 0,
    teamSelected: '',
    profileSelected: 'casual',
  }
  
  handleSetProfile({ id }) {
    const profiles = this.state.profiles.map(
      t => t.id === id ? 
        ({...t, checked: true }) : 
        ({...t, checked: false })
    )
    this.setState({ profiles })
  }
  
  handleSetTeam({ id }) {
    const teams = this.state.teams.map(
      t => t.id === id ? 
        ({...t, checked: true }) : 
        ({...t, checked: false })
    )
    this.setState({ 
      teams,
    })
  }
  
  handleSelected = (type, value) => {
    switch(type) {
      case 'profile':
        return this.handleSetProfile(value)
      default:
        return this.handleSetTeam(value)
    }
  }

  handleNext = () => {
    if(this.state.index < 1) {
      const index = this.state.index + 1;
      this.setState({ index })
    }
  }

  render() {
    const { teams, index, profiles, theme } = this.state;
    
    return (
      <div>
        <NavBar appName="Amigo" theme={theme}/>
        <SettingContainer 
          index={index} 
          teams={teams}
          profiles={profiles}
          onClick={this.handleSelected}
          theme={theme}
        />
        {
          this.state.index < 1 ?
          <Button onClick={this.handleNext} theme={theme}> Próximo</Button> :
          <Link to='/chat' params={{ testvalue: "hello" }}>
            <Button theme={theme} onClick={() => ''}> Concluir</Button>
          </Link>
        }
      </div>
    )
  }
}

export default Setting
