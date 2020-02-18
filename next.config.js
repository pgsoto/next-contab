module.exports = {
  env: {
    API_URL: 'http://localhost:8000',
  },
}

const withCSS = require('@zeit/next-css')
module.exports = withCSS({
  /* config options here */
  env: {
    API_URL: 'http://localhost:8000',
  },
})