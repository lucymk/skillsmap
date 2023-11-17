/* eslint-disable react/prop-types */
import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import Breadcrumbs from '../../components/breadcrumbs'
import WorkplaceExamples from '../../components/workplaceExamples'
import { H1, Copy } from '../../components/shared'
import ClusterCategory from '../../components/clusterCategory'
import NextActiveSvg from '../../assets/icons/nextActive.svg'
import { Link, navigate } from 'gatsby'

const getSelectedSkill = (allSkills, pathname) => {
  const selectedSkill = pathname.replace('/skills/', '').replace('/', '')

  if (allSkills) {
    return allSkills.filter(({ data: { Skill: skill } }) => {
      console.log('compare', skill.replace(/\s/g, '+'), selectedSkill)

      return skill.replace(/\s/g, '+') == selectedSkill
    })
  }
}

const SkillOverviewPage = ({
  data: {
    allAirtable: { nodes: allSkills },
  },
  location: { pathname },
}) => {
  const [
    {
      data: {
        Skill,
        SkillDefinition,
        WorkplaceExample1,
        WorkplaceExample2,
        WorkplaceExample3,
        WorkplaceExample4,
        Category,
        Cluster,
      },
    },
  ] = getSelectedSkill(allSkills, pathname)

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
          <WorkplaceExamples
            examples={[
              WorkplaceExample1,
              WorkplaceExample2,
              WorkplaceExample3,
              WorkplaceExample4,
            ]}
          />
          <ClusterCategory cluster={Cluster} category={Category} />
        </Copy>
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
