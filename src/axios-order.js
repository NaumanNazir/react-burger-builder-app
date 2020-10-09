import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://react-burger-ed1c6.firebaseio.com/'
})

export default instance