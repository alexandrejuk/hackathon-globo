import React, { Component, Fragment } from 'react'
import TeamList from '../TeamList'
import Profile from '../Profile'

class Setting extends Component {
  content = [
    TeamList,
    Profile,
  ]

  render() {
    const { 
      index,
      teams,
      onClick,
      profiles,
      teamSelectedId,
      profileSelectedId,
    } = this.props
    const Content = this.content[index]
    return (
      <Fragment>
        <Content
          teamSelectedId={teamSelectedId}
          profileSelectedId={profileSelectedId}
          teams={teams} 
          profiles={profiles}
          onClick={onClick}
        />
      </Fragment>
    )
  }
}
 
export default Setting