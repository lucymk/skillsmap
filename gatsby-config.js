/* eslint-disable no-undef */

/**
 * @type {import('gatsby').GatsbyConfig}
 *
 *
 */
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Skillsmap`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `SkillsMap`,
        short_name: `SkillsMap`,
        description: `This application helps you discover the transferable skills you are building and using in your studies.`,
        lang: `en`,
        display: `standalone`,
        start_url: `/`,
        background_color: `#7495ED`,
        theme_color: `#fff`,
        icon: 'src/assets/icons/skillIcon.svg',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: './src/assets',
      },
      __key: 'assets',
    },
    {
      resolve: 'gatsby-plugin-prettier-eslint',
      // this is the default configuration, override only what you need
      options: {
        cwd: process.cwd(), // path to a directory that should be considered as the current working directory
        watch: true, // format/lint on save
        initialScan: true, // if true, will format/lint the whole project on Gatsby startup
        onChangeFullScanLint: false, // if true, on file save always perform full scan lint
        onChangeFullScanFormat: false, // if true, on file save always perform full scan format
        prettierLast: false, // if true, will run Prettier after ESLint
        ignorePatterns: [
          '**/node_modules/**/*',
          '**/.git/**/*',
          '**/dist/**/*',
          '.cache/**/*',
          'public/**/*',
        ], // string or array of paths/files/globs to ignore
        prettier: {
          patterns: [], // string or array of paths/files/globs to include related only to Prettier
          ignorePatterns: [], // string or array of paths/files/globs to exclude related only to Prettier
          customOptions: {}, // see: https://prettier.io/docs/en/options.html
        },
        eslint: {
          patterns: [], // string or array of paths/files/globs to include related only to ESLint
          ignorePatterns: ['gatsby-config.js'], // string or array of paths/files/globs to exclude related only to ESLint
          formatter: 'stylish', // set custom or third party formatter
          maxWarnings: undefined, // number of max warnings allowed, when exceed it will fail Gatsby build
          emitWarning: true, // if true, will emit lint warnings
          failOnError: false, // if true, any lint error will fail the build, you may set true only in your prod config
          failOnWarning: false, // same as failOnError but for warnings
          plugins: [], // an array of plugins to load for ESLint
          customOptions: {}, // see: https://eslint.org/docs/developer-guide/nodejs-api#cliengine
        },
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AT_PERSONAL_ACCESS_KEY, // may instead specify via env, see below
        concurrency: 5, // default, see using markdown and attachments for more information
        tables: [
          {
            baseId: process.env.AT_BASE_ID,
            tableName: `MASTERSKILLSDEFWORKEX`,
            queryName: `Skills`,
          },
          {
            baseId: process.env.AT_BASE_ID,
            tableName: `ClusterDefs`,
            queryName: `Clusters`,
        },
          {
            baseId: process.env.AT_BASE_ID,
            tableName: `CategoryDefs`,
            queryName: `Categories`,
          },
        ],
      },
    },
  ],
}
