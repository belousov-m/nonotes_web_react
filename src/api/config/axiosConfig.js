import axios from 'axios'

const api = axios.create({
  withCredentials: true,
  headers: {},
  baseURL: "http://localhost:3000/api/v1"
})

export default api