/* eslint-disable react/prop-types */
import * as React from 'react'
import Layout from '../components/layout'
import { H1, Copy } from '../components/shared'
import { StaticImage } from 'gatsby-plugin-image'

const NotFoundPage = () => {
  return (
    <Layout>
      <H1>Page Not Found</H1>
      <StaticImage
        style={{
          margin: 'var(--spacing-m) 0',
          height: '400px',
          maxWidth: '700px',
        }}
        src="../assets/media/404.png"
      />
      <Copy>
        Sorry, we couldn&apos;t find what you were looking for. Try using the
        navigation menu on the left to get to the page you want.
      </Copy>
    </Layout>
  )
}

export default NotFoundPage
