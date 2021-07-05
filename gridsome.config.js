// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss",
      options: {}
    },
    {
      use: '@gridsome/source-ghost',
      options: {
        typeName: 'Ghost',
        baseUrl: 'http://localhost:2368',
        contentKey: '0b7050113fba7147f358cc2f4d',
        version: 'v4' // default
      }
    }
  ],
  templates: {
    GhostPost: '/:year/:month/:day/:slug',
    GhostTag: '/tag/:slug'
  }
}
