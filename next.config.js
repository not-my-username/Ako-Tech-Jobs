module.exports = {
    async redirects() {
      return [
        {
          source: '/login',
          destination: '/auth',
          permanent: true,
        },
      ]
    },
  }