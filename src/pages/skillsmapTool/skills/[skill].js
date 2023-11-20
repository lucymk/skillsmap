/* eslint-disable react/prop-types */
import * as React from 'react'
import { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import Layout from '../../../components/layout'
import Breadcrumbs from '../../../components/breadcrumbs'
import WorkplaceExamples from '../../../components/workplaceExamples'
import { H1, Copy } from '../../../components/shared'
import ClusterCategory from '../../../components/clusterCategory'
import { navigate } from 'gatsby'

const SkillOverviewPage = ({
  data: {
    allAirtable: { nodes: allSkills },
  },
  location: {
    pathname,
    state: { originPath },
  },
}) => {
  const [
    [
      {
        data: {
          Skill,
          WorkplaceExample1,
          WorkplaceExample2,
          WorkplaceExample3,
          WorkplaceExample4,
          SkillDefinition,
          Category,
          Cluster,
        },
      },
    ],
    setSelectedSkill,
  ] = useState([
    {
      data: {
        Skill: '',
        WorkplaceExample1: '',
        WorkplaceExample2: '',
        WorkplaceExample3: '',
        WorkplaceExample4: '',
        SkillDefinition: '',
        Category: '',
        Cluster: '',
      },
    },
  ])

  useEffect(() => {
    const selected = pathname
      .replace('/skillsmapTool/skills/', '')
      .replace('/', '')

    const singleSkill = allSkills.filter(({ data: { Skill: skill } }) => {
      return skill.replace(/\s/g, '+') == selected
    })

    setSelectedSkill(singleSkill)
  }, [])

  return (
    Skill && (
      <Layout>
        <Breadcrumbs
          crumbs={[
            { label: 'SkillsMap Tool', path: '/skillsmapTool' },
            { label: 'Skills' },
            { label: `${Skill}` },
          ]}
        />
        <H1>{Skill}</H1>
        <Copy>
          <h3 style={{ fontWeight: 'normal' }}>
            I use this skill when I{' '}
            <b style={{ backgroundColor: 'var(--yellow)' }}>
              {SkillDefinition.toLowerCase()}
            </b>
            .
          </h3>
        </Copy>
        <WorkplaceExamples
          examples={[
            WorkplaceExample1,
            WorkplaceExample2,
            WorkplaceExample3,
            WorkplaceExample4,
          ]}
        />
        <ClusterCategory cluster={Cluster} category={Category} />
        {originPath && originPath.includes('skillsmapTool') && (
          <p
            style={{ cursor: 'pointer', textDecoration: 'underline' }}
            onClick={() => navigate(-1)}
          >
            &lt; Back to search results
          </p>
        )}
      </Layout>
    )
  )
}

export default SkillOverviewPage

// queryName filters by table, see gatsby-config
export const query = graphql`
  query {
    allAirtable(filter: { queryName: { eq: "Skills" } }) {
      nodes {
        data {
          Skill
          WorkplaceExample1
          WorkplaceExample2
          WorkplaceExample3
          WorkplaceExample4
          Cluster
          Category
          SkillDefinition
        }
      }
    }
  }
`
