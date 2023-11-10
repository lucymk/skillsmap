/* eslint-disable react/prop-types */
import * as React from 'react'
import { graphql } from 'gatsby'

const AboutPage = ({
  data: {
    allAirtable: { nodes: dataFromAirtable },
  },
}) => {
  return (
    <main>
      <h1>About Skillsmap</h1>
      <p>About Text ...</p>
    </main>
  )
}

export default AboutPage

// queryName filters by table, see gatsby-config

export const query = graphql`
  query {
    allAirtable(filter: { queryName: { eq: "PageContent" } }) {
      nodes {
        data {
          Skill
        }
      }
    }
  }
`
