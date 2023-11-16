/* eslint-disable react/prop-types */
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/layout'
import { H1, H3, Copy, Contact } from '../../components/shared'
import { ActionButton } from '../../components/buttons'

const AboutPage = () => {
  return (
    <Layout>
      <H1>About Skillsmap</H1>
      <Copy>
        <p>
          SkillsMap® is the trademarked, copyright-protected database of over
          250 transferable skills that are developed through almost 40 distinct
          subject areas taught in pre-18 education. The database was developed
          by Dr Kate Daubney through a manual textual analysis of all UK
          government curriculum documentation at GCSE and A Level,
          cross-referencing to Welsh and Scottish pre-higher education
          qualifications systems. SkillsMap® is therefore an evidence-led tool
          that shows you the skills that learners already develop through
          academic curriculum Subjects, and how those same skills might be used
          in the workplace. You can find out more about the peer-reviewed
          research Kate has published on this work here [link to Research &
          Publications].
        </p>
        <p>
          SkillsMap® is different to other skills frameworks and tools, because
          it is derived from the Subjects which are common to education
          globally. It is also not asking educators to add a few number of
          skills in, but instead to surface and articulate to learners the
          skills that are innate to all subjects.
        </p>
        <p>
          The research behind SkillsMap® proposes that instead of trying to
          make a ‘best guess’ of the skills that will be important in the
          future, it is more practical and realistic to recognise that different
          combinations of all these transferable skills are needed to solve the
          wicked problems of the future. Those same transferable skills enable
          everyone to gain and develop new knowledge and specialist skills.
        </p>
        <p>
          SkillsMap® research was based on UK pre-18 curriculum documentation,
          but subjects are fundamentally the same in disciplinary terms,
          wherever they are taught in the world, whatever form the syllabus
          might take. So while employers’ and governments’ priorities over
          perceived specialist skills gaps and shortages might change, the
          transferable skills needed to acquire those new specialist skills
          don’t change. And neither, essentially, do the subjects through which
          learners first use and develop those transferable skills in education.
        </p>
        <Contact />
        <H3>Further Information</H3>
        <p>You might be interested in browsing the following pages:</p>
        <div
          style={{
            display: 'flex',
            gap: 'var(--spacing-s)',
            maxWidth: '700px',
            flexWrap: 'wrap',
          }}
        >
          <Link to="./researchAndPublications">
            <ActionButton rightActive={true}>
              Research and Publications
            </ActionButton>
          </Link>
          <Link to="./websiteAndBookVariations">
            <ActionButton rightActive={true}>
              SkillsMap®: Website and Book variations
            </ActionButton>
          </Link>
          <Link to="./resources">
            <ActionButton rightActive={true}>Resources</ActionButton>
          </Link>
        </div>
      </Copy>
    </Layout>
  )
}

export default AboutPage
