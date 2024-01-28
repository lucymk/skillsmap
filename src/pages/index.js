/* eslint-disable react/prop-types */
import * as React from 'react'
import '../../global.css'
import Layout from '../components/layout'
import { SkillsMapButton } from '../components/buttons'
import { H1, Copy } from '../components/shared'
import LearnerIcon from '../assets/icons/learnerIcon.svg'
import SubjectIcon from '../assets/icons/subjectIcon.svg'
import CareerIcon from '../assets/icons/careerProfessionalIcon.svg'

const IndexPage = () => {
  return (
    <Layout>
      <H1>Welcome to SkillsMap®!</H1>
      <Copy>
        <div
          style={{
            maxWidth: '700px',
            marginTop: 'var(--spacing-s)',
            borderRadius: 'var(--br-card)',
            display: 'grid',
            gridTemplateRows: 'repeat(3, 1fr)',
            gridTemplateColumns: '1fr 14fr',
            gap: '0 var(--spacing-xs)',
            alignItems: 'center',
            font: 'var(--font-subheader)',
          }}
        >
          <SubjectIcon width="100%" height="auto" />
          <span
            style={{
              padding: 'var(--spacing-s) 0',
              borderBottom: 'var(--border-black)',
            }}
          >
            <span
              style={{ backgroundColor: 'var(--yellow)', fontWeight: 'bold' }}
            >
              Have you ever...
            </span>{' '}
            wondered what the subjects you study at school or college have to do
            with work and your career?
          </span>
          <CareerIcon width="100%" height="auto" />
          <span
            style={{
              padding: 'var(--spacing-s) 0',
              borderBottom: 'var(--border-black)',
            }}
          >
            <span
              style={{ backgroundColor: 'var(--yellow)', fontWeight: 'bold' }}
            >
              Have you ever...
            </span>{' '}
            really enjoyed a subject at school or college but wondered if there
            will be any future use for it in the workplace?
          </span>
          <LearnerIcon width="100%" height="auto" />
          <span>
            <span
              style={{ backgroundColor: 'var(--yellow)', fontWeight: 'bold' }}
            >
              Have you ever...
            </span>{' '}
            wondered what value your qualifications have to employers?
          </span>
        </div>
        <p>
          If you have ever asked yourself any of these questions, then
          SkillsMap&#174; is here to help you.
        </p>
        <p>
          {' '}
          SkillsMap&#174; shows you a selection of the transferable skills
          developed in each of 36 different academic subjects typically taught
          in pre-18 education.{' '}
        </p>
        <p>These are the skills that employers are looking for. </p>
        <p>
          You can also find the skills that different subjects have in common.
        </p>
        <p>
          {' '}
          Try searching your favourite subjects and see what skills you are
          developing.
        </p>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            maxWidth: '700px',
          }}
        >
          <SkillsMapButton />
        </div>
        {/* <p>
          If you want to learn more about SkillsMap® first, visit{' '}
          <InternalLink to="../forLearners">For learners</InternalLink>.{' '}
        </p>
        <p>
          If you are an educator, you can find out more about using SkillsMap®
          on our <InternalLink to="../forEducators">For Educators</InternalLink>{' '}
          page.
        </p>{' '}
        <p>
          If you are a Careers Professional, you can find out more about using
          SkillsMap® on our{' '}
          <InternalLink to="../forCareersProfessionals">
            For Careers Professionals
          </InternalLink>{' '}
          page.
        </p> */}
      </Copy>
    </Layout>
  )
}
export default IndexPage
