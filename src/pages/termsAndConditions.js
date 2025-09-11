/* eslint-disable react/prop-types */
import * as React from 'react'
import Layout from '../components/layout.js'
import { H1, Copy, Contact, FurtherLinks } from '../components/shared.js'

const TermsAndConditions = () => {
  return (
    <Layout>
      <H1>Terms & Conditions</H1>
      <Copy>
        <p>
          <strong>Last updated:</strong>{' '}
          {new Date().toLocaleDateString('en-GB')}
        </p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using the SkillsMap® website, you agree to be bound
          by these Terms & Conditions. If you do not agree to these terms,
          please do not use this website.
        </p>

        <h2>2. Intellectual Property Rights</h2>
        <p>
          SkillsMap® is a trademarked and copyright-protected database
          developed by Dr Kate Daubney. All content on this website, including
          but not limited to text, graphics, logos, database structure, and
          research data, is protected by copyright and other intellectual
          property laws.
        </p>

        <h2>3. Prohibited Uses</h2>
        <p>
          <strong>You are expressly prohibited from:</strong>
        </p>
        <ul>
          <li>
            Using any content from this website for artificial intelligence (AI)
            training, machine learning model development, or any automated data
            processing for AI purposes
          </li>
          <li>
            Automated scraping, crawling, or systematic downloading of website
            content without prior written permission
          </li>
          <li>
            Reproducing, distributing, or creating derivative works from the
            SkillsMap® database without authorisation
          </li>
          <li>
            Using the content for commercial purposes without express written
            consent
          </li>
          <li>
            Attempting to reverse engineer or extract the underlying database
            structure
          </li>
        </ul>

        <h2>4. Automated Access</h2>
        <p>
          Automated access to this website, including but not limited to web
          crawling, scraping, or bot access, is strictly prohibited without
          prior written permission from SkillsMap®. This includes access by AI
          training systems, language model crawlers, and data harvesting tools.
        </p>

        <h2>5. Permitted Use</h2>
        <p>
          You may view and use the content on this website for personal,
          educational, or research purposes only. Any commercial use,
          redistribution, or incorporation into other works requires express
          written permission.
        </p>

        <h2>6. Copyright Notice</h2>
        <p>
          All content on this website is © Dr Kate Daubney and SkillsMap®.
          Unauthorised reproduction or distribution of any materials from this
          website may result in severe civil and criminal penalties.
        </p>

        <h2>7. Contact for Permissions</h2>
        <p>
          To request permission for any use not expressly permitted by these
          terms, including commercial use, research collaboration, or data
          access, please contact us.
        </p>

        <h2>8. Enforcement</h2>
        <p>
          We actively monitor for unauthorised use of our content and will
          pursue legal action against violators of these terms, including but
          not limited to copyright infringement and breach of these terms of
          service.
        </p>

        <h2>9. Changes to Terms</h2>
        <p>
          We reserve the right to modify these terms at any time. Changes will
          be posted on this page with an updated revision date. Continued use of
          the website after changes constitutes acceptance of the new terms.
        </p>
      </Copy>
    </Layout>
  )
}

export default TermsAndConditions
