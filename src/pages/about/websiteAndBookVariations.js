/* eslint-disable react/prop-types */
import * as React from 'react'
import Breadcrumbs from '../../components/breadcrumbs'
import Layout from '../../components/layout'
import { H1, Copy, Contact, FurtherLinks } from '../../components/shared'

const WebsiteAndBookVariations = () => {
  return (
    <Layout>
      <Breadcrumbs
        crumbs={[
          { label: 'About', path: '/about/' },
          { label: 'Website and Book Variations' },
        ]}
      />
      <H1>SkillsMap®: Website and Book Variations</H1>
      <Copy>
        <p>
          If you read the peer-reviewed journal article by Kate Daubney which
          describes and contextualises her curriculum analysis on which
          SkillsMap® is based, you may notice some differences between how the
          skills are defined and categorised compared to the Categories and
          Clusters map available in the Resources section of this website. That
          will also be true if you read Kate’s book Careers Education to
          Demystify Employability.
        </p>
        <p>
          {' '}
          SkillsMap® is, in some senses, a living thing. While many taxonomies
          – or categorisations – tend to be static, Kate wanted the database
          behind SkillsMap® to reflect the impact of using the taxonomy in real
          situations. So from time to time, it will be reviewed and updated.
          It’s also likely that the more that we talk about skills with learners
          in a curriculum context, the more skills we may want to include in the
          taxonomy because we feel more confident digging into that language and
          surfacing it for learners.
        </p>
        <p>
          {' '}
          The research behind SkillsMap® isn’t designed to be a definitive
          statement about the relationship between subjects and transferable
          skills. In its current accessible format through this website,
          SkillsMap® is designed to surface 15 of the skills developed in each
          Subject. The choice of skills in the sample should not be seen as a
          judgement of the relative value of each skill either by subject or
          overall; in other words, these are not seen as the most essential
          skills or the easiest or most difficult to learn, any of which would
          vary hugely across subjects and between learners. They are simply a
          representative sample across a range of different skill types, to help
          learners recognise those skills when they use them, They have been
          chosen as a conversation starter, to help learners recognise that
          alongside the knowledge and information they are taking on, they are
          also developing a number of transferable skills, of which these are
          just a few.
        </p>
        <p>
          {' '}
          It would be impossible and inappropriate to single out some skills as
          being more important than others, just as it would be wrong to single
          out some subjects as better or worse or more or less useful than
          others. The world is changing too quickly, and the combinations needed
          for different problems to be solved, different sectors, different
          innovations are going to vary. Diversity is key to our ability to
          adapt and address our future needs. There might be common themes that
          surface, but depth and nuance in skills language is more important
          than reducing all our skills needs to a simple hitlist. So SkillsMap®
          is designed instead to be a solid foundation for the most important
          conversations we can have about the many and diverse transferable
          skills that are developed across all subjects, and how we can support
          learners to draw on the value of their academic education in their
          future lives.
        </p>
        <p>
          {' '}
          Kate is constantly working with careers professionals, educators and
          learners to explore conversations about the real day-to-day practice
          of educating and developing learners, and reflecting with them on
          their experience of teaching or learning their subjects. All of this
          helps Kate to continually refine SkillsMap® and the research behind
          it as a practical tool that supports educators and Careers
          professionals identify and develop Skills in their learners. If you
          would like to work with Kate on exploring the transferable Skills
          profiles for particular Subject areas, please get in touch.
        </p>
        <Contact />
        <FurtherLinks
          links={[
            {
              link: '../researchAndPublications',
              text: 'Research and Publications',
            },
            {
              link: '../resources',
              text: 'Resources',
            },
          ]}
        />
      </Copy>
    </Layout>
  )
}

export default WebsiteAndBookVariations
