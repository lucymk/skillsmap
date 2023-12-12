/* eslint-disable react/prop-types */
import * as React from 'react'
import { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import {
  SubjectTags,
  SkillsButtons,
  SkillsMapButton,
} from '../../../components/buttons'
import Breadcrumbs from '../../../components/breadcrumbs'
import Layout from '../../../components/layout'
import { H1, Copy } from '../../../components/shared'

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

const getSkillsFromSelectedSubjects = ({
  selectedSubjects,
  inactivatedSubjects,
  skills,
}) => {
  const subjectsToFilterBy = selectedSubjects.filter(
    (subject) => !inactivatedSubjects[subject]
  )

  return (
    selectedSubjects &&
    skills.filter(
      ({ data: { Subjects: subjects } }) =>
        subjects != null &&
        subjectsToFilterBy.every((subjectToFilterBy) =>
          subjects.includes(subjectToFilterBy)
        )
    )
  )
}

const renderRelevantSkills = (
  selectedSubjects,
  inactivatedSubjects,
  relevantSkills,
  href
) => {
  console.log('alltrue', !Object.values(inactivatedSubjects))

  switch (true) {
    case relevantSkills.length === 0:
      return (
        <>
          <h3>No overlapping skills in these subjects</h3>
          <p>
            SkillsMap&#174; has been built using a sample of about 80 different
            transferable skills. So although your search today has not produced
            any skills in common between your chosen subjects, if we did a more
            detailed search of a bigger list of skills, you would find some
            skills your chosen subjects have in common.
          </p>
          <p>
            When subjects have skills in common then that can help you
            understand why you might enjoy or be good at different subjects. But
            remember too that if you study very different subjects, you are
            developing an even broader range of skills across those subjects,
            which will be really helpful in preparing you to use those skills in
            the workplace later on.
          </p>
          <p>Why not try searching again by clicking below?</p>
          <SkillsMapButton />
        </>
      )

    case Object.values(inactivatedSubjects).every((value) => value === true):
      return (
        <>
          <h3>No subjects selected</h3>
          <p>Why not try searching again by clicking below?</p>
          <SkillsMapButton />
        </>
      )
    case selectedSubjects.length === 1 ||
      Object.values(inactivatedSubjects).filter((value) => value === false)
        .length === 1:
      return (
        <>
          <h3 style={{ fontWeight: 'normal' }}>
            Transferable skills you are developing in this subject:
          </h3>
          <SkillsButtons originPath={href} skillsArray={relevantSkills} />
        </>
      )
    default:
      return (
        <>
          <h3 style={{ fontWeight: 'normal' }}>
            And these are the skills that these subjects have in common:
          </h3>
          <SkillsButtons originPath={href} skillsArray={relevantSkills} />
        </>
      )
  }
}

const SkillsMapSearchResults = ({
  data: {
    skills: { nodes: skills },
    allSubjects: { nodes: allSubjects },
  },
  location: { href },
}) => {
  const [selectedSubjects, setSelectedSubjects] = useState([])
  const [relevantSkills, setRelevantSkills] = useState([])
  const [inactivatedSubjects, setInactivatedSubjects] = useState({})

  useEffect(() => {
    setSelectedSubjects(getSelectedSubjectsArrayFromSearchQuery({ href }))
  }, [])

  useEffect(() => {
    setRelevantSkills(
      getSkillsFromSelectedSubjects({
        selectedSubjects,
        inactivatedSubjects,
        skills,
      }).map(({ data: { Skill } }) => Skill)
    )
  }, [selectedSubjects, inactivatedSubjects])

  useEffect(() => {
    let arrayOfSubjects = getSelectedSubjectsArrayFromSearchQuery({ href })
    const obj = {}
    arrayOfSubjects.forEach((subject) => {
      obj[subject] = false
    })
    setInactivatedSubjects(obj)
  }, [])

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
    selectedSubjects.length > 0 && (
      <Layout>
        <Breadcrumbs
          crumbs={[
            { label: 'SkillsMap® Tool', path: '/skillsmapTool/' },
            { label: 'Search results' },
          ]}
        />
        <H1>See your transferable skills</H1>
        <Copy>
          <SubjectTags
            setInactivatedSubjects={setInactivatedSubjects}
            inactivatedSubjects={inactivatedSubjects}
            subjectsArray={selectedSubjects}
          />
          {renderRelevantSkills(
            selectedSubjects,
            inactivatedSubjects,
            relevantSkills,
            href
          )}
        </Copy>
      </Layout>
    )
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
