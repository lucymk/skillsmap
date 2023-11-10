/* eslint-disable react/prop-types */
import * as React from 'react'
import { useState } from 'react'
import { Link, graphql } from 'gatsby'
import { SubjectButton } from '../components/buttons'
import SkillIcon from '../assets/icons/skillIcon.svg'

const SkillsmapSearchPage = ({
  data: {
    allAirtable: { nodes: subjects },
  },
}) => {
  function createInitialSubjectList() {
    const subjectList = []
    subjects.map(({ data: { Subject: subject } }) => {
      console.log('in map', subject)
      return subjectList.push({
        subject,
        selected: false,
      })
    })
    return subjectList
  }

  const [selectedSubjects, setSelectedSubjects] = useState(
    createInitialSubjectList
  )

  return (
    <main>
      <h1>Skillsmap Search</h1>
      <p>Skillsmap Search Text ...</p>

      <div>
        {subjects.map(
          ({
            data: {
              Subject: subject,
              Icon: [{ url }],
            },
          }) => {
            return (
              <SubjectButton
                setSelectedSubjects={setSelectedSubjects}
                key={subject}
                subjectIcon={url}
                subjectName={subject}
              />
            )
          }
        )}
      </div>
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
          Subject
          Icon {
            url
          }
        }
      }
    }
  }
`
