/* eslint-disable react/prop-types */
import * as React from 'react'
import Layout from '../../../components/layout'
import { H1, Copy } from '../../../components/shared'
import Breadcrumbs from '../../../components/breadcrumbs'

const Categories = () => {
  return (
    <Layout>
      <Breadcrumbs
        crumbs={[
          { label: 'SkillsMap® Tool', path: '/skillsmapTool/' },
          { label: 'Categories' },
        ]}
      />
      <H1>Categories</H1>
      <Copy></Copy>
    </Layout>
  )
}
export default Categories
