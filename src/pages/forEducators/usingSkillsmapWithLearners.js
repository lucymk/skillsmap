/* eslint-disable react/prop-types */
import * as React from 'react'
import Layout from '../../components/layout'
import Breadcrumbs from '../../components/breadcrumbs'
import { H1, H3, Copy, InternalLink, BulletList } from '../../components/shared'

const UsingSkillsmapWithLearners = () => {
  return (
    <Layout>
      <Breadcrumbs
        breadcrumbTexts={['For educators', 'Using SkillsMap® with learners']}
      />
      <H1>Using SkillsMap® with your learners</H1>
      <Copy>
        <p>
          Learners are developing transferable skills in every subject they
          study, but they won’t be aware of this unless we tell them. But when
          we know our subjects through areas of study, rather than through the
          lens of transferable skills, it can be just as hard for us as
          educators to find that language ourselves.
        </p>
        <p>
          At the other extreme, the research behind SkillsMap® surfaced a
          taxonomy of over 250 different transferable skills, and even the
          SkillsMap® searchable platform on this website contains around 100
          different skills. So articulating a huge number of transferable skills
          to learners can be pretty overwhelming for educators too!
        </p>
        <p>
          SkillsMap® can help you identify those skills that you probably
          instinctively know that you are using as a student and teacher of your
          subject. It will also give you some richer language for describing
          groups of skills that often get bundled together, such as ‘analytical’
          or ‘communication’ skills. SkillsMap® has been built with{' '}
          <InternalLink to="/about/categoriesAndClusters">
            Categories and Clusters
          </InternalLink>
          . While we don’t use that structure directly with learners, it is
          present in SkillsMap® and it might be a useful tool for you too.
        </p>
        <H3>Approaches to using SkillsMap®</H3>
        <p>
          If you are considering using SkillsMap® directly with learners, it
          may also help to read the guidance in the{' '}
          <InternalLink to="../forCareersProfessionals/usingSkillsMapInACareersSession">
            Careers Professionals section
          </InternalLink>{' '}
          on how to use it for the first time in a classroom setting. Though the
          learning situation might be different, the same approach will be
          effective.
        </p>
        <p>
          As part of that or any other learner interaction with SkillsMap® you
          can use<InternalLink to="../forLearners">this video</InternalLink>{' '}
          with your learners to introduce them to SkillsMap®.
        </p>
        <p>
          Here are a few other things you could do for and with your learners to
          introduce transferable skills into your teaching and learning design
          and delivery:
        </p>
        <BulletList>
          <li>
            When you read syllabus and curriculum documentation, think about the
            transferable skills required to engage in the activities or areas of
            study described.
          </li>
          <li>
            Which transferable skills do you think are underpinning specialist
            subject-related skills in your subject area, and might be essential
            for developing and using that specialist skill?
          </li>
          <li>
            How might you introduce a class topic with a transferable skill as
            well as an area of knowledge? For example, ‘Today’s class is all
            about weighing up options: how do we choose between different ways
            to make this calculation?’
          </li>
          <li>
            How might you use some of the skills listed in SkillsMap® to help
            learners recognise when they use them in classwork and homework?
          </li>
          <li>
            How might learners describe their subject through the lens of
            transferable skills rather than knowledge? For example, ‘I like
            Dance because I’m working with others to figure out how to create a
            new sequence of moves’ or ‘In Geography, I like that I have to look
            at the landscape from different points of view to get the whole
            picture’.
          </li>
        </BulletList>
        <p>
          We will be sharing resources for you to use through the site and you
          can also{' '}
          <InternalLink to="../about">contact SkillsMap®</InternalLink> for an
          INSET day event for your school or college.
        </p>
        <H3>Centralising the learner</H3>
        <p>
          Whatever you do as an educator to surface and talk about transferable
          skills with learners, it will increase learners’ confidence and
          ability to recognise those skills and use them. And that means that
          your learners will get more impact from what you are already doing in
          their education in the short and longer term. That supports and
          enables even the most disengaged learner to see the value of their
          education continue into work, whatever they go on to do.
        </p>
        <p>
          Furthermore, however you use SkillsMap® or talk about transferable
          skills, it is really important to remember that part of this
          conversation concerns the learner’s choice of academic subjects.
          SkillsMap® does not make a case for any subjects being more valuable
          for future employment than another. On the contrary, SkillsMap®
          celebrates the diversity of subjects and the huge range of
          transferable skills that all subjects develop across all disciplines.
          This is an evidenced fact of the research behind SkillsMap®.
          Diversity of learning and learners is fundamentally important, both in
          itself and as a key factor in solving the big and small problems of
          our future.
        </p>
        <p>
          So the core takeaway message from SkillsMap® and the research behind
          it is that all subjects are valuable from an employability point of
          view. The work we can do as teachers and educators is in helping
          learners recognise and realise that value while they are learning the
          subject, and use it to talk more confidently about what their subject
          learning means in practice, including as they make decisions about
          their futures. And that enables you, as educators, to get more impact
          from what you are already doing, without creating something completely
          new.
        </p>
        <p>
          Remember, if you love your subject then you’re an expert in the
          transferable skills your learners are developing too. Loving your
          subject means that you know it well, so you know instinctively what
          the transferable skills are that are innate to your subject, even if
          you don’t often talk about them. SkillsMap® should give you a way to
          revisit that understanding with your learners.
        </p>
      </Copy>
    </Layout>
  )
}

export default UsingSkillsmapWithLearners
