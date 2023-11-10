/* eslint-disable react/prop-types */
import * as React from 'react'
import { graphql } from 'gatsby'

const SkillsmapSearchPage = ({
  data: {
    allAirtable: { nodes: dataFromAirtable },
  },
}) => {
  return (
    <main>
      <h1>Skillsmap Search</h1>
      <p>Skillsmap Search Text ...</p>
    </main>
  )
}

export default SkillsmapSearchPage

// queryName filters by table, see gatsby-config
export const query = graphql`
  query {
    allAirtable(filter: { queryName: { eq: "Subjects" } }) {
      nodes {
        data {
          Skill
        }
      }
    }
  }
`
