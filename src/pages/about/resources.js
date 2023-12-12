/* eslint-disable react/prop-types */
import * as React from 'react'
import { graphql } from 'gatsby'
import Breadcrumbs from '../../components/breadcrumbs'
import Layout from '../../components/layout'
import {
  H1,
  H3,
  Copy,
  Contact,
  BulletList,
  FurtherLinks,
} from '../../components/shared'

const Resources = ({
  data: {
    pdfs: { edges: pdfEdges },
    jpg: { edges: jpgEdges },
  },
}) => {
  console.log({ pdfEdges, jpgEdges })

  return (
    <Layout>
      <Breadcrumbs
        crumbs={[{ label: 'About', path: '/about/' }, { label: 'Resources' }]}
      />
      <H1>Resources</H1>
      <Copy>
        <h3 style={{ fontSize: '20px', margin: '0 0 0 0' }}>
          Resources from Careers Education to Demystify Employability
        </h3>
        <p>
          Kate’s Daubney’s book for Careers Leaders and Careers Professionals,
          Careers Education to Demystify Employability (Open University
          Press/McGraw Hill, 2021), translates some of the best practice of
          university careers education into a pre-18 context. Drawing on her
          innovations in careers learning gain and extracted employability, Kate
          shares a range of ideas on how to get more impact from what you are
          already delivering in your school or college careers programme,
          whether you are bound by the Statutory Guidance Benchmarks or not.
        </p>
        <p>
          Kate worked with graphic designer Kalina Zlatkova to create the
          graphics for the book, many of which can be used with learners. They
          can be found and downloaded here. If you are using the graphics,
          please be courteous and credit Kate and Kalina’s work as in the
          original graphics and do not breach copyright in your usage. Thank
          you!{' '}
        </p>
        <BulletList>
          {pdfEdges.map((file, index) => {
            return (
              <li key={`pdf-${index}`}>
                <a
                  style={{ color: 'var(--blue)' }}
                  href={file.node.publicURL}
                  download
                >
                  {file.node.name}
                </a>
              </li>
            )
          })}
        </BulletList>
        <H3>SkillsMap® Categories and Clusters </H3>
        <p>
          Figures 22 and 23 in Careers Education to Demystify Employability were
          updated as part of the revision of the SkillsMap® taxonomy for
          building the tool. You can download the updated version of those
          figures for using with your learners{' '}
          {/* <a
            style={{ color: 'var(--blue)' }}
            href={file.node.publicURL}
            download
          >
            here.
          </a> */}
          {jpgEdges.map((file, index) => {
            return (
              <a
                key={`jpg-${index}`}
                style={{ color: 'var(--blue)' }}
                href={file.node.publicURL}
                download
              >
                here
              </a>
            )
          })}
          .
        </p>
        <Contact />
        <FurtherLinks
          links={[
            {
              link: '../whySkillsmap',
              text: 'Why SkillsMap®',
            },
            {
              link: '../whatsInSkillsmap',
              text: "What's in SkillsMap®",
            },
            {
              link: '../researchAndPublications',
              text: 'Research and Publications',
            },
            {
              link: '../websiteAndBookVariations',
              text: 'Website and Book Variations',
            },
          ]}
        />
      </Copy>
    </Layout>
  )
}

export default Resources

export const query = graphql`
  query {
    pdfs: allFile(filter: { extension: { eq: "pdf" } }) {
      edges {
        node {
          publicURL
          name
        }
      }
    }
    jpg: allFile(filter: { extension: { eq: "jpg" } }) {
      edges {
        node {
          publicURL
          name
        }
      }
    }
  }
`
