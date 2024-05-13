// jsonServer.js
const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  const response = await fetch('http://localhost:3000' + event.path);
  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};