import config from './config';

const apiHelpers = {
  fetchGame: async () => {
    const response = await fetch(`${config.API_BASEURL}/game`)
    return await response.json();
  },
  postGame: async (payload) => {
    await fetch(`${config.API_BASEURL}/game`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
  },
  postTurn: async (payload) => {
    const response = await fetch(`${config.API_BASEURL}/turn`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(payload)
    })
    return response.json();
  }
}

export default apiHelpers;