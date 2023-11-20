/* eslint-disable react/prop-types */
import * as React from 'react'
import Layout from '../../components/layout'
import { H1, Copy, BulletList, InternalLink } from '../../components/shared'
import Breadcrumbs from '../../components/breadcrumbs'

const whySkillsmap = () => {
  return (
    <Layout>
      <Breadcrumbs
        crumbs={[
          { label: 'About', path: '/about/' },
          { label: 'Why SkillsMap®' },
        ]}
      />
      <H1>Why was SkillsMap® created?</H1>
      <Copy>
        <p>
          The core principle behind the research and practice that created
          SkillsMap® is that academic learning develops transferable skills as
          well as the knowledge we traditionally teach and assess. Those are the
          same transferable skills that employers are looking for, but we don’t
          talk about curriculum to learners in that way.
        </p>
        <p>
          These are not, however, the core skills of learning behaviours. They
          are the transferable skills that are innate to each subject, for
          example:
        </p>
        <BulletList>
          <li>listening effectively in Music or Languages</li>
          <li>defining problems in Design & Technology or Sociology</li>
          <li>gathering evidence in Geology or Biology or Archaeology</li>
          <li>interpreting results in Maths or Psychology</li>
          <li>
            evaluating explanations and narratives in History, Philosophy or
            English Language
          </li>
          <li>
            weighing available options in Dance, Physical Education or Computer
            Science and so on.
          </li>
        </BulletList>
        <p>So SkillsMap® was developed to close the skills gap by:</p>
        <BulletList>
          <li>
            helping learners recognise that they are developing transferable
            skills as well as gaining knowledge in every subject they study
          </li>
          <li>putting a name to those transferable skills</li>
          <li>
            enabling them to recognise those skills when they see and hear
            employers talking about them
          </li>
        </BulletList>
        <p>
          Understanding the relationship between education and transferable
          skills helps learners immediately understand better how their subject
          study and qualifications are relevant and valuable. When we make that
          possible for learners, we can open up new conversations with them
          about their future. And that is a good thing for everyone.
        </p>
        <p>
          It is also the most inclusive way that we can prepare learners for the
          transition to work, because every learner is developing skills in
          every subject they study, no matter whether they achieve
          qualifications or not. Talking about academic study by highlighting
          the transferable skills being developed helps every learner recognise
          how their education prepares them for work.
        </p>
        <p>
          You can find out about the research behind SkillsMap®{' '}
          <InternalLink to="../researchAndPublications">here</InternalLink>.
        </p>
      </Copy>
    </Layout>
  )
}
export default whySkillsmap
