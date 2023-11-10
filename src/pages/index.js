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
import {
  Headline,
  H1,
  H2,
  H3,
  Subheadline,
  Body,
  Caption,
} from '../components/shared'
import SkillIconSvg from '../assets/icons/skillIcon.svg'

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
      <SubjectButton
        subjectIcon={<SkillIconSvg />}
        subjectName="Art"
      ></SubjectButton>
      <ActionButton>Categories</ActionButton>
      <SkillsMapButton />
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
