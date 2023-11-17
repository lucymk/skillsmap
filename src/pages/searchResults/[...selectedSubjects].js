/* eslint-disable react/prop-types */
import * as React from 'react'
import { graphql } from 'gatsby'
import { SubjectTag, SkillsButton } from '../../components/buttons'
import Breadcrumbs from '../../components/breadcrumbs'
import Layout from '../../components/layout'
import NextActiveSvg from '../../assets/icons/nextActive.svg'

const getSelectedSubjectsArrayFromSearchQuery = ({ search }) =>
  search
    .substring(search.indexOf('=') + 1)
    .replace(/\+/g, ' ')
    .split(',')

const isSelectedSubjectsValid = ({ selectedSubjects, allSubjects }) =>
  selectedSubjects.every((selectedSubject) =>
    allSubjects
      .map(({ data: { Subject } }) => Subject)
      .includes(selectedSubject)
  )

const getSkillsFromSelectedSubjects = ({ selectedSubjects, skills }) =>
  skills.filter(
    ({ data: { Subjects: subjects } }) =>
      subjects != null &&
      selectedSubjects.every((selectedSubject) =>
        subjects.includes(selectedSubject)
      )
  )

const SubjectTags = ({ children }) => (
  <div
    style={{
      display: 'flex',
      gap: 'var(--spacing-m)',
      paddingBottom: 'var(--spacing-s)',
    }}
  >
    {children}
  </div>
)

const SkillsButtons = ({ children }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--spacing-s)',
      paddingBottom: 'var(--spacing-l)',
    }}
  >
    {children}
  </div>
)

const SkillsMapSearchResults = ({
  data: {
    skills: { nodes: skills },
    allSubjects: { nodes: allSubjects },
  },
  location: { search },
}) => {
  const selectedSubjects = getSelectedSubjectsArrayFromSearchQuery({ search })
  const relevantSkills = getSkillsFromSelectedSubjects({
    selectedSubjects,
    skills,
  })

  if (
    !isSelectedSubjectsValid({
      selectedSubjects,
      allSubjects,
    })
  ) {
    typeof window !== 'undefined' && window.location.replace('/404/')
    return <main />
  }

  return (
    <Layout>
      <Breadcrumbs breadcrumbTexts={['Subjects', 'Skills']} />
      <h1>See your transferrable skills</h1>
      <SubjectTags>
        {selectedSubjects.map((subject) => {
          return <SubjectTag key={subject}>{subject}</SubjectTag>
        })}
      </SubjectTags>
      <h3 style={{ fontWeight: 'normal' }}>
        Transferable skills you are building in these subjects:
      </h3>
      <SkillsButtons>
        {relevantSkills.map(({ data: { Skill } }) => {
          return <SkillsButton key={Skill}>{Skill}</SkillsButton>
        })}
      </SkillsButtons>
      <NextActiveSvg height="106px" style={{ transform: 'rotate(180deg)' }} />
    </Layout>
  )
}

export default SkillsMapSearchResults

// queryName filters by table, see gatsby-config
export const query = graphql`
  query {
    skills: allAirtable(filter: { queryName: { eq: "Skills" } }) {
      nodes {
        data {
          Subjects
          Skill
        }
      }
    }
    allSubjects: allAirtable(filter: { queryName: { eq: "Subjects" } }) {
      nodes {
        data {
          Subject
        }
      }
    }
  }
`
