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
          them for. Click on the graphic below to explore Categories and
          Clusters of skills, and how you might use them in the workplace.
        </p>
        <StaticImage
          placeholder="none"
          src="../../assets/media/categoriesAndClusters.jpg"
        />
      </Copy>
    </Layout>
  )
}

export default CategoriesAndClusters
