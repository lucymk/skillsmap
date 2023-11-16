/* eslint-disable react/prop-types */
import * as React from 'react'
import Layout from '../../components/layout'
import {
  H1,
  H3,
  Copy,
  BulletList,
  FurtherLinks,
  InternalLink,
  Details,
} from '../../components/shared'

const SkillsmapAndCareersEducation = () => {
  return (
    <Layout>
      <H1>SkillsMap® and Careers Education</H1>
      <Copy>
        <p>
          In this section we share some ideas about how you can use SkillsMap®
          as part of your careers education programme.
        </p>
        <Details>
          <summary>Using SkillsMap® in a careers session</summary>
          <p>
            SkillsMap® has been designed to be used independently by learners,
            but our platform testing shows that it’s most effective when used in
            a structured way and led by a careers professional. Educators can
            also use this approach if they are using SkillsMap® directly with
            learners.
          </p>
          <p>We suggest that the first time you use it you might like to:</p>
          <BulletList>
            <li>
              Introduce SkillsMap® by sharing or showing{' '}
              <InternalLink to="../forLearners">the video</InternalLink>
            </li>
            <li>
              Go to the <InternalLink to="../">homepage</InternalLink> and ask
              learners to click on the SkillsMap® search function
            </li>
            <li>
              On the Subject selection page, suggest that first time around
              learners choose just one subject to search, for example their
              favourite subject
            </li>
            <li>
              Selecting a subject reveals 15 transferable skills developed in
              that subject. You could encourage them to click on the different
              skills for themselves and get the workplace examples
            </li>
            <li>
              When 2 or 3 subjects are selected at the same time, skills those
              subjects have in common will be shown
            </li>
          </BulletList>
        </Details>
        <Details>
          <summary>Why have you included definitions of the skills? </summary>
          <p>
            Many learners will be encountering transferable skills for the first
            time, so we can’t assume they can make sense of what they are
            discovering. Definitions help simplify what the skills are and give
            an indication of why and how they are important and useful. If you
            explore the{' '}
            <InternalLink to="../about/categoriesAndClusters">
              Categories and Clusters map
            </InternalLink>{' '}
            which shows how SkillsMap® is constructed, you’ll find some
            additional information there about how different groups of skills
            are defined and also used in the workplace.
          </p>
        </Details>{' '}
        <Details>
          <summary>What are the workplace examples for?</summary>
          <p>
            One of the reasons SkillsMap® was created was to close the gap
            between education and work, which is possible because these are
            transferable skills. In other words, they are literally transferable
            between the education context where they are first developed and the
            workplace where they are needed, as well as between multiple
            workplace contexts. So each of the skills listed for a subject has
            four workplace examples that will help learners understand how that
            skill is used in different workplace situations and sectors. Even if
            none of those workplace situations or sectors is of interest to the
            learner, they should immediately be able to see the transferability
            and the relevance of the skill, and be able to connect their subject
            study directly to work.
          </p>
        </Details>
        <Details>
          <summary>
            Shared transferable skills between different subjects
          </summary>
          <p>
            If you look at the skills of more than one subject, you will see in
            most cases that a few appear across different subjects. The research
            behind SkillsMap® shows that every subject has a number of
            transferable skills in common with every other subject. This is not
            only true for subjects in the same discipline like Chemistry and
            Biology. It’s also true for subjects as diverse as Dance and
            Physics, Computer Science and English Language, Physical Education
            and History, and so on.
          </p>
          <p>
            The examples on SkillsMap® will not show those connections strongly
            because there are only 15 skills shown for each subject, but in the
            larger dataset of 250 skills the overlaps are quite significant.
            Nonetheless you can still use this idea of common transferable
            skills to help learners recognise the connections between the
            subjects they choose and enjoy, as well as the ones they find more
            difficult.
          </p>
          <p>
            You might also be interested to know that the research behind
            SkillsMap® shows that some subjects like Media Studies, Design &
            Technology, Physical Education and Sociology develop a really large
            number of transferable skills. These subjects often get a negative
            press for being less academically rigorous, but that is an unfair
            and inaccurate representation. They provide a rich range of skill
            development that reinforces both other academic learning and the
            transition to work. This can be useful to reassure learners that
            whatever subjects they study now will help them prepare for their
            future working lives. This can also help you refute claims that
            these subjects are not useful to learners. They are incredibly
            useful to learners and develop huge numbers of skills sought after
            by employers.
          </p>
        </Details>
      </Copy>
      <FurtherLinks
        links={[
          { link: '../about/whySkillsmap', text: 'Why was SkillsMap created?' },
          {
            link: './usingSkillsmapWithLearners',
            text: 'How can I use SkillsMap with my learners?',
          },
        ]}
      />
    </Layout>
  )
}
export default SkillsmapAndCareersEducation
