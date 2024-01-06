import React from 'react'
import {
  workplaceExamples,
  workplaceExamplesHeader,
  workplaceExampleList,
  subjectsList,
} from './workplaceExamples.module.css'
import WorkplaceExamplesIconSvg from '../assets/icons/workplaceExamplesIcon.svg'
import SubjectIcon from '../assets/icons/skillIcon.svg'

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
        <SubjectIcon />
        Subjects this skill is used in:
      </div>
      <ul className={`${subjectsList}`}>
        {subjects.map((subject) => (
          <li key={subject}>{subject}</li>
        ))}
      </ul>
    </div>
  )
}
