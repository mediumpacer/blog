const fetch = require('node-fetch')

exports.handler = async () => {
  const response = await fetch(`${process.env.API_URL}/articles`)
    .then(res => res.json())
    .catch(err => console.error(err)) // eslint-disable-line

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
    },
    body: JSON.stringify(response)
  }
}
