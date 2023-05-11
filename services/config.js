import axios from 'axios'

export const bayutApi = axios.create({
  baseURL: 'https://bayut.p.rapidapi.com'
})
