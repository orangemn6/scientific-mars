module.exports = {
  siteMetadata: {
    name: `Orangemn6`,
    description: `A web developer`,
    keywords: [`gatsby`, `gatsbyjs`, `webdev`],
    siteUrl: `https://something.netlify.com`,
    siteImage: `https://something.netlify.com/images/terminal-open-graph-image.jpg`,
    profileImage: `https://something/images/terminal-profile-image.jpg`,
    lang: `en`,
    config: {
      sidebarWidth: 280,
    },
  },
  plugins: [
    {
      resolve: `@pauliescanlon/gatsby-theme-terminal`,
      options: {
        source: [`posts`, `projects`],
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-76055934-8",
      },
    },
  ],
}
