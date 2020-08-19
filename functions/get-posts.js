const fetch = require('node-fetch')

exports.handler = async () => {
  console.log(process.env.API_URL)

  const response = await fetch(`${process.env.API_URL}/articles`)
    .then(res => res.json())
    .catch(err => console.error(err)) // eslint-disable-line

  return {
    statusCode: 200,
    body: JSON.stringify(response)
  }
}
