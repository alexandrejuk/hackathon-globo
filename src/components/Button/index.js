import React, { Component } from 'react'
import './index.css'

class Button extends Component {

  handleClick = () => (
    this.props.onClick()
  )
  render() {
    const { children } = this.props;
    return (
      <button 
        className='btn-default'
        onClick={this.handleClick}
      >
        {children}
      </button>
    )
  }
}
 
export default Button