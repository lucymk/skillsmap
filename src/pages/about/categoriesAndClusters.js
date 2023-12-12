/* eslint-disable react/prop-types */
import * as React from 'react'
import Layout from '../../components/layout'
import Breadcrumbs from '../../components/breadcrumbs'
import { H1, Copy } from '../../components/shared'
import { StaticImage } from 'gatsby-plugin-image'

const CategoriesAndClusters = () => {
  return (
    <Layout>
      <Breadcrumbs
        crumbs={[
          {
            label: 'About',
            path: '/about/',
          },
          { label: 'Categories and Clusters' },
        ]}
      />
      <H1>Categories and Clusters</H1>
      <Copy>
        <p>
          Transferable skills can be grouped together, depending on what you use
          them for. This graphic shows we group them as Categories and Clusters
          in SkillsMap®.
        </p>
        <p>
          Click on these links to find out more about the Categories and
          Clusters of skills in SkillsMap® and how you might use them in the
          workplace.
        </p>
        <StaticImage
          placeholder="none"
          style={{ margin: 'var(--spacing-m) 0', maxWidth: '700px' }}
          alt="A diagram showing the 4 categories of skills and the clusters within each."
          src="../../assets/media/categoriesAndClusters.jpg"
        />
      </Copy>
    </Layout>
  )
}

export default CategoriesAndClusters
