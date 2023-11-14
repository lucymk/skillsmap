import React from 'react'
import {
  workplaceExamples,
  workplaceExamplesHeader,
} from './workplaceExamples.module.css'
import WorkplaceExamplesIconSvg from '../assets/icons/workplaceExamplesIcon.svg'

export default function WorkplaceExamples({ examples }) {
  return (
    <div className={`${workplaceExamples}`}>
      <div className={`${workplaceExamplesHeader}`}>
        <WorkplaceExamplesIconSvg />
        Workplace Examples
      </div>
      {examples}
    </div>
  )
}
