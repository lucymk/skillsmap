import * as React from 'react'
import { Link } from 'gatsby'

import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import '../../global.css'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout>
      <h1>Home Page</h1>
      <Link to="/skillsmapSearch">Skillsmap Search</Link>
      <br />
      <Link to="/forLearners">For Learners</Link>
      <br />
      <Link to="/forEducators">For Educators</Link>
      <br />
      <Link to="/forCareersProfessionals">For Careers Professionals</Link>
      <br />
      <Link to="/about">About</Link>
      <br />
      <p>Text...</p>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
