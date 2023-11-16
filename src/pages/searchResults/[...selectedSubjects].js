/* eslint-disable react/prop-types */
import * as React from 'react'
import { graphql } from 'gatsby'
import { SubjectTag, SkillsButton } from '../../components/buttons'

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
  }

  return (
    <main>
      <h1>See your transferrable skills</h1>
      <div>
        {selectedSubjects.map((subject) => {
          return <SubjectTag key={subject}>{subject}</SubjectTag>
        })}
      </div>
      <div>
        {relevantSkills.map(({ data: { Skill } }) => {
          return <SkillsButton key={Skill}>{Skill}</SkillsButton>
        })}
      </div>
      Transferable skills you are building in these subjects:
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
