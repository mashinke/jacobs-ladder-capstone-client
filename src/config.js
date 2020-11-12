require('dotenv').config()
const config = {
  API_BASEURL: process.env.REACT_APP_API_BASEURL,
  TOKEN_KEY: process.env.REACT_APP_API_TOKEN_KEY
}

console.log(config)
export default config;