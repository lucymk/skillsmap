/* eslint-disable react/prop-types */
import * as React from 'react'
import { useState, useEffect } from 'react'
import { Link, graphql } from 'gatsby'
import {
  SubjectButton,
  SubjectGridAndButton,
  SubjectGrid,
} from '../../components/buttons'
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

  return (
    <Layout>
      <H1>Choose your subjects</H1>
      <Copy>
        <p>
          Choose subjects you are studying or want to study to see the
          transferable skills you are developing.{' '}
        </p>
        <p>
          Choose 1 subject, or choose 2 or 3 subjects to see the skills they
          have in common with each other.
        </p>
        <SubjectGridAndButton>
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
            <Link to="">
              <NextIconDisabledSvg />
            </Link>
          )}
        </SubjectGridAndButton>
      </Copy>
    </Layout>
  )
}

export default SkillsmapSearchPage

// queryName filters by table, see gatsby-config
export const query = graphql`
  query {
    subjects: allAirtable(
      filter: { queryName: { eq: "Subjects" } }
      sort: { data: { Subject: ASC } }
    ) {
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
