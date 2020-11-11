require('dotenv').config()
const config = {
  API_BASEURL: process.env.REACT_APP_API_BASEURL
}

console.log(config)
export default config;