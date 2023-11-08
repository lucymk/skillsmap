/* eslint-disable react/prop-types */
import * as React from 'react'
import { Link } from 'gatsby'
import '../../global.css'
import Layout from '../components/layout'
import { SkillsButton, SubjectTag } from '../components/buttons'
import {
  Headline,
  H1,
  H2,
  H3,
  Subheadline,
  Body,
  Caption,
} from '../components/shared'

const IndexPage = ({ className }) => {
  console.log('in nidex', className)
  return (
    <Layout>
      <SkillsButton>
        Communicate appropriately, accurately and effectively
      </SkillsButton>
      <SubjectTag>Design and Technology</SubjectTag>
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
