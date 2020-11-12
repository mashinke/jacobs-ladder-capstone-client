import config from './config';
import TokenService from './Services/TokenService';

const apiHelpers = {
  fetchGame: async () => {
    const response = await fetch(`${config.API_BASEURL}/game`, {
      headers: {
        'Authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
    return await response.json();
  },
  postGame: async (payload) => {
    await fetch(`${config.API_BASEURL}/game`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(payload)
    })
  },
  postTurn: async (payload) => {
    const response = await fetch(`${config.API_BASEURL}/turn`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(payload)
    })
    return response.json();
  },
  postLogin: async (email, password) => {
    const response = await fetch(`${config.API_BASEURL}/auth`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    if (!response.ok) {
      const error = await response.json;
      Promise.reject(error);
    } else {
      return response.json();
    }
  }
}

export default apiHelpers;