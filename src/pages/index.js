import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import '../../global.css'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <StaticImage
          alt="SkillsMap Logo"
          src="../assets/media/skillsMapLogo.png"
        />
        <p style={{ font: 'var(--font-headline)' }}>Headline</p>
        <h1 style={{ font: 'var(--font-h1)' }}>Header 1</h1>
        <h2 style={{ font: 'var(--font-h2)' }}>Header 2</h2>
        <h3 style={{ font: 'var(--font-h3)' }}>Headline</h3>
        <h4 style={{ font: 'var(--font-h4)' }}>Subheader</h4>
        <p style={{ font: 'var(--font-body)' }}>Body text</p>
        <p style={{ font: 'var(--font-caption)' }}>Caption</p 
      </Layout 
      <p>Not in the layout container</p>
      <p style={{ backgroundColor: 'var(--yellow)' }}>
        Ive got my own styles attached
      </p>

      <p style={{ font: 'var(--font-headline)' }}>Headline</p>
      <h1 style={{ font: 'var(--font-h1)' }}>Header 1</h1>
      <h2 style={{ font: 'var(--font-h2)' }}>Header 2</h2>
      <h3 style={{ font: 'var(--font-h3)' }}>Headline</h3>
      <h4 style={{ font: 'var(--font-h4)' }}>Subheader</h4>
      <p style={{ font: 'var(--font-body)' }}>Body text</p>
      <p style={{ font: 'var(--font-caption)' }}>Caption</p>
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
