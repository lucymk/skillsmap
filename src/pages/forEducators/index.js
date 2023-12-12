/* eslint-disable react/prop-types */
import * as React from 'react'
import Layout from '../../components/layout'
import { H1, Copy, FurtherLinks } from '../../components/shared'
import { SkillsMapButton } from '../../components/buttons'

const ForEducators = () => {
  return (
    <Layout>
      <H1>For Educators</H1>
      <Copy>
        <p>
          SkillsMap® was created to help you answer those questions to support
          learners through pre-18 education and into work, and to recognise the
          longer term value their education has.
        </p>
        <p>
          SkillsMap® is different to other skills platforms because rather than
          adding transferable skills into curriculum, it identifies the much
          broader and richer range of skills that you are already developing in
          your teaching with your learners, across every single subject area. It
          draws on the curriculum you already teach. But learners don’t know
          this unless we tell them.
        </p>
        <p>
          In SkillsMap®, learners can pick any one of 35 subjects commonly
          taught in school and college at pre-16 and pre-18 levels, and find out
          about 15 of the transferable skills they develop in that subject.
          Learners can also pick two or three subjects together, and find out
          the skills those subjects have in common.
        </p>
        <p>
          Each skill has a definition and four examples of how it might be used
          in different workplaces. This helps demonstrate why they are
          transferable. (If you are a teacher in England who is impacted by the
          Statutory Guidance and Benchmark 4 on Linking Curriculum to Careers,
          using this aspect of SkillsMap® will help you evidence this Benchmark
          really well).
        </p>
        <p>
          It’s important to recognise that these 15 skills are just a sample of
          the 50-100 transferable skills developed in each of the subjects. The
          choice of skills in the sample should not be seen as a judgement of
          the relative value of each skill either by subject or overall; in
          other words, these are not seen as the most essential skills or the
          easiest or most difficult to learn, any of which would vary hugely
          across subjects and between learners. They are simply a representative
          sample across a range of different skill types, to help learners
          recognise those skills when they use them, and to help you get a
          conversation started about curriculum and transferable skills.
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
      </Copy>
      <FurtherLinks
        links={[
          {
            link: './usingSkillsmapWithLearners',
            text: 'How can I use SkillsMap with my learners?',
          },
          {
            link: '../about',
            text: 'About SkillsMap®',
          },
        ]}
      />
    </Layout>
  )
}
export default ForEducators
