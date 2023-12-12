/* eslint-disable no-undef */

/**
 * @type {import('gatsby').GatsbyConfig}
 *
 *
 */
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const path = require('path')
// Get paths of Gatsby's required rules, which as of writing is located at:
// https://github.com/gatsbyjs/gatsby/tree/fbfe3f63dec23d279a27b54b4057dd611dce74bb/packages/
// gatsby/src/utils/eslint-rules
const gatsbyRequiredRules = path.join(
  process.cwd(),
  'node_modules',
  'gatsby',
  'dist',
  'utils',
  'eslint-rules'
)

module.exports = {
  siteMetadata: {
    title: `SkillsMap®`,
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
        name: `SkillsMap®`,
        short_name: `SkillsMap®`,
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
      resolve: 'gatsby-plugin-eslint',
      // this is the default configuration, override only what you need
      options: {
        // Gatsby required rules directory
        rulePaths: [gatsbyRequiredRules],
        // Default settings that may be omitted or customized
        stages: ['develop'],
        cwd: process.cwd(), // path to a directory that should be considered as the current working directory
        extensions: ['js', 'jsx', 'ts', 'tsx'],
        exclude: [
          'node_modules',
          'bower_components',
          '.cache',
          'public',
          '.git',
          'dist',
        ],
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
            tableName: `Skills`,
            queryName: `Skills`,
          },
          {
            baseId: process.env.AT_BASE_ID,
            tableName: `Clusters`,
            queryName: `Clusters`,
          },
          {
            baseId: process.env.AT_BASE_ID,
            tableName: `Categories`,
            queryName: `Categories`,
          },
          {
            baseId: process.env.AT_BASE_ID,
            tableName: `Subjects`,
            queryName: `Subjects`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/about`, '/'],
      },
    },
  ],
}
