/* eslint-disable react/prop-types */
import * as React from 'react'
import { graphql } from 'gatsby'

const ForEducatorsPage = ({
  data: {
    allAirtable: { nodes: dataFromAirtable },
  },
}) => {
  return (
    <main>
      <h1>For Educators</h1>
      <p>For Educators Text ...</p>
    </main>
  )
}

export default ForEducatorsPage
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
