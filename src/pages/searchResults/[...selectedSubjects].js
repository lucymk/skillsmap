/* eslint-disable react/prop-types */
import * as React from 'react'
import { graphql } from 'gatsby'
import { SubjectTag, SkillsButton } from '../../components/buttons'

const GetSelectedSubjectsArrayFromSearchQuery = ({ search }) =>
  search
    .substring(search.indexOf('=') + 1)
    .replace(/\+/g, ' ')
    .split(',')

const GetSkillsFromSelectedSubjects = ({ selectedSubjects, skills }) =>
  skills.filter(
    ({ data: { Subjects } }) =>
      Subjects != null && selectedSubjects.every((r) => Subjects.includes(r))
  )

const SkillsMapSearchResults = ({
  data: {
    skills: { nodes: skills },
  },
  location: { search },
}) => {
  const selectedSubjects = GetSelectedSubjectsArrayFromSearchQuery({ search })
  const relevantSkills = GetSkillsFromSelectedSubjects({
    selectedSubjects,
    skills,
  })

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
  }
`
