/* eslint-disable react/prop-types */
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/layout'
import Breadcrumbs from '../../components/breadcrumbs'
import { H1, H3, Copy, ExternalLink } from '../../components/shared'
import { ActionButton } from '../../components/buttons'

const ResearchAndPublications = () => {
  return (
    <Layout>
      <Breadcrumbs breadcrumbTexts={['About', 'Research and Publications']} />
      <H1>Research and Publications</H1>
      <Copy>
        <p>
          The research that led to the creation of the SkillsMap® taxonomy and
          database is outlined in Kate Daubney’s peer-reviewed journal article
          in the Journal of Work-Applied Management, published in 2021:{' '}
          <ExternalLink src="https://doi.org/10.1108/JWAM-08-2020-0041">
            Daubney, K. (2021), “Employability is not inimical to good learning:
            rearticulating school academic curricula to surface their
            employability value”, Journal of Work-Applied Management Vol 13,
            no.1, pp.103-116.
          </ExternalLink>
        </p>
        <p>
          Applications of the SkillsMap® taxonomy and database are explored in
          detail in Kate’s Daubney’s book for Careers Leaders and Careers
          Professionals,{' '}
          <ExternalLink src="https://www.mheducation.co.uk/careers-education-to-demystify-employability-a-guide-for-professionals-in-schools-and-colleges-9780335250943-emea-group">
            Careers Education to Demystify Employability (Open University
            Press/McGraw Hill, 2021)
          </ExternalLink>
          , in a detailed section about how to introduce and talk to learners
          about employability. Employability is often not introduced in pre-18
          education, but helping learners understand more about it does
          contribute to effective Career decision-making. In the book, Kate
          elaborates on the elements of employability: knowledge, attributes,
          skills and experience.{' '}
        </p>
        <p>
          You can also find out about Kate’s research into surfacing the
          employability value of higher education curricula in her peer-reviewed
          journal article in the journal Higher Education, Skills and Work-Based
          Learning, published in 2021:{' '}
          <ExternalLink src="https://www.emerald.com/insight/content/doi/10.1108/HESWBL-07-2020-0165/full/html">
            Daubney, K. (2021), “‘Teaching Employability is not my job!’:
            redefining embedded employability from within the higher education
            curriculum”, Higher Education Skills and Work-Based Learning, (issue
            tbc)
          </ExternalLink>
          .
        </p>
        <p>
          Kate also contributed to a{' '}
          <ExternalLink src="https://www.kcl.ac.uk/policy-institute/assets/innovation-policy-briefing.pdf">
            policy briefing written by the King’s Policy Institute, IpsosMORI
            and the Centre for London in 2019
          </ExternalLink>
          , which explores the policy changes required to meet the impact of
          innovation. Kate contributed a section on the impact on pre-18
          education and employability which draws on some of the principles
          behind SkillsMap®.
        </p>
        <p>
          {' '}
          Kate delivers training and workshops with teachers, Careers
          Professionals, employers and education managers around the world on
          Careers education and extracting employability from the curriculum.
          She also does workshops with learners and students. You can find out
          more about Kate’s work on her website:{' '}
          <ExternalLink src="https://katedaubneycareers.com">
            katedaubneycareers.com
          </ExternalLink>
        </p>
        <H3>Further Information</H3>
        <p>You might be interested in browsing the following pages:</p>
        <div
          style={{
            display: 'flex',
            gap: 'var(--spacing-s)',
            maxWidth: '700px',
            flexWrap: 'wrap',
          }}
        >
          <Link to="../resources">
            {' '}
            <ActionButton rightActive={true}>Resources</ActionButton>
          </Link>
          <Link to="../websiteAndBookVariations">
            <ActionButton rightActive={true}>
              SkillsMap®: Website and Book variations
            </ActionButton>
          </Link>
        </div>
      </Copy>
    </Layout>
  )
}

export default ResearchAndPublications
