/* eslint-disable react/prop-types */
import * as React from 'react'
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

const Resources = () => {
  return (
    <Layout>
      <Breadcrumbs breadcrumbTexts={['About', 'Resources']} />
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
        <p>
          <BulletList>
            <li>
              Figure 8 (p.36): Explore Encounter Embark: The complete journey{' '}
            </li>
            <li>
              Figure 9 (p.37): Explore Encounter Embark: The Careers statements{' '}
            </li>
            <li>
              Figure 10 (p.37): Explore Encounter Embark: The combined
              statements{' '}
            </li>
            <li>
              Figure 12 (p.44): Explore Encounter Embark: Sample learning gains
              for a guidance appointment{' '}
            </li>
            <li>
              Figure 13 (p.44): Explore Encounter Embark: Sample learning gains
              for information resources{' '}
            </li>
            <li>
              Figure 16 (p.91): Explore and Encounter: Mapping GCSE choices{' '}
            </li>
            <li>Figure 18 (p.103): Employability</li>
            <li>Figure 19 (p.118): Knowledge, qualifications and learning </li>
            <li>Figure 20 (p.123): Attributes </li>
            <li>
              Figure 24 (p.154): Applying Knowledge, learning, Attributes and
              Skills to In Around Beyond{' '}
            </li>
          </BulletList>
          <H3>SkillsMap® Categories and Clusters </H3>
          <p>
            {' '}
            Figures 22 and 23 in Careers Education to Demystify Employability
            were updated as part of the revision of the SkillsMap® taxonomy for
            building the tool. You can download the updated version of those
            figures for using with your learners here.
          </p>
        </p>
        <Contact />
        <FurtherLinks
          links={[
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
