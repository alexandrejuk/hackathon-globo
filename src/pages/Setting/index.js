import React, { Component } from 'react'
import SettingContainer from '../../containers/Setting'
import NavBar from '../../components/Navbar'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'
import ServicesServices from '../../service'

class Setting extends Component {
  servicesServices = null
  state = {
    teams:[],
    profiles: [],
    index: 0,
    teamSelectedId: null,
    profileSelectedId: null,
  }
  
  componentDidMount() {
    this.servicesServices = new ServicesServices();
    this.getProfiles();
    this.getTeams();
  }

  getProfiles() {
    this.servicesServices.getProfiles()
      .then((response) => {
        this.setState({ profiles: response.data.data });
      })
  }

  getTeams() {
    this.servicesServices.getTeams()
    .then((response) => {
      this.setState({ teams: response.data.data })
    })
  }

  handleSelected = (type, id) => {
    switch (type) {
      case 'team':
        return this.setState({ teamSelectedId: id });
      default:
        return this.setState({ profileSelectedId: id })
    }
  }

  handleNext = () => {
    const { 
      profileSelectedId, 
      teamSelectedId, 
      index,
    } = this.state;
    if(teamSelectedId && index === 0) {
      const index = this.state.index + 1;
      this.setState({ index })
    }

    if(profileSelectedId && index === 1) {
      const index = this.state.index + 1;
      this.setState({ index })
    }
  }

  render() {
    const { 
      teamSelectedId,
      profileSelectedId,
      teams,
      index,
      profiles,
    } = this.state;
    
    return (
      <div>
        <NavBar appName="Cavalinho Virtual"/>
        <SettingContainer 
          index={index} 
          teams={teams}
          teamSelectedId={teamSelectedId}
          profileSelectedId={profileSelectedId}
          profiles={profiles}
          onClick={this.handleSelected}
        />
        {
          this.state.index < 1 ?
          <Button onClick={this.handleNext}> Próximo</Button> :
          <Link to='/chat' params={{ testvalue: "hello" }}>
            <Button onClick={() => ''}> Concluir</Button>
          </Link>
        }
      </div>
    )
  }
}

export default Setting
