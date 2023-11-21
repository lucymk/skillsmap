/* eslint-disable react/prop-types */
import * as React from 'react'
import { useState, useEffect } from 'react'
import { Link, graphql } from 'gatsby'
import { SubjectButton } from '../../components/buttons'
import Layout from '../../components/layout'
import { H1, Copy } from '../../components/shared'
import NextIconSvg from '../../assets/icons/nextActive.svg'
import NextIconDisabledSvg from '../../assets/icons/nextDisabled.svg'

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
        maxWidth: '800px',
      }}
    >
      {children}
    </div>
  )

  return (
    <Layout>
      <H1>Choose your subjects</H1>
      <Copy>
        <p>
          Pick 1, 2 or 3 subjects that you are already studying, or would like
          to study, to see the skills you build in them. If you choose more than
          1 subject you will be shown the overlapping skills between them.
        </p>
        <div style={{ display: 'flex', alignItems: 'center' }}>
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
                    selectedSubjectCount={selectedSubjectCount}
                  />
                )
              }
            )}
          </SubjectGrid>
          {selectedSubjectCount > 0 ? (
            <Link to={`./search/?subjects=${getSelectedSubjectsQueryString()}`}>
              <NextIconSvg />
            </Link>
          ) : (
            <NextIconDisabledSvg />
          )}
        </div>
      </Copy>
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
