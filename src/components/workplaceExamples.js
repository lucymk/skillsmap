import React from 'react'
import {
  workplaceExamples,
  workplaceExamplesHeader,
  workplaceExampleList,
  subjectsList,
} from './workplaceExamples.module.css'
import WorkplaceExamplesIconSvg from '../assets/icons/workplaceExamplesIcon.svg'
import SubjectIcon from '../assets/icons/subjectIcon.svg'
import { InternalLink } from './shared'

export default function WorkplaceExamples({ examples }) {
  return (
    <div className={`${workplaceExamples}`}>
      <div className={`${workplaceExamplesHeader}`}>
        <WorkplaceExamplesIconSvg />
        Workplace Examples
      </div>
      <ul className={`${workplaceExampleList}`}>
        {examples.map((example) => (
          <li key={example}>{example}</li>
        ))}
      </ul>
    </div>
  )
}

export function SubjectsList({ subjects }) {
  return (
    <div className={`${workplaceExamples}`}>
      <div className={`${workplaceExamplesHeader}`}>
        <SubjectIcon width="35px" />
        Subjects this skill is used in:
      </div>
      <ul className={`${subjectsList}`}>
        {subjects.map((subject) => (
          <li key={subject}>
            <InternalLink
              to={`../../search/?subjects=${subject.replaceAll(' ', '+')}`}
            >
              {subject}
            </InternalLink>
          </li>
        ))}
      </ul>
    </div>
  )
}
