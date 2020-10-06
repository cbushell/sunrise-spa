const axios = require('axios');

const { YOTPO_CLIENT_ID } = process.env;
const { YOTPO_CLIENT_SECRET } = process.env;

const AUTH_API_ENDPOINT = 'https://api.yotpo.com/oauth/token';

exports.handler = async () => axios.post(AUTH_API_ENDPOINT, {
  client_id: YOTPO_CLIENT_ID,
  client_secret: YOTPO_CLIENT_SECRET,
  grant_type: 'client_credentials',
})
  .then((response) => response)
  .then((json) => json)
  .catch((error) => ({
    statusCode: 422,
    body: `Oops! Something went wrong. ${error}`,
  }));
