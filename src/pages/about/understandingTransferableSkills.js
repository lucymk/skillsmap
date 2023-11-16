/* eslint-disable react/prop-types */
import * as React from 'react'
import Layout from '../../components/layout'
import Breadcrumbs from '../../components/breadcrumbs'
import { H1, Copy, InternalLink } from '../../components/shared'

const UnderstandingTransferableSkills = () => {
  return (
    <Layout>
      <Breadcrumbs
        breadcrumbTexts={['About', 'Understanding transferable skills']}
      />
      <H1>Understanding transferable skills</H1>
      <Copy>
        <p>
          Transferable skills are the skills you use and develop in one
          situation – like your education – that are also used and developed in
          other situations – like the workplace. Whatever subjects you study and
          whatever job or career you choose, many of the transferable skills you
          develop at school and college will be used in your future work. They
          might be used in different ways, but they are exactly the same skills.{' '}
        </p>
        <p>
          You can find examples of some of the transferable skills you are
          developing in each of your subjects by using the{' '}
          <InternalLink to="/skillsmapSearch">
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
          you use them for. Click on the graphic below to explore Categories and
          Clusters of skills, and how you might use them in the workplace.{' '}
        </p>
      </Copy>
    </Layout>
  )
}

export default UnderstandingTransferableSkills
