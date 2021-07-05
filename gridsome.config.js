// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'The Atheran Times',
  siteUrl: 'https://www.atherantimes.com/',
  titleTemplate: '%s - The Atheran Times',
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss",
    },
    {
      use: '@gridsome/source-ghost',
      options: {
        typeName: 'Ghost',
        baseUrl: 'http://localhost:2368',
        contentKey: 'cb423f90efeecaa57ee3ba7daf',
        version: 'v4' // default
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        exclude: ['/staff'],
        config: {
          '/careers/*': {
            changefreq: 'monthly',
            priority: 0.7,
            lastmod: '2021-07-05',
          },
          '/about': {
            changefreq: 'monthly',
            priority: 0.7,
            lastmod: '2021-07-05',
          },
          '/people': {
            changefreq: 'monthly',
            priority: 0.7,
            lastmod: '2021-07-05',
          }
        }
      }
    },
    {
      use: 'gridsome-plugin-robots-txt'
    },
    {
      use: 'gridsome-plugin-seo'
    }
  ],
  templates: {
    GhostPost: '/:year/:month/:day/:slug',
    GhostTag: '/tag/:slug'
  }
}
