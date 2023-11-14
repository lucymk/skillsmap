/* eslint-disable react/prop-types */
import * as React from 'react'
import { Link, graphql } from 'gatsby'
import '../../global.css'
import Layout from '../components/layout'
import {
  SkillsButton,
  SubjectTag,
  SubjectButton,
  ActionButton,
  SkillsMapButton,
} from '../components/buttons'
import WorkplaceExamples from '../components/workplaceExamples'
import ClusterCategory from '../components/clusterCategory'
import NavDrawer from '../components/navDrawer'
import {
  Headline,
  H1,
  H2,
  H3,
  Subheadline,
  Body,
  Caption,
} from '../components/shared'

const IndexPage = ({
  data: {
    allAirtable: { nodes: dataFromAirtable },
  },
}) => {
  return (
    <Layout>
      <SkillsButton>
        Communicate appropriately, accurately and effectively
      </SkillsButton>
      <SubjectTag>Design and Technology</SubjectTag>

      <ActionButton>Categories</ActionButton>
      <SkillsMapButton />
      <WorkplaceExamples
        title="Workplace Examples"
        body="some text some more text"
      />
      <ClusterCategory />
      <Headline>Home Page</Headline>
      <Link to="/skillsmapSearch">Skillsmap Search</Link>
      <br />
      <Link to="/forLearners">For Learners</Link>
      <br />
      <Link to="/forEducators">For Educators</Link>
      <br />
      <Link to="/forCareersProfessionals">For Careers Professionals</Link>
      <br />
      <Link to="/about">About</Link>
      <br />
      <p>Text...</p>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>

export const query = graphql`
  query {
    allAirtable(filter: { queryName: { eq: "Skills" } }) {
      nodes {
        data {
          Skill
        }
      }
    }
  }
`
