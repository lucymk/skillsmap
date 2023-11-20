/* eslint-disable react/prop-types */
import * as React from 'react'
import { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import { SubjectTags, SkillsButtons } from '../../../components/buttons'
import Breadcrumbs from '../../../components/breadcrumbs'
import Layout from '../../../components/layout'

const getSelectedSubjectsArrayFromSearchQuery = ({ href }) =>
  href &&
  href
    .substring(href.indexOf('=') + 1)
    .replace(/\+/g, ' ')
    .split(',')

const isSelectedSubjectsValid = ({ selectedSubjects, allSubjects }) =>
  selectedSubjects.every((selectedSubject) =>
    allSubjects
      .map(({ data: { Subject } }) => Subject)
      .includes(selectedSubject)
  )

const getSkillsFromSelectedSubjects = ({ selectedSubjects, skills }) =>
  selectedSubjects &&
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
  location: { href },
}) => {
  const [selectedSubjects, setSelectedSubjects] = useState([])
  const [relevantSkills, setRelevantSkills] = useState([])

  useEffect(() => {
    setSelectedSubjects(getSelectedSubjectsArrayFromSearchQuery({ href }))
  }, [])

  useEffect(() => {
    setRelevantSkills(
      getSkillsFromSelectedSubjects({
        selectedSubjects,
        skills,
      }).map(({ data: { Skill } }) => Skill)
    )
  }, [selectedSubjects])

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
      <Breadcrumbs
        crumbs={[
          { label: 'SkillsMap Tool', path: '/skillsmapTool/' },
          { label: 'Search results' },
        ]}
      />
      <h1>See your transferrable skills</h1>
      <SubjectTags subjectsArray={selectedSubjects} />
      <h3 style={{ fontWeight: 'normal' }}>
        Transferable skills you are building in these subjects:
      </h3>
      <SkillsButtons originPath={href} skillsArray={relevantSkills} />
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
