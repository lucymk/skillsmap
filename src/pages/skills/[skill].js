/* eslint-disable react/prop-types */
import * as React from 'react'
import { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import Breadcrumbs from '../../components/breadcrumbs'
import WorkplaceExamples from '../../components/workplaceExamples'
import { H1, Copy } from '../../components/shared'
import ClusterCategory from '../../components/clusterCategory'
import NextActiveSvg from '../../assets/icons/nextActive.svg'
import { navigate } from 'gatsby'

const SkillOverviewPage = ({
  data: {
    allAirtable: { nodes: allSkills },
  },
  location: { pathname },
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
    const selected = pathname.replace('/skills/', '').replace('/', '')

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
            { label: 'Skills', path: 'FIX LINK' },
            { label: `${Skill}` },
          ]}
        />
        <H1>{Skill}</H1>
        <Copy>
          <p>
            I use this skill when I{' '}
            <b style={{ backgroundColor: 'var(--yellow)' }}>
              {SkillDefinition.toLowerCase()}
            </b>
            .
          </p>
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
        <NextActiveSvg
          style={{ cursor: 'pointer' }}
          onClick={() => navigate(-1)}
          transform="rotate(180)"
        />
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
