// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "La Firma Bienes Raices",
  siteUrl: "https://lafirmabienesraices.co",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Property",
        baseDir: "./properties",
        path: "*.md",
        resolveAbsolutePaths: true
      }
    }
  ],
  templates: {
    Property: "/:title-:address"
  }
};
