import React from 'react'
import {
  workplaceExamples,
  workplaceExamplesHeader,
} from './workplaceExamples.module.css'
import WorkplaceExamplesIconSvg from '../assets/icons/workplaceExamplesIcon.svg'

export default function WorkplaceExamples({ title, body }) {
  return (
    <div className={`${workplaceExamples}`}>
      <div className={`${workplaceExamplesHeader}`}>
        <WorkplaceExamplesIconSvg />
        {title}
      </div>
      {body}
    </div>
  )
}
