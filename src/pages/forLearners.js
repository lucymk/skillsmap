/* eslint-disable react/prop-types */
import * as React from "react"
import { graphql } from 'gatsby'

const ForLearnersPage = ({
    data: {
      allAirtable: { nodes: dataFromAirtable },
    },
  }) => {
    return (
        <main>
            <h1>For Learners</h1>
            <p>For Learners Text ...</p>
        </main>
    )
}

export default ForLearnersPage

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
