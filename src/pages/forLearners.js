/* eslint-disable react/prop-types */
import * as React from 'react'
import Layout from '../components/layout'
import { H1, H3, Copy, Details, InternalLink } from '../components/shared'
import { SkillsMapButton } from '../components/buttons'

const forLearners = () => {
  return (
    <Layout>
      <H1>For Learners</H1>
      <Copy>
        <p>
          Watch this video to find out more about what the subjects you study at
          school have to do with work and your future career.
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
      </Copy>
      <SkillsMapButton />
      <H3>Want to know more about transferable skills?</H3>
      <Details>
        <summary>Understanding transferable skills</summary>
        <p>
          Transferable skills are the skills you use and develop in one
          situation – like your education – that are also used and developed in
          other situations – like the workplace. Whatever subjects you study and
          whatever job or career you choose, many of the transferable skills you
          develop at school and college will be used in your future work. They
          might be used in different ways, but they are exactly the same skills.
        </p>
        <p>
          You can find examples of some of the transferable skills you are
          developing in each of your subjects by using the{' '}
          <InternalLink to="../skillsmapTool">
            SkillsMap® search tool
          </InternalLink>{' '}
          on this website.
        </p>
        <p>
          {' '}
          In the database behind SkillsMap® there are over 250 different
          transferable skills, and in each subject you study you are likely to
          be using and developing between 50 and 100 of them. That is a lot of
          skills! If we showed you all those skills here, it would be a bit
          overwhelming and difficult to make sense of!
        </p>
        <p>
          {' '}
          So in SkillsMap® we show you 15 of the transferable skills you
          develop so you can get used to the idea that this is something
          happening in every subject you study. They are a sample selection to
          give you an idea. They are not necessarily the most important or
          frequently used skills in this subject, but simply a range to show you
          how different the skills are in each subject, and between different
          subjects. Your teachers and careers leaders will help you discover
          more if you are interested.{' '}
        </p>
        <p>
          The other really useful thing that SkillsMap® shows you is that you
          are developing the same skills in more than one subject at a time. In
          subjects that have some similarities or connections – like science
          subjects or creative subjects – there are more transferable skills in
          common. But even in very different subjects – for example Dance,
          Physics and Geography –you are using and developing not only some
          similar skills but also a very wide range of different transferable
          skills.{' '}
        </p>
        <p>
          Transferable skills can also be grouped together, depending on what
          you use them for. In this website you can explore{' '}
          <InternalLink to="../about/categoriesAndClusters">
            Categories and Clusters of skills
          </InternalLink>
          , and how you might use them in the workplace.{' '}
        </p>
      </Details>
    </Layout>
  )
}

export default forLearners
