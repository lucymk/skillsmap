/* eslint-disable react/prop-types */
import * as React from 'react'
import Layout from '../components/layout'
import { H1, H3, Copy, FurtherLinks } from '../components/shared'
import { SkillsMapButton } from '../components/buttons'

const forLearners = () => {
  return (
    <Layout>
      <H1>For learners</H1>
      <Copy>
        <p>
          Watch this video to find out more about what the subjects you study at
          school have to do with work and your future career.
        </p>
        <video style={{ width: '100%', border: 'var(--border-black)' }} />
      </Copy>
      <SkillsMapButton />
      <FurtherLinks
        links={[
          {
            link: '../about/understandingTransferableSkills',
            text: 'Understanding Transferable Skills',
          },
        ]}
      />
    </Layout>
  )
}

export default forLearners
