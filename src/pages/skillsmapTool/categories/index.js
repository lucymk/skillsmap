/* eslint-disable react/prop-types */
import * as React from 'react'
import Layout from '../../../components/layout'
import { H1, Copy, BulletList, InternalLink } from '../../../components/shared'
import Breadcrumbs from '../../../components/breadcrumbs'

const Categories = () => {
  return (
    <Layout>
      <Breadcrumbs
        crumbs={[
          { label: 'About', path: '/about/' },
          { label: 'Why SkillsMap®' },
        ]}
      />
      <H1> Categories</H1>
      <Copy></Copy>
    </Layout>
  )
}
export default Categories

// export const Head = () => <title>Home Page</title>
