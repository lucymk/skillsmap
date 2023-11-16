/* eslint-disable react/prop-types */
import * as React from 'react'
import { useState, useEffect } from 'react'
import { Link, graphql } from 'gatsby'
import { SubjectButton } from '../components/buttons'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import { H1WithSubheader } from '../components/shared'

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
    setSelectedSubjectCount(
      Object.values(selectedSubjects).filter(Boolean).length
    )
  }, [selectedSubjects])

  const getSelectedSubjectsQueryString = () => {
    let subjectNames = []

    Object.entries(selectedSubjects).map(([subject, selected]) => {
      if (selected) subjectNames = [...subjectNames, subject]
    })
    return subjectNames.join().replace(/\s/g, '+')
  }

  const SubjectGrid = ({ children }) => (
    <div
      style={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, var(--skills-button-width))',
        gridGap: 'var(--spacing-m)',
        paddingTop: 'var(--spacing-m)',
        paddingBottom: 'var(--spacing-m)',
      }}
    >
      {children}
    </div>
  )

  return (
    <Layout>
      <H1WithSubheader
        headerText="Choose your subjects"
        subheaderText="Choose a subject to see the skills you are building in it. Choose up to
        3 subjects to see the overlap of skills between them."
      />
      <SubjectGrid>
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
      </SubjectGrid>
      {selectedSubjectCount > 0 ? (
        <Link
          to={`/searchResults/?subjects=${getSelectedSubjectsQueryString()}`}
          style={{ alignSelf: 'flex-end', marginTop: 'var(--spacing-m)' }}
        >
          <StaticImage
            src="../assets/icons/skillsMapNextActive.png"
            width={400}
          />
        </Link>
      ) : (
        <StaticImage
          src="../assets/icons/skillsMapNextDisabled.png"
          width={400}
          style={{ alignSelf: 'flex-end', marginTop: 'var(--spacing-m)' }}
        />
      )}
    </Layout>
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
