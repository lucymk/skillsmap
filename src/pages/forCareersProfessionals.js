/* eslint-disable react/prop-types */
import * as React from 'react'
import { graphql } from 'gatsby'

const ForCareersProfessionalsPage = ({
  data: {
    allAirtable: { nodes: dataFromAirtable },
  },
}) => {
  return (
    <main>
      <h1>For Careers Professionals Page</h1>
      <p>For Careers Professionals Text ...</p>
    </main>
  )
}

export default ForCareersProfessionalsPage

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
