import axios from 'axios'

export default class ServicesService {
  url = 'https://hackathon-globo-back.herokuapp.com/api';

  getTeams = () => {
    return axios.get(`${this.url}/teams`)
  }

  getTeam = (id) => {
    return axios.get(`${this.url}/teams/${id}`)
  }

  getMemes = () => {
    return axios.get(`${this.url}/memes`)
  }

  getMeme = (id) => {
    return axios.get(`${this.url}/memes/${id}`)
  }

  getProfiles = () => {
    return axios.get(`${this.url}/profiles`)
  }

  getProfile = (id) => {
    return axios.get(`${this.url}/profiles/${id}`)
  }

  getChat = () => {
    return axios.get(`${this.url}/chat`)
  }
}