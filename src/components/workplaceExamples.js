import React from 'react'
import {
  workplaceExamples,
  workplaceExamplesHeader,
  workplaceExampleList,
} from './workplaceExamples.module.css'
import WorkplaceExamplesIconSvg from '../assets/icons/workplaceExamplesIcon.svg'

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
