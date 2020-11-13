import config from '../config';
import TokenService from './TokenService';

const APIService = {
  fetchGame: async () => {
    const response = await fetch(`${config.API_BASEURL}/game`, {
      headers: {
        'Authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
    if (!response.ok) {
      const error = await response.json();
      throw error;
    } else {
      return response.json();
    }
  },
  postGame: async (payload) => {
    const response = await fetch(`${config.API_BASEURL}/game`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(payload)
    })
    if (!response.ok) {
      const error = await response.json();
      throw error;
    }
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
    if (!response.ok) {
      const error = await response.json();
      throw error;
    }
  },
  postLogin: async (email, password) => {
    console.log('logging in')
    const response = await fetch(`${config.API_BASEURL}/auth`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    if (!response.ok) {
      const error = await response.json();
      throw error;
    } else {
      return response.json();
    }
  },
  postUser: async (email, password) => {
    console.log('signing up');
    const response = await fetch(`${config.API_BASEURL}/user`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    if (!response.ok) {
      const error = await response.json();
      throw error;
    }
  }
}

export default APIService;