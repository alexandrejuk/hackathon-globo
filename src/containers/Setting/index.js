import React, { Component, Fragment } from 'react'
import TeamList from '../TeamList'
import Profile from '../Profile'

class Setting extends Component {
  content = [
    TeamList,
    Profile,
  ]

  render() {
    const { index, teams, onClick, profiles, theme } = this.props
    const Content = this.content[index]
    return (
      <Fragment>
        <Content 
        teams={teams} 
        profiles={profiles}
        onClick={onClick}
        theme={theme}
      />
      </Fragment>
    )
  }
}
 
export default Setting