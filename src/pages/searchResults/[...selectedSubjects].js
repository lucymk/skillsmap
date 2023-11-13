/* eslint-disable react/prop-types */
import * as React from 'react'
import { useState, useEffect } from 'react'
import { Link, graphql } from 'gatsby'
import { SubjectButton } from '../../components/buttons'
import { StaticImage } from 'gatsby-plugin-image'

const SkillsMapSearchResults = ({
  data: {
    skills: { nodes: skills },
  },
  location,
}) => {
  console.log({ location })
  return (
    <main>
      <h1>Your skills based on these subjects</h1>

      <div></div>
    </main>
  )
}

export default SkillsMapSearchResults

// queryName filters by table, see gatsby-config
export const query = graphql`
  query {
    skills: allAirtable(filter: { queryName: { eq: "Skills" } }) {
      nodes {
        data {
          Subject
          Skill
        }
      }
    }
  }
`
