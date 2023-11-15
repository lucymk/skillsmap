/* eslint-disable react/prop-types */
import * as React from 'react'
import { Link } from 'gatsby'
import '../../global.css'
import Layout from '../components/layout'
import { SkillsMapButton } from '../components/buttons'
import { H1, Copy, BulletList } from '../components/shared'

const IndexPage = () => {
  return (
    <Layout>
      <H1>Welcome to SkillsMap</H1>
      <Copy>
        <BulletList>
          <li>
            Have you ever wondered what the subjects you study at school or
            college have to do with work and your career?
          </li>
          <li>
            Have you ever really enjoyed a subject at school or college but
            wondered if there will be any future use for it in the workplace?
          </li>
          <li>
            Have you ever wondered what value your qualifications have to
            employers?
          </li>
        </BulletList>
        <p style={{ margin: 'var(--spacing-m) 0 var(--spacing-m) 0' }}>
          If you have ever asked yourself any of these questions, then
          SkillsMap® is here to help you.
        </p>
        SkillsMap® shows you a selection of the transferable skills developed
        in each of 35 different academic subjects typically taught in pre-18
        education. These are the skills that employers are looking for. You can
        also find the skills that different subjects have in common. Try
        searching your favourite subjects and see what skills you are building.
      </Copy>
      <SkillsMapButton />
      <Copy>
        If you want to learn more about SkillsMap first, visit{' '}
        <Link style={{ color: 'var(--blue)' }} to="/forLearners">
          For learners
        </Link>
        . If you are an educator, you can find out more about using SkillsMap on
        our{' '}
        <Link style={{ color: 'var(--blue)' }} to="forEducators">
          For Educators
        </Link>{' '}
        page.
      </Copy>
    </Layout>
  )
}
export default IndexPage

// export const Head = () => <title>Home Page</title>
