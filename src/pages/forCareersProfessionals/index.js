/* eslint-disable react/prop-types */
import * as React from 'react'
import Layout from '../../components/layout'
import {
  H1,
  H3,
  Copy,
  FurtherLinks,
  InternalLink,
  Details,
} from '../../components/shared'
import { SkillsMapButton } from '../../components/buttons'

const ForCareersProfessionals = () => {
  return (
    <Layout>
      <H1>For Careers Professionals</H1>
      <Copy>
        <p>
          The{' '}
          <InternalLink to="../about/researchAndPublications">
            research behind SkillsMap®
          </InternalLink>{' '}
          proposes that learners are using and developing a huge range of
          transferable skills in every subject they study. But that’s a
          relatively unorthodox idea for all of us because education and
          qualifications are normally described as being about the acquisition
          of knowledge, and not of transferable skills. Curriculum, syllabus and
          assessment all tend to focus on testing that knowledge acquisition.
          Approaches – like SkillsMap® – that surface the language of
          transferable skills from curriculum have been successfully delivered
          in UK higher education and are now increasingly common. They are,
          however, new in pre-18 education.
        </p>
        <p>
          You can use this video with your learners to introduce them to
          SkillsMap®
        </p>
        <div
          className="video"
          style={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}
        >
          <iframe
            src="https://player.vimeo.com/video/887947787?h=d0cf4d85bf"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: '1',
            }}
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
          ></iframe>
        </div>
        <SkillsMapButton />
        <H3>You may also be wondering:</H3>
        <Details>
          <summary>What’s the employer point of view?</summary>
          <p>
            We know from the Institute of Student Employers’ annual surveys that
            the vast majority of graduate recruiting employers often don’t look
            for learners of any specific subjects, particularly at post-16 and
            post-18, and even after higher education. That’s because in many
            cases, they don’t have any use for the knowledge that learners
            acquire. They will teach their new employees all the knowledge they
            need to learn to do the job. But in order to acquire that new
            knowledge and pick up new specialist skills, all employers are
            looking for transferable skills, sometimes also described as
            competences. In fact, most roles are defined in terms of
            transferable skills or competences, and those are the key areas they
            assess applicants on in recruitment, and in the early stages of
            their careers. So we need to help learners understand that they are
            already developing these transferable skills before they start
            thinking about jobs and careers and their future pathways. We also
            need to help learners understand that these transferable Skills are
            what they need not only to do a job, but also to learn the new
            knowledge required for any job.
          </p>
          <p>
            Learners – and their parents and carers – are also likely to be
            worried about having ‘the right skills’ for an uncertain future. The
            research behind SkillsMap® proposes that instead of trying to make
            a best guess of the skills that will be important in the future, the
            wicked problems that shape our world are best solved by using
            different combinations of transferable skills that learners are
            already using and developing. This is how many workplaces function
            already, bringing together people with different combinations of
            transferable skills, such as analytical, innovation, critical
            thinking and problem-definition skills for example. And this is only
            going to become more important. So it’s reassuring for learners to
            know that these same transferable skills that are developed through
            their academic studies enable every individual to work in diverse
            employment settings, with diverse teams, and underpin their ability
            to acquire and apply new knowledge and specialist skills.
          </p>
        </Details>
        <Details>
          <summary>
            What impact does this have on learners choosing subjects to study?
          </summary>
          <p>
            Understanding the relationship between education and transferable
            skills helps learners immediately understand better how all their
            subject study and qualifications are relevant and valuable, at
            pre-16. pre-18 and post-18 levels. It takes the fear away about
            choosing the ‘right’ or ‘wrong’ subjects, and helps them focus on
            studying what they enjoy, which we know is really essential to
            helping them succeed. Seeing their subjects as also being ways to
            develop transferable skills can help them recognise the
            relationships between subjects as similar or complementary and
            support key decisions about subject choice.
          </p>
          <p>
            There is a lot of rhetoric about ‘good’ and ‘bad’ subjects and
            ‘right’ or ‘wrong’ choices. Very rarely is a subject choice the
            wrong one for a learner; if they drop something they need later, it
            just means taking a slightly longer route to the same destination,
            but that is rarely a poor outcome for the learner as they gain
            useful experience along the way. When we recognise that all subjects
            develop transferable skills that are relevant to future work, no
            subject is a ’bad’ or ‘wrong’ subject, because they are still using
            and developing valuable transferable skills. Understanding that can
            be incredibly reassuring to learners.
          </p>
          <p>
            SkillsMap® therefore does not make a case for any one subject being
            more valuable for future employment than another. On the contrary,
            SkillsMap® actively and intentionally celebrates subject diversity
            and value across all subject areas and disciplines. Diversity of
            learning and learners is fundamental to social justice, and key to
            solving the big and small problems of our future. And the more
            transferable skills a learner develops, the better prepared they are
            for whatever their future holds. So the core takeaway message from
            SkillsMap® and the research behind it is that all subjects are
            valuable from an employability point of view, and that is the most
            inclusive position we can take on subject choice. The work we need
            to do as careers professionals is in helping learners recognise and
            realise that value, and use it to make decisions about their
            futures. SkillsMap® is here to help you start that conversation
            with your learners.{' '}
          </p>
          <p>
            When we make it possible for learners to recognise these new ways to
            understand the value of education, we can open up new conversations
            with them about their future. And that has to be a good thing for
            everyone.
          </p>
        </Details>
      </Copy>
      <FurtherLinks
        links={[
          {
            link: './skillsmapAndCareersEducation',
            text: 'SkillsMap® and Careers Education',
          },
          { link: './about', text: 'About SkillsMap®' },
        ]}
      />
    </Layout>
  )
}
export default ForCareersProfessionals
