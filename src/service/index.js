import axios from 'axios'

export default class ServicesService {
  url = 'http://localhost:3003/api';

  getTeams = () => {
    return axios.get(`${this.url}/teams`)
  }

  getTeam = (id) => {
    return axios.get(`${this.url}/teams/${id}`)
  }

  getBrands = () => {
    return axios.get(`${this.url}/brands`)
  }

  getBrand = (id) => {
    return axios.get(`${this.url}/brands/${id}`)
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
}