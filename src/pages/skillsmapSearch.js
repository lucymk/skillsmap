/* eslint-disable react/prop-types */
import * as React from 'react'
import { useState, useEffect } from 'react'
import { Link, graphql } from 'gatsby'
import { SubjectButton } from '../components/buttons'
import { StaticImage } from 'gatsby-plugin-image'

const SkillsmapSearchPage = ({
  data: {
    subjects: { nodes: subjects },
  },
}) => {
  function createInitialSubjectList() {
    let subjectList = {}
    subjects.map(({ data: { Subject: subject } }) => {
      subjectList = { ...subjectList, [subject]: false }
    })
    return subjectList
  }

  const [selectedSubjects, setSelectedSubjects] = useState(
    createInitialSubjectList
  )

  const [selectedSubjectCount, setSelectedSubjectCount] = useState(0)

  useEffect(() => {
    let count = 0
    Object.values(selectedSubjects).map((selected) => {
      if (selected) count++
    })

    setSelectedSubjectCount(count)
  }, [selectedSubjects])

  const getSelectedSubjects = (returnArray) => {
    let subjectNames = []

    Object.entries(selectedSubjects).map(([subject, selected]) => {
      if (selected) subjectNames.push(subject)
    })

    if (returnArray) {
      return subjectNames
    } else {
      return subjectNames.join().toLowerCase().replace(/\s+/g, '+')
    }
  }

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
                selectedSubjects={selectedSubjects}
                setSelectedSubjects={setSelectedSubjects}
                key={subject}
                subjectIcon={url}
                subjectName={subject}
              />
            )
          }
        )}
      </div>
      {selectedSubjectCount > 0 ? (
        <Link
          state={{ selected: getSelectedSubjects(true) }}
          to={`/searchResults/?subjects=${getSelectedSubjects(false)}`}
        >
          <StaticImage
            src="../assets/icons/skillsMapNextActive.png"
            width={300}
          />
        </Link>
      ) : (
        <StaticImage
          src="../assets/icons/skillsMapNextDisabled.png"
          width={300}
        />
      )}
    </main>
  )
}

export default SkillsmapSearchPage

// queryName filters by table, see gatsby-config
export const query = graphql`
  query {
    subjects: allAirtable(filter: { queryName: { eq: "Subjects" } }) {
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
