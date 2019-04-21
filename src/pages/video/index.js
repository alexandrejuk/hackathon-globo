import React from 'react'
import palmeiras from '../../assets/movie/screencapture.png'
import './index.css'
import { Link } from 'react-router-dom'

const Video = () => (
  <Link to="/chat">
    <img className="movie" src={palmeiras} alt="palmeiras"/>
  </Link>
)

export default Video